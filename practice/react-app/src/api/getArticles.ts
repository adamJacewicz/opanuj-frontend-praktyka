import axios from 'axios';
import { Article } from '@/types.ts';

export const getArticles = async () => {
  const { data } = await axios<{ articles: Article[] }>('http://localhost:3001/api/data/articles');
  return data.articles;
}
