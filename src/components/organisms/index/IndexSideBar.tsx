import React from "react";
import ProfileCard from "src/components/molecules/ProfileCard";
import { PROFILE } from "src/const";

const IndexSideBar = () => {
  return (
    <>
      <ProfileCard profile={PROFILE} />
      <div className="m-2 bg-red-200 text-4xl  font-extrabold">
        カテゴリ一覧
      </div>
      <div className="m-2 bg-green-200 text-4xl font-extrabold">アーカイブ</div>
    </>
  );
};

export default IndexSideBar;
