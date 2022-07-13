import { Picture } from "src/types";

export type UserProfile = {
  name: string;
  icon: Picture;
  body: string;
  twitterUrl: string;
  githubUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
