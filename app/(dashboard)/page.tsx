'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { PageHeading } from '@/components/common/page-heading';
import { TimeFilterComponent } from '@/components/filters/time-filter';
import { StatisticCard } from '@/components/dashboard/statistic-card';
import { GET_ADMIN_HOME_STATICS } from '@/lib/graphql/dashboard';
import { TimeFilter } from '@/types/dashboard';
import type {
  AdminStaticsResponse,
  GetAdminHomeStaticsVariables,
} from '@/types/dashboard';
import { Loader2 } from 'lucide-react';
import { STATS_CONFIG } from '@/lib/constants/dashboard';

export default function Home() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>(
    TimeFilter.THIS_MONTH
  );
  const [fromDate, setFromDate] = useState<string>();
  const [toDate, setToDate] = useState<string>();

  const { data, loading, error } = useQuery<
    { getAdminHomeStatics: AdminStaticsResponse },
    GetAdminHomeStaticsVariables
  >(GET_ADMIN_HOME_STATICS, {
    variables: {
      timeFilter,
      fromDate,
      toDate,
    },
  });

  const stats = data?.getAdminHomeStatics;

  const handleFilterChange = (filter: {
    timeFilter: TimeFilter;
    fromDate?: string;
    toDate?: string;
  }) => {
    setTimeFilter(filter.timeFilter);
    setFromDate(filter.fromDate);
    setToDate(filter.toDate);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <PageHeading
        title="الصفحة الرئيسية"
        description="راقب كل النشاطات الاخيرة والإحصائيات على المنصة "
      />

      <div className="flex flex-col gap-2.5 bg-neutral-100 p-3 sm:p-4 w-full rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <p className="text-md sm:text-lg font-medium text-neutral-950">
            نظرة عامة
          </p>
          <TimeFilterComponent
            defaultValue={TimeFilter.THIS_MONTH}
            onChange={handleFilterChange}
          />
        </div>

        {loading && (
          <div className="bg-white rounded-xl p-3 sm:p-6 w-full text-center min-h-40 flex items-center justify-center">
            <Loader2 className="size-8 animate-spin mx-auto text-neutral-400" />
          </div>
        )}

        {error && (
          <div className="bg-white rounded-xl p-3 sm:p-6 w-full text-center flex items-center justify-center">
            <p className="text-neutral-500">حدث خطأ أثناء تحميل البيانات</p>
          </div>
        )}

        {stats && !loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl p-3 sm:p-6 gap-4 w-full">
            {STATS_CONFIG.map((stat) => (
              <StatisticCard
                key={stat.key}
                label={stat.label}
                value={stats[stat.key]}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
