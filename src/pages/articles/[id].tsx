import { Container, Grid } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import SideMenu from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article, ArticlesResponse, UserProfile } from "src/types";
import ArticleBody from "src/components/organisms/articles/ArticleBody";
import { client } from "src/lib/client";
import ArticleHeader from "src/components/organisms/articles/ArticleHeader";

type Props = {
  article: Article;
  profile: UserProfile;
};

const ArticleShow: NextPage<Props> = ({ article, profile }: Props) => {
  return (
    <Layout title={"記事詳細ページ"}>
      <Container size={"xl"}>
        <Grid>
          <Grid.Col md={9} sm={12}>
            <ArticleHeader
              title={article.title}
              imageUrl={article.image.url}
              categories={article.categories}
              publishedAt={article.publishedAt!}
              revisedAt={article.revisedAt}
            />
            <ArticleBody article={article} />
          </Grid.Col>
          <Grid.Col md={3} sm={12}>
            <SideMenu profile={profile} />
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
  const profile: UserProfile = await client.get({ endpoint: "profile" });

  return {
    props: {
      article: article,
      contentId: idExceptArray,
      profile: profile,
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
