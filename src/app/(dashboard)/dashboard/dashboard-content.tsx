'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/lib/api/sample';

export default function DashboardContent({ initialData }: { initialData: any }) {
  const { data: todos, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    initialData,
  });
  
  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error loading todos: {error.message}</div>;
  
  return (
    <ul>
      {todos.slice(0, 10).map((todo: any) => (
        <li key={todo.id}>
          {todo.completed ? '✅' : '❌'} {todo.title}
        </li>
      ))}
    </ul>
  );
}