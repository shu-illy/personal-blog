import { Grid } from "@mantine/core";
import React from "react";
import ArticleCard from "../../molecules/ArticleCard";
import { Article } from "../../../types/Article";

type Props = {
  articles: Article[];
};

const IndexBody: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <Grid className="mb-4">
        <Grid.Col span={12}>
          <div className="mb-2 border-b-4 border-m_teal-7 p-2 text-3xl font-extrabold text-m_dark-3">
            記事一覧
          </div>
        </Grid.Col>
        {articles.map((article) => {
          return (
            <Grid.Col span={4} key={article.id}>
              <ArticleCard article={article} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default IndexBody;
