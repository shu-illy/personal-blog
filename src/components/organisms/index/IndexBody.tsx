import { Grid } from "@mantine/core";
import React from "react";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import ArticleCard from "../../molecules/ArticleCard";
import { Article } from "../../../types/Article";

const sampleCards = Array.from(Array(10).keys()).map((index) => {
  const article: Article = {
    id: index,
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "/articles/1",
    title: `テスト記事${index}`,
    rating: "great",
    categories: ["React", "Ruby on Rails", "TypeScript", "GCP", "Flutter"],
    createdAt: "2022-02-01",
    updatedAt: index % 2 == 0 ? "2022-02-01" : undefined,
  };
  return article;
});

const IndexBody = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <>
      <Grid className="mb-4">
        <Grid.Col span={12}>
          <div className="mb-2 border-b-4 border-m_teal-7 p-2 text-3xl font-extrabold text-m_dark-3">
            記事一覧
          </div>
        </Grid.Col>
        {sampleCards.map((sampleCard) => {
          return (
            <Grid.Col span={4} key={sampleCard.id}>
              <ArticleCard article={sampleCard} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default IndexBody;
