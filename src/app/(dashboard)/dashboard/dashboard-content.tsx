'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getTodos, ITodo } from '@/lib/api/sample';

export default function DashboardContent() {
  const { data: todos, isLoading, error } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
  
  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error loading todos: {error.message}</div>;
  
  return (
    <ul>
      {todos.slice(0, 10).map((todo: ITodo) => (
        <li key={todo.id}>
          {todo.completed ? '✅' : '❌'} {todo.title}
        </li>
      ))}
    </ul>
  );
}