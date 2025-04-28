/**
 * Fetches todo items from the JSONPlaceholder API
 * @returns Promise containing todo items
 */
export async function getTodos() {
  await new Promise((resolve) => setTimeout(resolve, 15000));

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { revalidate: 60 },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.status}`);
  }
  
  return response.json();
}