import React from "react";
import ProfileCard from "src/components/molecules/ProfileCard";
import { PROFILE } from "src/const";

const IndexSideBar = () => {
  return (
    <>
      <ProfileCard profile={PROFILE} />
      {/* TODO カテゴリ一覧 */}
      {/* TODO アーカイブ */}
    </>
  );
};

export default IndexSideBar;
