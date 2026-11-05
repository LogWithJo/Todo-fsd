import { useState } from 'react';
import { useAddTodo } from '../api/mutations';

export function AddTodoForm() {
  const [title, setTitle] = useState('');
  const { mutate, isPending } = useAddTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    mutate(title, {
      onSuccess: () => {
        setTitle('');
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        disabled={isPending}
      />
      <button type="submit" disabled={isPending || !title.trim()}>
        {isPending ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
