import { useTodoStore, type TodoFilterType } from '../../../entities/todo';

export function TodoFilters() {
  // Grab the state and the action from our Zustand store
  const currentFilter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  const filters: { label: string; value: TodoFilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          style={{
            fontWeight: currentFilter === value ? 'bold' : 'normal',
            textDecoration: currentFilter === value ? 'underline' : 'none',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
