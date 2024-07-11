import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Article } from '@/types.ts';
import { getArticles } from '@/api/getArticles.ts';

export const useGetArticleByIdQuery = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['articles', id],
    queryFn: async () => {
      let data = queryClient.getQueryData<Article[]>(['articles']);

      if (!data) {
        data = await getArticles()
      };
      return data.find(article => article.id === id);
    }
  });
};

