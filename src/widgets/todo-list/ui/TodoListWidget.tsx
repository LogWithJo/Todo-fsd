import { TodoCard, useGetTodos, useTodoStore } from '../../../entities/todo';
import { ToggleInput } from '../../../features/toggle-todo';
import { DeleteButton } from '../../../features/delete-todo';
// Import our new filter feature
import { TodoFilters } from '../../../features/filter-todos';

export function TodoListWidget() {
  // 1. Get Server State (React Query)
  const { data: todos, isLoading, isError } = useGetTodos();

  // 2. Get Client State (Zustand)
  const currentFilter = useTodoStore((state) => state.filter);

  if (isLoading) return <div>Loading todos...</div>;
  if (isError) return <div>Error loading todos.</div>;
  if (!todos) return null;

  // 3. Combine them: Filter the server data using the client state
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div>
      {/* Render the Feature UI that changes the Zustand state */}
      <TodoFilters />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filteredTodos.length === 0 ? (
          <p>No todos found for this filter.</p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              data={todo}
              children={
                <div
                  style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                  <ToggleInput todoId={todo.id} todoStatus={todo.completed} />
                  <DeleteButton todoId={todo.id} />
                </div>
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
