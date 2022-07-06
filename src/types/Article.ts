import { ArticleImage } from "src/types/ArticleImage";

export type Article = {
  id: string;
  image: ArticleImage;
  body: string;
  title: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  rivisedAt?: string;
};
