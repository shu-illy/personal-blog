import { Grid } from "@mantine/core";
import type { NextPage } from "next";
import IndexBody from "src/lib/components/organisms/index/IndexBody";
import IndexSideBar from "src/lib/components/organisms/index/IndexSideBar";
import Layout from "src/lib/components/templates/Layout";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";

const Home: NextPage = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <Layout title={"トップページ"}>
      <Grid>
        <Grid.Col span={9}>
          <IndexBody />

          <Button dent onClick={handleClick} className="mt-4 block">
            Click me!
          </Button>
          <Button onClick={handleClick} className="mt-4 block">
            Click me!
          </Button>
        </Grid.Col>
        <Grid.Col span={3}>
          <IndexSideBar />
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default Home;
