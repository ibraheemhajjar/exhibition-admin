'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowRight, Edit } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { SearchInput } from '@/components/common/inputs/search-input';
import { DateFilter } from '@/components/filters/date-filter';
import { ReservationsTable } from '@/components/sections/reservations-table';
import {
  GET_SECTION_BY_ID,
  GET_SECTION_RESERVATIONS,
} from '@/lib/graphql/sections';
import type {
  GetSectionByIdResponse,
  GetSectionByIdVariables,
  GetSectionReservationsResponse,
  GetSectionReservationsVariables,
} from '@/types/sections';

export default function SectionPage() {
  const params = useParams();
  const router = useRouter();
  const sectionId = params.id as string;

  const [eventName, setEventName] = useState('');
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();

  // Fetch section details
  const { data: sectionData } = useQuery<
    GetSectionByIdResponse,
    GetSectionByIdVariables
  >(GET_SECTION_BY_ID, {
    variables: { sectionId },
  });

  // Fetch reservations
  const { data, loading, error } = useQuery<
    GetSectionReservationsResponse,
    GetSectionReservationsVariables
  >(GET_SECTION_RESERVATIONS, {
    variables: {
      sectionId,
      eventName: eventName || undefined,
      from: fromDate,
      to: toDate,
    },
  });

  const handleDateFilterChange = (from?: string, to?: string) => {
    setFromDate(from);
    setToDate(to);
  };

  const events = data?.getSectionReserveBySectionId || [];
  const sectionName = sectionData?.getSectionById.name || '';

  return (
    <div className="flex flex-col gap-6">
      {/* Header: Back + Section Name + Edit Button */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => router.push(`/sections`)}
            className="flex items-center justify-center rounded-md p-1 hover:bg-neutral-100 transition-colors hover:cursor-pointer"
          >
            <ArrowRight className="size-4.5 sm:size-6 text-neutral-950" />
          </button>
          <h1 className="text-2xl sm:text-[32px] font-medium text-neutral-950">
            {sectionName}
          </h1>
        </div>

        <button
          onClick={() => router.push(`/sections/${sectionId}/edit`)}
          className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-3 rounded-full bg-neutral-100 hover:bg-neutral-100/75 transition-colors hover:cursor-pointer"
        >
          <Edit className="size-4 sm:size-5 text-neutral-950" />
          <span className="text-sm sm:text-base font-medium text-neutral-950">
            تعديل الجناح
          </span>
        </button>
      </div>

      <div className="p-4 rounded-xl bg-neutral-100">
        {/* Search + Date Filter */}
        <div className="flex gap-2 items-center justify-between flex-wrap mb-2.5">
          {/* Reservations Count */}
          <h2 className="text-base sm:text-lg font-medium text-neutral-950">
            الحجوزات ({events.length})
          </h2>
          <SearchInput
            value={eventName}
            onChange={setEventName}
            placeholder="ابحث عن اسم الفعالية"
            className="flex-1 max-w-106 min-w-50"
            inputClassName="bg-neutral-50 focus:ring-0 py-2 sm:py-2.75"
          />
          <DateFilter onChange={handleDateFilterChange} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-xl p-3 sm:p-6 w-full text-center min-h-40 flex items-center justify-center">
            <Loader2 className="size-8 animate-spin mx-auto text-neutral-400" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-white rounded-xl p-3 sm:p-6 w-full text-center flex items-center justify-center">
            <p className="text-neutral-500">حدث خطأ أثناء تحميل البيانات</p>
          </div>
        )}

        {/* Reservations Table */}
        {!loading && !error && <ReservationsTable events={events} />}
      </div>
    </div>
  );
}
