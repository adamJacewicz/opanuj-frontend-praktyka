import { Article } from '@/types.ts';

export const addArticle = (article: Omit<Article, 'id'>): Promise<Omit<Article, 'id'>> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const randomBoolean = Math.random() < 0.5; // 50% true, 50% false
      randomBoolean ? res(article) : rej(new Error('Something went wrong'));
    }, 1000);
  });
};
