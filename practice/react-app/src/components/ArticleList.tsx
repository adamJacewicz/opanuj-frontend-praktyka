import ArticleItem from '@/components/ArticleItem.tsx';
import { HTMLAttributes } from 'react';
import { useGetArticlesQuery } from '@/hooks/useGetArticlesQuery.ts';

export default function ArticleList({ className }: HTMLAttributes<HTMLDivElement>) {
  const { data, isPending, isError } = useGetArticlesQuery();


  if (isError) {
    return <h2>Error fetching articles</h2>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <section className={className}>
      <h2 className="text-center font-medium text-2xl">Articles</h2>
      {data.map(article => <ArticleItem className="my-2" key={article.id} article={article} />)}
    </section>
  );
}

