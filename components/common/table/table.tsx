import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export interface TableColumn<T> {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
  className?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  getRowHref?: (item: T) => string;
  emptyMessage?: string;
}

export function Table<T extends { id: string }>({
  columns,
  data,
  getRowHref,
  emptyMessage = 'لا توجد بيانات',
}: TableProps<T>) {
  const router = useRouter();

  return data.length > 0 ? (
    <div className="bg-neutral-50 rounded-2xl overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-neutral-150">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-3 md:px-6 py-6 text-center text-sm text-neutral-950 whitespace-nowrap ${column.className || ''}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item) => {
              const href = getRowHref?.(item);

              return (
                <tr
                  key={item.id}
                  onClick={href ? () => router.push(href) : undefined}
                  className={
                    href
                      ? 'hover:bg-neutral-100 text-center transition-colors cursor-pointer'
                      : ''
                  }
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-3 md:px-6 py-2 md:py-4 text-sm text-neutral-500 whitespace-nowrap ${column.className || ''}`}
                    >
                      {column.render(item)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="text-center py-12 bg-neutral-50 rounded-2xl">
      <p className="text-neutral-500">{emptyMessage}</p>
    </div>
  );
}
