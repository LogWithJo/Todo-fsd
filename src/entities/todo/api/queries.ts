import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../../shared/api/mockTodos';
import { queryKeys } from '../model/query-keys';

export const useGetTodos = () => {
  return useQuery({
    queryFn: fetchTodos,
    queryKey: queryKeys.list(),
  });
};
