import { getTodos } from '@/lib/api/sample';
import DashboardContent from './dashboard-content';
import { Suspense } from 'react';
import Loading from '@/components/ui/loading';
export default async function TodosPage() {
  const todos = await getTodos();
  
  return (
    <Suspense fallback={<Loading />}>
      <DashboardContent initialData={todos} />
    </Suspense>
  );
}