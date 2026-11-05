import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '../../../shared/api/mockTodos';
import { queryKeys } from '../../../entities/todo';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
};
