import { Grid } from "@mantine/core";
import React from "react";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";

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
      <Grid>
        <Grid.Col span={12}>
          <div className="mb-2 border-b-2 p-2 text-3xl font-extrabold text-m_dark-3">
            記事一覧
          </div>
        </Grid.Col>
        <Grid.Col span={4}>hogehoge</Grid.Col>
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
