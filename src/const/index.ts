import { UserProfile } from "src/types";

const profileDescription =
  "院卒（電気工学専攻）→大手重工業メーカーの設計職→Webエンジニア\n" +
  "2021年7月からフリーランスエンジニア\n\n" +
  "興味のある技術は" +
  "Ruby on Rails | Flutter | JavaScript | TypeScript | Next.js" +
  "など。\n";

export const PROFILE: UserProfile = {
  name: "リリー",
  avatar: "/images/profile_icon.jpg",
  description: profileDescription,
};
