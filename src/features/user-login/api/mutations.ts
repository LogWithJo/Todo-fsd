import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../../shared/api/mockTodos';
import { authQueryKeys } from '../../../entities/user';

export const useUserLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authQueryKeys.me() });
    },
  });
};
