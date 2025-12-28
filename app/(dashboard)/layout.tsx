import { Sidebar } from '@/components/dashboard/sidebar/sidebar';
import { Header } from '@/components/dashboard/header/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 max-w-7xl mx-auto min-w-0">
        <Header />

        <main className="flex-1 p-4 sm:px-5 pt-2.5 pb-19 h-[calc(100vh-72px)] sm:h-[calc(100vh-96px)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
