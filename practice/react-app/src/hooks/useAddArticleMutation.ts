import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addArticle } from '@/api/addArticle.ts';
import { Article } from '@/types.ts';

export const useAddArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addArticle,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['articles'] });
      queryClient.setQueryData(['articles'], (oldData: Article[]) => [
        ...oldData,
        { ...data, id: (oldData?.at(-1)?.id ?? -1) + 1 }
      ])
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
    onError: async (error) => {
      await queryClient.invalidateQueries({ queryKey: ['articles'] });
      console.error(error);
    }
  });
};