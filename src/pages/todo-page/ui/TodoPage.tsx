// Import the Form Feature
import { AddTodoForm } from '../../../features/add-todo';
// Import the List Widget
import { TodoListWidget } from '../../../widgets/todo-list';

export function TodoPage() {
  return (
    <main
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h2>My Tasks</h2>

      {/* 1. The independent creation feature */}
      <AddTodoForm />

      {/* 2. The composed list widget (which holds the entity + toggle/delete features) */}
      <TodoListWidget />
    </main>
  );
}
