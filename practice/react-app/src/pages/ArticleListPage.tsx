import ArticleForm from '@/components/ArticleForm.tsx';
import ArticleList from '@/components/ArticleList.tsx';

export default function ArticleListPage() {
  return (
    <div className="flex gap-4">
      <ArticleForm className="flex-1" />
      <ArticleList className="flex-1" />
    </div>
  );
};

