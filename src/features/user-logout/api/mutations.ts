import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../../../shared/api/mockTodos';
import { authQueryKeys } from '../../../entities/user';

export const useUserLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authQueryKeys.me() });
    },
  });
};
