import { Container, Grid } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import IndexBody from "src/components/organisms/index/IndexBody";
import IndexSideBar from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { client } from "src/lib/client";
import { Article } from "src/types";

export type Props = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};

const Home: NextPage<Props> = (props) => {
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
            <IndexBody articles={props.contents} />
          </Grid.Col>
          <Grid.Col span={3}>
            <IndexSideBar />
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Props = await client.get({ endpoint: "articles" });

  return {
    props: data,
    revalidate: 60,
  };
};

export default Home;
