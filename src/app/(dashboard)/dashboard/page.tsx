import DashboardContent from './dashboard-content';
import { Suspense } from 'react';
import Loading from '@/components/ui/loading';

export default async function TodosPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">Static menu</div>
      <Suspense fallback={<Loading />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}