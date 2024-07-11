import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/api/getArticles.ts';

export const useGetArticlesQuery = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: getArticles
  });
};

