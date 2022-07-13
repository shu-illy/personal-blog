import React from "react";
import ProfileCard from "src/components/molecules/ProfileCard";
import { UserProfile } from "src/types";

type Props = {
  profile: UserProfile;
};

const SideMenu: React.FC<Props> = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <ProfileCard profile={profile} />
      {/* TODO カテゴリ一覧 */}
      {/* TODO アーカイブ */}
    </>
  );
};

export default SideMenu;
