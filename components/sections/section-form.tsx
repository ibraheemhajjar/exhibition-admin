/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/common/forms/form-input';
import { FormNumberInput } from '@/components/common/forms/form-number-input';
import { FormRadioGroup } from '@/components/common/forms/form-radio-group';
import { FormSelect } from '@/components/common/forms/form-select';
import { FormCheckbox } from '@/components/common/forms/form-checkbox';
import { FormToggleBadge } from '@/components/common/forms/form-toggle-badge';
import { FormDatePicker } from '@/components/common/forms/form-date-picker';
import { FormImageUpload } from '@/components/common/forms/form-image-upload';
import { PrimaryButton } from '@/components/common/buttons/primary-button';
import { SecondaryButton } from '@/components/common/buttons/secondary-button';
import { DestructiveButton } from '@/components/common/buttons/destructive-button';
import { ConfirmationDialog } from '@/components/common/dialogs/confirmation-dialog';
import { sectionSchema, type SectionFormValues } from '@/lib/schemas/section';
import {
  GET_SECTION_BY_ID_FULL,
  CREATE_SECTION,
  UPDATE_SECTION,
  DELETE_SECTION,
  GET_ALL_EXTRA_SERVICE,
  GET_SECTION_RESERVE_BY_SECTION_ID,
} from '@/lib/graphql/sections';
import {
  SECTION_TYPE_LABELS,
  FLOOR_MATERIAL_LABELS,
  GetSectionByIdFullResponse,
  GetSectionByIdVariables,
  GetSectionReserveByIdResponse,
  GetSectionReserveByIdVariables,
  CreateSectionVariables,
  UpdateSectionVariables,
  DeleteSectionVariables,
  GetAllExtraServiceResponse,
  GetAllExtraServiceVariables,
} from '@/types/sections';

interface SectionFormProps {
  sectionId?: string;
}

