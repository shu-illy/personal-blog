import { Article } from "src/types/Article";

export type ArticlesResponse = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};
