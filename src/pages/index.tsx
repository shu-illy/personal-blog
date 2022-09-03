import { Container, Grid, Stack } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import IndexBody from "src/components/organisms/index/IndexBody";
import SideMenu from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { client } from "src/lib/client";
import { ArticlesResponse } from "src/types";
import MainVisual from "src/components/molecules/MainVisual";

type Props = {
  articlesResponse: ArticlesResponse;
};

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title={"トップページ"} pageType="blog">
      <Stack>
        <MainVisual />
        <Container size={"xl"}>
          <Grid>
            <Grid.Col sm={9} xs={12}>
              <IndexBody articles={props.articlesResponse.contents} />
            </Grid.Col>
            <Grid.Col sm={3} xs={12}>
              <SideMenu />
            </Grid.Col>
          </Grid>
        </Container>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articlesResponse: ArticlesResponse = await client.get({
    endpoint: "articles",
  });
  const props: Props = {
    articlesResponse: articlesResponse,
  };

  return {
    props: props,
  };
};

export default Home;
