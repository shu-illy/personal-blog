import React from "react";
import ArticleHeader from "src/components/organisms/articles/ArticleHeader";
import { Article } from "src/types";

type Props = {
  article: Article;
};

const ArticleBody: React.FC<Props> = ({ article }) => {
  console.log(article.createdAt);
  console.log(article.createdAt);
  return (
    <>
      <ArticleHeader
        title={article.title}
        imageUrl={article.image.url}
        categories={article.categories}
        createdAt={"2022-02-01"}
        updatedAt={article.updatedAt}
      />
      <div className="h-96 bg-teal-200"></div>
      <div className="h-96 bg-teal-300"></div>
      <div className="h-96 bg-teal-400"></div>
      <div className="h-96 bg-teal-500"></div>
    </>
  );
};

export default ArticleBody;
