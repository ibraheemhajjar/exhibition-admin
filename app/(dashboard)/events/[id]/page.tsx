'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@apollo/client/react';
import { ArrowRight } from 'lucide-react';
import { GET_EVENT_BY_ID } from '@/lib/graphql/events';
import type {
  GetEventByIdResponse,
  GetEventByIdVariables,
} from '@/types/events';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface FieldProps {
  label: string;
  value: string | React.ReactNode;
}

function Field({ label, value }: FieldProps) {
  return (
    <div>
      <h2 className="text-base font-medium text-neutral-950 mb-2">{label}</h2>
      {typeof value === 'string' ? (
        <p className="text-[17px] font-normal text-neutral-950">{value}</p>
      ) : (
        value
      )}
    </div>
  );
}

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.id as string;

  const { data, loading, error } = useQuery<
    GetEventByIdResponse,
    GetEventByIdVariables
  >(GET_EVENT_BY_ID, {
    variables: { eventId },
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <p className="text-neutral-950">جاري التحميل...</p>
      </div>
    );
  }

  if (error || !data?.getEventById) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <p className="text-red-500">حدث خطأ أثناء تحميل البيانات</p>
      </div>
    );
  }

  const event = data.getEventById;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB');
  };

  const dateRange =
    event.startDate && event.endDate
      ? `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
      : '-';

  const sectionsText =
    event.sections.length > 0
      ? event.sections.map((s) => s.name).join(', ')
      : '-';

  const openingHours =
    event.eventTime && event.endTime
      ? `${event.eventTime} - ${event.endTime}`
      : event.eventTime || '-';

  const ticketPrice = event.ticketPrice ? `${event.ticketPrice} دولار` : '-';

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center rounded-md p-1 hover:bg-neutral-100 transition-colors hover:cursor-pointer"
        >
          <ArrowRight className="size-4.5 sm:size-6 text-neutral-950" />
        </button>
        <h1 className="text-2xl sm:text-[32px] font-medium text-neutral-950">
          تفاصيل الفعالية
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-10">
        <Field label="اسم الفعالية" value={event.eventName || '-'} />

        <Field
          label="نبذة عن الفعالية"
          value={
            <p className="text-[17px] font-normal text-neutral-700 leading-relaxed whitespace-pre-wrap">
              {event.description || '-'}
            </p>
          }
        />

        <Field label="التاريخ" value={dateRange} />

        <Field
          label="الموقع الإلكتروني"
          value={
            <a
              href="https://www.f3lia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-normal text-primary-500 hover:underline break-all"
            >
              www.f3lia.com
            </a>
          }
        />

        <Field label="الموقع / العنوان" value={event.address || '-'} />

        <Field label="الأجنحة" value={sectionsText} />

        <Field
          label="الشركات المشاركة"
          value={event.numberOfCompanies ? `${event.numberOfCompanies}+` : '-'}
        />

        <Field label="أوقات الافتتاح" value={openingHours} />

        <Field label="سعر التذكرة" value={ticketPrice} />

        {/* Organizer */}
        <div>
          <h2 className="text-base font-medium text-neutral-950 mb-2">
            المنظم
          </h2>
          <div className="space-y-1">
            <p className="text-[17px] font-normal text-neutral-950">
              {event.owner.ownerFullName || '-'}
            </p>
            <p className="text-[17px] font-normal text-neutral-950">
              {event.owner.companyName || '-'}
            </p>
            <p className="text-[17px] font-normal text-neutral-950">
              {event.owner.companyAddress || '-'}
            </p>
            <p className="text-[17px] font-normal text-neutral-950">
              {event.owner.companyPhone || '-'}
            </p>
            <p className="text-[17px] font-normal text-neutral-950">
              {event.owner.companyEmail || '-'}
            </p>
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h2 className="text-4xl text-neutral-950 mb-5">الرعاة</h2>
          {event.agents.length > 0 ? (
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {event.agents.map((agent) => (
                <div key={agent.id} className="flex items-center">
                  {agent.companyPhoto ? (
                    <Image
                      src={agent.companyPhoto}
                      alt={agent.companyName}
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-[17px] font-normal text-neutral-950">
                      {agent.companyName}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[17px] font-normal text-neutral-950">-</p>
          )}
        </div>
        <Separator />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-2 bg-neutral-100 text-neutral-950 rounded-full hover:bg-neutral-100/75 transition-colors hover:cursor-pointer text-nowrap">
            معلومات خاصة بالزوار
          </button>
          <button className="px-6 py-2  bg-neutral-100 text-neutral-950 rounded-full hover:bg-neutral-100/75 transition-colors hover:cursor-pointer text-nowrap">
            معلومات خاصة بالعارضين
          </button>
        </div>
      </div>
    </div>
  );
}
