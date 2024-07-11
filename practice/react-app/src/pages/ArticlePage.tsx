import { useParams } from 'react-router-dom';
import { useGetArticleByIdQuery } from '@/hooks/useGetArticleByIdQuery.ts';

export default function ArticlePage() {

  const { id } = useParams();
  const {data: article, isError, isPending} = useGetArticleByIdQuery(Number(id))

  if (isError) {
    return <h2>Error fetching articles</h2>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article with id {id} has not found</div>;
  }

  return (
    <div>
      ArticlePage {article.title}
    </div>
  );
};

