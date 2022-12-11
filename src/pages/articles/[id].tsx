import { Container, Grid, MediaQuery, Space } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import SideMenu from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article, ArticlesResponse } from "src/types";
import ArticleBody from "src/components/organisms/articles/ArticleBody";
import { client } from "src/lib/client";
import ArticleHeader from "src/components/organisms/articles/ArticleHeader";
import { useRouter } from "next/router";
import SocialShares from "src/components/molecules/SocialShares";
import { load } from "cheerio";
import hljs from "highlight.js";

type Props = {
  article: Article;
};

const ArticleShow: NextPage<Props> = ({ article }: Props) => {
  const router = useRouter();
  const currnetUrl = `${process.env.NEXT_PUBLIC_HOST}${decodeURI(router.asPath)}`;
  return (
    <Layout title={article.title} pageType="article" url={currnetUrl} ogpImageUrl={article.image.url}>
      <Container size={"xl"}>
        <Space h={16} />
        <Grid>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Grid.Col xs={1}>
              <SocialShares url={currnetUrl} title={article.title} />
            </Grid.Col>
          </MediaQuery>

          <Grid.Col xs={11}>
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
                <SideMenu />
              </Grid.Col>
            </Grid>
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
  const id = ctx.params?.id as string;
  try {
    const article: Article = await client.get({
      endpoint: "articles",
      contentId: id,
    });

    const $ = load(article.body);
    $("pre code").each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass("hljs");
    });
    article.body = $.html();

    return {
      props: {
        article: article,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
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
  return { paths, fallback: "blocking" };
};

export default ArticleShow;
