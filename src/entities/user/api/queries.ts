import { useQuery } from '@tanstack/react-query';
import { getMe } from '../../../shared/api/mockTodos';
import { authQueryKeys } from './query-keys';

export const useGetMe = () => {
  return useQuery({
    queryFn: getMe,
    queryKey: authQueryKeys.me(),
  });
};
