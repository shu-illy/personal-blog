import React from "react";
import { Article } from "src/types";

type Props = {
  article: Article;
};

const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <div className="h-96 bg-teal-200"></div>
      <div className="h-96 bg-teal-300"></div>
      <div className="h-96 bg-teal-400"></div>
      <div className="h-96 bg-teal-500"></div>
    </>
  );
};

export default ArticleBody;
