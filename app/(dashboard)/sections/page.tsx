'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import { PageHeading } from '@/components/common/page-heading';
import { SearchInput } from '@/components/common/inputs/search-input';
import { TimeFilterComponent } from '@/components/filters/time-filter';
import { StatusFilter } from '@/components/filters/status-filter';
import { AddCard } from '@/components/sections/add-card';
import { SectionCard } from '@/components/sections/section-card';
import { GET_ALL_SECTIONS } from '@/lib/graphql/sections';
import { TimeFilter } from '@/types/dashboard';
import type {
  GetAllSectionsResponse,
  GetAllSectionsVariables,
} from '@/types/sections';
import { Loader2 } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'all', label: 'الكل' },
  { value: 'available', label: 'متاح' },
  { value: 'reserved', label: 'محجوز' },
];

export default function SectionsPage() {
  const [searchLabel, setSearchLabel] = useState('');
  const [timeFilter, setTimeFilter] = useState<TimeFilter>(
    TimeFilter.THIS_MONTH
  );
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();
  const [statusFilter, setStatusFilter] = useState('all');

  const { data, loading, error } = useQuery<
    GetAllSectionsResponse,
    GetAllSectionsVariables
  >(GET_ALL_SECTIONS, {
    variables: {
      timeFilter,
      searchLabel: searchLabel || undefined,
      fromDate,
      toDate,
    },
  });

  const handleTimeFilterChange = (filter: {
    timeFilter: TimeFilter;
    fromDate?: string;
    toDate?: string;
  }) => {
    setTimeFilter(filter.timeFilter);
    setFromDate(filter.fromDate);
    setToDate(filter.toDate);
  };

  // Filter sections by status (client-side)
  const filteredSections = useMemo(() => {
    if (!data?.getAllSection) return [];

    if (statusFilter === 'all') return data.getAllSection;

    if (statusFilter === 'available') {
      return data.getAllSection.filter((section) => !section.hasReserveByAdmin);
    }

    if (statusFilter === 'reserved') {
      return data.getAllSection.filter((section) => section.hasReserveByAdmin);
    }

    return data.getAllSection;
  }, [data, statusFilter]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeading title="إدارة الأجنحة" />

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center ">
        <SearchInput
          value={searchLabel}
          onChange={setSearchLabel}
          placeholder="ابحث عن اسم جناح"
          className="flex-1"
        />
        <div className="flex gap-2">
          <StatusFilter
            options={STATUS_OPTIONS}
            defaultValue="all"
            title="الحالة"
            onChange={setStatusFilter}
          />
          <TimeFilterComponent
            defaultValue={TimeFilter.THIS_MONTH}
            onChange={handleTimeFilterChange}
          />
        </div>
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

      {/* Sections Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add Section Card */}
          <AddCard label="إضافة جناح" href="/sections/create" />

          {/* Add Service Card */}
          <AddCard label="إضافة خدمة" href="#" />

          {/* Section Cards */}
          {filteredSections.map((section) => (
            <SectionCard
              key={section.id}
              id={section.id}
              name={section.name}
              isAvailable={!section.hasReserveByAdmin}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredSections.length === 0 && (
        <div className="flex items-center justify-center text-center py-12 min-h-50 border border-dashed border-neutral-400 rounded-xl">
          <p className="text-base font-semibold text-neutral-600">
            لا توجد أجنحة
          </p>
        </div>
      )}
    </div>
  );
}
