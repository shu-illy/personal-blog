import { Container, Grid } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import IndexBody from "src/components/organisms/index/IndexBody";
import SideMenu from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { client } from "src/lib/client";
import { ArticlesResponse, UserProfile } from "src/types";

type Props = {
  articlesResponse: ArticlesResponse;
  profile: UserProfile;
};

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title={"トップページ"} pageType="blog">
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
          <Grid.Col sm={9} xs={12}>
            <IndexBody articles={props.articlesResponse.contents} />
          </Grid.Col>
          <Grid.Col sm={3} xs={12}>
            <SideMenu profile={props.profile} />
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articlesResponse: ArticlesResponse = await client.get({
    endpoint: "articles",
  });
  const profile: UserProfile = await client.get({ endpoint: "profile" });
  const props: Props = {
    articlesResponse: articlesResponse,
    profile: profile,
  };

  return {
    props: props,
  };
};

export default Home;
