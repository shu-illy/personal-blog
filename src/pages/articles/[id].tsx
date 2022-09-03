import { Container, Grid, MediaQuery } from "@mantine/core";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import SideMenu from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article, ArticlesResponse, UserProfile } from "src/types";
import ArticleBody from "src/components/organisms/articles/ArticleBody";
import { client } from "src/lib/client";
import ArticleHeader from "src/components/organisms/articles/ArticleHeader";
import { useRouter } from "next/router";
import SocialShares from "src/components/molecules/SocialShares";

type Props = {
  article: Article;
  profile: UserProfile;
};

const ArticleShow: NextPage<Props> = ({ article, profile }: Props) => {
  const router = useRouter();
  return (
    <Layout title={article.title} pageType="article">
      <Container size={"xl"}>
        <Grid>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Grid.Col xs={1}>
              <SocialShares
                url={`${process.env.NEXT_PUBLIC_DOMAIN}${decodeURI(
                  router.asPath
                )}`}
                title={article.title}
              />
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
                <SideMenu profile={profile} />
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
    const profile: UserProfile = await client.get({ endpoint: "profile" });

    return {
      props: {
        article: article,
        profile: profile,
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
