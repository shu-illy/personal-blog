import { Grid } from "@mantine/core";
import React from "react";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import ArticleCard from "./ArticleCard";

const sampleCards = [
  {
    id: 1,
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "https://mantine.dev/",
    title: "テスト記事",
    rating: "outstanding",
    // "description": "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
    // "author": {
    //   "name": "Bill Wormeater",
    //   "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    // }
  },
  {
    id: 2,
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "https://mantine.dev/",
    title: "テスト記事2",
    rating: "gread",
  },
];

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
              />
            </Grid.Col>
          );
        })}

        <Grid.Col span={4}>hogehoge</Grid.Col>
        <Grid.Col span={4}>hogehoge</Grid.Col>
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
