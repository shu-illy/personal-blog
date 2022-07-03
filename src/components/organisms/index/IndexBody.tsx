import { Grid } from "@mantine/core";
import React from "react";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import ArticleCard from "./ArticleCard";

const sampleCards = Array.from(Array(10).keys()).map((index) => {
  return {
    id: index,
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "https://mantine.dev/",
    title: `テスト記事${index}`,
    rating: "great",
    categories: ["React", "Ruby on Rails", "TypeScript", "GCP", "Flutter"],
    createdAt: new Date(2022, 1, 1),
    updatedAt: index % 2 == 0 ? new Date(2022, 3, 1) : undefined,
  };
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
              <ArticleCard
                title={sampleCard.title}
                link={sampleCard.link}
                image={sampleCard.image}
                rating={sampleCard.rating}
                categories={sampleCard.categories}
                createdAt={sampleCard.createdAt}
                updatedAt={sampleCard.updatedAt}
              />
            </Grid.Col>
          );
        })}
      </Grid>

      <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
        <div>{`width: ${width}`}</div>
        <div>{`largerThanXs: ${largerThanXs}`}</div>
        <div>{`largerThanSm: ${largerThanSm}`}</div>
        <div>{`largerThanMd: ${largerThanMd}`}</div>
        <div>{`largerThanLg: ${largerThanLg}`}</div>
        <div>{`largerThanXl: ${largerThanXl}`}</div>
      </div>
    </>
  );
};

export default IndexBody;
