import { Sidebar } from '@/components/dashboard/sidebar/sidebar';
import { Header } from '@/components/dashboard/header/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 h-screen max-w-7xl mx-auto min-w-0">
        <Header />
        <main className="flex-1 p-4 sm:px-5 pt-2.5 pb-19 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
