import { Picture } from "src/types/ArticleImage";
import { Category } from "src/types/Category";

export type Article = {
  id: string;
  image: Picture;
  body: string;
  title: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};
