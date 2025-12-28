import { Table, TableColumn } from '@/components/common/table/table';
import { Event } from '@/types/sections';

interface ReservationsTableProps {
  events: Event[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};

const columns: TableColumn<Event>[] = [
  {
    key: 'eventName',
    header: 'اسم الفعالية',
    render: (event) => event.eventName,
  },
  {
    key: 'description',
    header: 'الصفة',
    render: (event) => event.description,
  },
  {
    key: 'companyName',
    header: 'الجهة المنظمة',
    render: (event) => event.owner.companyName,
  },
  {
    key: 'ownerFullName',
    header: 'اسم المسؤول',
    render: (event) => event.owner.ownerFullName || '-',
  },
  {
    key: 'type',
    header: 'نوع الفعالية',
    render: (event) => event.type,
  },
  {
    key: 'companyPhone',
    header: 'رقم الهاتف',
    render: (event) => event.owner.companyPhone,
  },
  {
    key: 'startDate',
    header: 'تاريخ البداية',
    render: (event) => formatDate(event.startDate),
  },
  {
    key: 'endDate',
    header: 'تاريخ النهاية',
    render: (event) => formatDate(event.endDate),
  },
];

export function ReservationsTable({ events }: ReservationsTableProps) {
  return (
    <Table
      columns={columns}
      data={events}
      getRowHref={(event) => `/events/${event.id}`}
      emptyMessage="لا توجد حجوزات"
    />
  );
}
