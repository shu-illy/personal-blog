import { Container, Grid } from "@mantine/core";
import type { NextPage } from "next";
import Image from "next/image";
import IndexBody from "src/components/organisms/index/IndexBody";
import IndexSideBar from "src/components/organisms/common/SideMenu";
import Layout from "src/components/templates/Layout";
import { Article } from "src/types";

type Props = {
  article: Article;
};

const ArticleShow: NextPage<Props> = ({ article }: Props) => {
  return (
    <Layout title={"記事詳細ページ"}>
      <div className="h-5 bg-teal-200"></div>
    </Layout>
  );
};

export default ArticleShow;
