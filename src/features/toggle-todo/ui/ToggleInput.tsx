import { useToggleTodo } from '../api/mutations';

type ToggleInputProps = {
  todoId: string;
  todoStatus: boolean;
};

export function ToggleInput({ todoId, todoStatus }: ToggleInputProps) {
  const { mutate, isPending } = useToggleTodo();
  return (
    <div>
      <input
        type="checkbox"
        name="toggle-todo"
        id=""
        checked={todoStatus}
        onChange={() => {
          mutate(todoId);
        }}
        disabled={isPending}
      />
    </div>
  );
}
