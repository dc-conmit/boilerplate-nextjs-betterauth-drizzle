import { getTodos } from '@/lib/api/sample';
import DashboardContent from './dashboard-content';
import { Suspense } from 'react';
import Loading from '@/components/ui/loading';
export default async function TodosPage() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col gap-4">Sample static data</div>
        <DashboardContent />
      </Suspense>
    </div>
  );
}