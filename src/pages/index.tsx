import { Container, Grid } from "@mantine/core";
import type { NextPage } from "next";
import Image from "next/image";
import IndexBody from "src/components/organisms/index/IndexBody";
import IndexSideBar from "src/components/organisms/index/IndexSideBar";
import Layout from "src/components/templates/Layout";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";

const Home: NextPage = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <Layout title={"トップページ"}>
      <div className="relative z-[-1] mb-4 h-96 w-full opacity-75">
        <Image
          src={"/images/top_dog.jpeg"}
          layout={"fill"}
          objectFit={"cover"}
          alt={""}
        />
      </div>
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={9}>
            <IndexBody />
          </Grid.Col>
          <Grid.Col span={3}>
            <IndexSideBar />
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
