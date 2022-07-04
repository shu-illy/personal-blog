export type Article = {
  id: number;
  image: string;
  link: string;
  title: string;
  rating?: string;
  categories: string[];
  createdAt: Date;
  updatedAt?: Date;
};