export function SectionForm({ sectionId }: SectionFormProps) {
  const router = useRouter();
  const isEditMode = !!sectionId;
  const [showWarningDialog, setShowWarningDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [checkingReservations, setCheckingReservations] = useState(false);

  const { data: servicesData } = useQuery<
    GetAllExtraServiceResponse,
    GetAllExtraServiceVariables
  >(GET_ALL_EXTRA_SERVICE, {
    variables: { page: 0, size: 100 },
  });

  const { data: sectionData, loading: loadingSection } = useQuery<
    GetSectionByIdFullResponse,
    GetSectionByIdVariables
  >(GET_SECTION_BY_ID_FULL, {
    variables: { sectionId: sectionId! },
    skip: !isEditMode,
  });

  const [checkReservations] = useLazyQuery<
    GetSectionReserveByIdResponse,
    GetSectionReserveByIdVariables
  >(GET_SECTION_RESERVE_BY_SECTION_ID);

  const [createSection, { loading: creating }] = useMutation<
    any,
    CreateSectionVariables
  >(CREATE_SECTION);

  const [updateSection, { loading: updating }] = useMutation<
    any,
    UpdateSectionVariables
  >(UPDATE_SECTION);

  const [deleteSection, { loading: deleting }] = useMutation<
    any,
    DeleteSectionVariables
  >(DELETE_SECTION);

  const form = useForm<SectionFormValues>({
    resolver: zodResolver(sectionSchema),
    defaultValues: {
      name: '',
      totalAreaSqm: undefined,
      ceilingHeightM: undefined,
      floorMaterial: undefined,
      hasLighting: false,
      hasAirConditioning: false,
      hasInternet: false,
      hasEmergencyExit: false,
      hasElectricity: false,
      parkingSpots: false,
      notes: '',
      sectionImage: '',
      services: [],
      sectionType: null,
      hasReserveByAdmin: false,
      reserveFrom: null,
      reserveTo: null,
    },
  });

  // Reset form when section data loads
  useEffect(() => {
    if (sectionData?.getSectionById) {
      const section = sectionData.getSectionById;
      form.reset({
        name: section.name || '',
        totalAreaSqm: section.totalAreaSqm || undefined,
        ceilingHeightM: section.ceilingHeightM || undefined,
        floorMaterial: section.floorMaterial || undefined,
        hasLighting: section.hasLighting || false,
        hasAirConditioning: section.hasAirConditioning || false,
        hasInternet: section.hasInternet || false,
        hasEmergencyExit: section.hasEmergencyExit || false,
        hasElectricity: section.hasElectricity || false,
        parkingSpots: section.parkingSpots || false,
        notes: section.notes || '',
        sectionImage: section.sectionImage || '',
        services: section.services?.map((s: any) => s.id) || [],
        sectionType: section.sectionType || null,
        hasReserveByAdmin: section.hasReserveByAdmin || false,
        reserveFrom: section.reserveFrom ? new Date(section.reserveFrom) : null,
        reserveTo: section.reserveTo ? new Date(section.reserveTo) : null,
      });
    }
  }, [sectionData, form]);

  const hasReserveByAdmin = form.watch('hasReserveByAdmin');

  const onSubmit = async (data: SectionFormValues) => {
    try {
      if (isEditMode) {
        const updateInput: any = {
          id: sectionId,
          name: data.name,
          totalAreaSqm: data.totalAreaSqm,
          ceilingHeightM: data.ceilingHeightM,
          floorMaterial: data.floorMaterial,
          hasLighting: data.hasLighting,
          hasAirConditioning: data.hasAirConditioning,
          hasInternet: data.hasInternet,
          hasEmergencyExit: data.hasEmergencyExit,
          hasElectricity: data.hasElectricity,
          parkingSpots: data.parkingSpots,
          newServicesId: data.services,
          hasReserveByAdmin: data.hasReserveByAdmin,
        };

        // Only add if not empty/undefined
        if (data.notes) updateInput.notes = data.notes;
        if (data.sectionImage) updateInput.sectionImage = data.sectionImage;
        if (data.sectionType) updateInput.sectionType = data.sectionType;
        if (data.reserveFrom)
          updateInput.reserveFrom = data.reserveFrom
            .toISOString()
            .split('T')[0];
        if (data.reserveTo)
          updateInput.reserveTo = data.reserveTo.toISOString().split('T')[0];

        console.log('📤 UPDATE input:', updateInput);

        await updateSection({
          variables: { input: updateInput },
        });
      } else {
        await createSection({
          variables: {
            input: {
              name: data.name,
              totalAreaSqm: data.totalAreaSqm!,
              ceilingHeightM: data.ceilingHeightM!,
              floorMaterial: data.floorMaterial!,
              hasLighting: data.hasLighting,
              hasAirConditioning: data.hasAirConditioning,
              hasInternet: data.hasInternet,
              hasEmergencyExit: data.hasEmergencyExit,
              hasElectricity: data.hasElectricity,
              parkingSpots: data.parkingSpots,
              notes: data.notes || undefined,
              sectionImage: data.sectionImage || undefined,
              services: data.services, // ← CREATE uses services
              sectionType: data.sectionType,
              hasReserveByAdmin: data.hasReserveByAdmin,
              reserveFrom: data.reserveFrom
                ? data.reserveFrom.toISOString().split('T')[0]
                : undefined,
              reserveTo: data.reserveTo
                ? data.reserveTo.toISOString().split('T')[0]
                : undefined,
            },
          },
        });
      }
      router.push('/sections');
    } catch (error: any) {
      console.error('❌ Error:', error);
    }
  };
  const handleDeleteClick = async () => {
    if (!sectionId) return;

    setCheckingReservations(true);

    try {
      const { data } = await checkReservations({
        variables: { sectionId },
      });

      const reservations = data?.getSectionReserveBySectionId || [];

      if (reservations.length > 0) {
        setShowWarningDialog(true);
      } else {
        setShowConfirmDialog(true);
      }
    } catch (error) {
      console.error('Error checking reservations:', error);
    } finally {
      setCheckingReservations(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!sectionId) return;

    try {
      await deleteSection({
        variables: { sectionId },
      });
      router.push('/sections');
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  if (loadingSection) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <p className="text-neutral-950">جاري التحميل...</p>
      </div>
    );
  }

  const section = sectionData?.getSectionById;
  const services =
    servicesData?.getAllExtraService?.content?.map((service: any) => ({
      label: service.name,
      value: service.id,
    })) || [];

  return (
    <div className="flex flex-col gap-6.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center rounded-md p-1 hover:bg-neutral-100 transition-colors hover:cursor-pointer"
          >
            <ArrowRight className="size-4.5 sm:size-6 text-neutral-950" />
          </button>
          <h1 className="text-2xl sm:text-[32px] font-medium text-neutral-950">
            {isEditMode ? section?.name : 'إنشاء جناح'}
          </h1>
        </div>

        {/* Status Badge */}
        <div
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            hasReserveByAdmin
              ? 'bg-error-100 text-error-500'
              : 'bg-success-100 text-success-500'
          }`}
        >
          {hasReserveByAdmin ? 'محجوز' : 'متاح'}
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Right: Form Fields */}
            <div className="w-full lg:w-4/5 space-y-4.5">
              <div className="rounded-2xl p-4 bg-neutral-100">
                {/* Section Name */}
                <FormInput
                  form={form}
                  name="name"
                  label="اسم الجناح"
                  placeholder="أدخل اسم الجناح"
                  required
                />
              </div>

              <div className="rounded-2xl p-4 bg-neutral-100 space-y-5">
                <div className="bg-neutral-50 p-5 rounded-4xl space-y-6">
                  {/* Section Status */}
                  <FormRadioGroup
                    form={form}
                    name="hasReserveByAdmin"
                    label="حالة الجناح"
                    options={[
                      { label: 'متاح', value: false },
                      { label: 'محجوز', value: true },
                    ]}
                    required
                  />

                  {/* Date Range - Show only when reserved */}
                  {hasReserveByAdmin && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      <FormDatePicker
                        form={form}
                        name="reserveFrom"
                        label="من"
                        required
                        maxDate={form.watch('reserveTo') || undefined}
                        inputClassName="bg-neutral-100"
                      />
                      <FormDatePicker
                        form={form}
                        name="reserveTo"
                        label="إلى"
                        required
                        minDate={form.watch('reserveFrom') || undefined}
                        inputClassName="bg-neutral-100"
                      />
                    </div>
                  )}
                </div>

                {/* Section Type */}
                <FormSelect
                  form={form}
                  name="sectionType"
                  label="نوع الجناح"
                  placeholder="الرجاء الاختيار"
                  options={Object.entries(SECTION_TYPE_LABELS).map(
                    ([value, label]) => ({
                      value,
                      label,
                    })
                  )}
                />

                {/* Total Area */}
                <FormNumberInput
                  form={form}
                  name="totalAreaSqm"
                  label="المساحة الإجمالية"
                  placeholder="0"
                  required
                  min={0}
                  step={0.01}
                />

                {/* Ceiling Height */}
                <FormNumberInput
                  form={form}
                  name="ceilingHeightM"
                  label="ارتفاع السقف"
                  placeholder="0"
                  required
                  min={0}
                  step={0.01}
                />

                {/* Floor Material */}
                <FormSelect
                  form={form}
                  name="floorMaterial"
                  label="نوع الأرضية"
                  placeholder="الرجاء الاختيار"
                  required
                  options={Object.entries(FLOOR_MATERIAL_LABELS).map(
                    ([value, label]) => ({
                      value,
                      label,
                    })
                  )}
                />

                {/* Infrastructure */}
                <div className="space-y-2.5">
                  <p className="text-base font-medium text-neutral-950">
                    البنية التحتية
                  </p>
                  <div className="flex flex-wrap gap-x-20 gap-y-5 rounded-2xl bg-neutral-50 p-4">
                    <FormCheckbox
                      form={form}
                      name="hasLighting"
                      label="إضاءة"
                    />
                    <FormCheckbox
                      form={form}
                      name="hasAirConditioning"
                      label="تكييف"
                    />
                    <FormCheckbox
                      form={form}
                      name="hasInternet"
                      label="إنترنت"
                    />
                    <FormCheckbox
                      form={form}
                      name="hasEmergencyExit"
                      label="مخرج طوارئ"
                    />
                    <FormCheckbox
                      form={form}
                      name="hasElectricity"
                      label="كهرباء"
                    />
                    <FormCheckbox
                      form={form}
                      name="parkingSpots"
                      label="موقف سيارات"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-4 bg-neutral-100">
                {/* Additional Services */}
                <FormToggleBadge
                  form={form}
                  name="services"
                  label="خدمات إضافية"
                  options={services}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {isEditMode ? (
                  <>
                    <PrimaryButton
                      type="submit"
                      isLoading={updating}
                      className="flex-1"
                    >
                      حفظ التغييرات
                    </PrimaryButton>
                    <DestructiveButton
                      type="button"
                      onClick={handleDeleteClick}
                      isLoading={checkingReservations || deleting}
                      className="flex-1"
                    >
                      حذف الجناح
                    </DestructiveButton>
                  </>
                ) : (
                  <>
                    <SecondaryButton
                      type="button"
                      onClick={() => router.back()}
                      className="flex-1"
                    >
                      إلغاء
                    </SecondaryButton>
                    <PrimaryButton
                      type="submit"
                      isLoading={creating}
                      className="flex-1"
                    >
                      إنشاء جناح
                    </PrimaryButton>
                  </>
                )}
              </div>
            </div>
            {/* Left: Image Upload */}
            <div className="w-full lg:w-1/5">
              <FormImageUpload
                form={form}
                name="sectionImage"
                label="صور الجناح"
              />
            </div>
          </div>
        </form>
      </Form>

      {/* Warning Dialog - Has Reservations */}
      <ConfirmationDialog
        open={showWarningDialog}
        onOpenChange={setShowWarningDialog}
        title=" تعذّر حذف الجناح لأن هناك حجوزات قائمة مرتبطة به. يرجى إلغاء الحجوزات أولاً ثم أعد المحاولة."
        confirmText="تم"
        confirmButtonClassName="bg-neutral-950 text-white hover:bg-neutral-950/75"
        variant="warning"
        onConfirm={() => setShowWarningDialog(false)}
      />

      {/* Confirmation Dialog - No Reservations */}
      <ConfirmationDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        title="هل أنت متأكد من حذف هذا الجناح؟ لا يمكن التراجع عن هذا الإجراء."
        confirmText="حذف"
        cancelText="إلغاء"
        variant="danger"
        onConfirm={handleConfirmDelete}
        isLoading={deleting}
      />
    </div>
  );
}
