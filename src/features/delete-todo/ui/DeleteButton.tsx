import { useDeleteTodo } from '../api/mutations';

type DeleteButtonProps = {
  todoId: string;
};

export function DeleteButton({ todoId }: DeleteButtonProps) {
  const { mutate, isPending } = useDeleteTodo();
  return (
    <button
      disabled={isPending}
      onClick={() => {
        mutate(todoId);
      }}
    >
      delete todo
    </button>
  );
}
