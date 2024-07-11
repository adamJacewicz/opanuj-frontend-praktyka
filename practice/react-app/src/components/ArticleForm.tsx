import { FormEvent, HTMLAttributes, useRef } from 'react';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useAddArticle } from '@/hooks/useAddArticleMutation.ts';

const ArticleForm = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { mutate, isPending, isError } = useAddArticle();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const author = data.get('author')?.toString() ?? '';
    const title = data.get('title')?.toString() ?? '';
    const content = data.get('content')?.toString() ?? '';
    mutate({ author, title, content });
    formRef.current.reset();
  };

  return (
    <div className={className}>
      <h1 className="text-2xl font-medium text-center mb-4">
        Add Article
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <Label>
          <div className="mb-2">Author</div>
          <Input
            name="author"
          />
        </Label>
        <Label>
          <div className="mb-2">Title</div>
          <Input
            name="title"
          />
        </Label>
        <Label>
          <div className="mb-2">Content</div>
          <Textarea
            name="content"
          />
        </Label>
        <Button disabled={isPending} type="submit">
          Submit
        </Button>
        {isError && <p className="text-red-500">Something went wrong!</p>}
      </form>
    </div>
  );
};

export default ArticleForm;