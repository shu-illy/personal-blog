import { Container, Grid } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";

import IndexBody from "src/components/organisms/index/IndexBody";
import IndexSideBar from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article } from "src/types";
import ArticleBody from "src/components/organisms/articles/ArticleBody";

type Props = {
  article: Article;
};

const ArticleShow: NextPage<Props> = ({ article }: Props) => {
  return (
    <Layout title={"記事詳細ページ"}>
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={9}>
            <ArticleBody article={article} />
          </Grid.Col>
          <Grid.Col span={3}>
            <IndexSideBar />
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ダミーデータ
  const dateString = "2022-02-01";
  const article: Article = {
    id: 1,
    image: "https://i.imgur.com/Cij5vdL.png",
    link: "/articles/1",
    title: `テスト記事1テスト記事1テスト記事1テスト記事1テスト記事1`,
    rating: "great",
    categories: ["React", "Ruby on Rails", "TypeScript", "GCP", "Flutter"],
    createdAt: dateString,
    updatedAt: dateString,
  };
  return {
    props: {
      article: article,
    },
  };
};

export default ArticleShow;
