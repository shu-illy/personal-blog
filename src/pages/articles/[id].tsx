import { Container, Grid } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import IndexSideBar from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article, ArticlesResponse } from "src/types";
import ArticleBody from "src/components/organisms/articles/ArticleBody";
import { client } from "src/lib/client";

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

type PathParams = {
  id: string;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as String;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data: ArticlesResponse = await client.get({
    endpoint: "articles",
  });
  const article = data.contents[0];

  return {
    props: {
      article: article,
      contentId: idExceptArray,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const data: ArticlesResponse = await client.get({
    endpoint: "articles",
  });
  const articles = data.contents;
  const paths = articles.map((article) => {
    return {
      params: {
        id: article.id,
      },
    };
  });
  return { paths, fallback: true };
};

export default ArticleShow;
