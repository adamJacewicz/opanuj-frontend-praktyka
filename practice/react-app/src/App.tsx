import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleListPage from '@/pages/ArticleListPage.tsx';
import ArticlePage from '@/pages/ArticlePage.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <ArticleListPage />
  },
  {
    path: '/article/:id',
    element: <ArticlePage />
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="max-w-3xl mx-auto">
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  );
}

export default App;
