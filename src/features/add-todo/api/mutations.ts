import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '../../../shared/api/mockTodos';
import { queryKeys } from '../../../entities/todo';

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.list() });
    },
  });
};
