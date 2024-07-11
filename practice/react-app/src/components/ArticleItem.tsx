import { Article } from '@/types.ts';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils.ts';
import { Link } from 'react-router-dom';

export default function ArticleItem({ article, className }: { article: Article } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col gap-2 rounded-md border border-black p-2', className)}>
      <h3 className="font-medium">
        <Link to={`/article/${article.id}`}>
          {article.title}
        </Link>
      </h3>
      <p>{article.content}</p>
      <p>{article.author}</p>
    </div>
  );
}

