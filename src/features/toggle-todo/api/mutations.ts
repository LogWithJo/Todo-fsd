import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../../../shared/api/mockTodos';
import { queryKeys } from '../../../entities/todo';

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleTodoStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
};
