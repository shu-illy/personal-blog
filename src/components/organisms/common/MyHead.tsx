import Head from "next/head";
import React from "react";

type MetaData = {
  pageTitle?: string;
  pageDescription?: string;
  pageType: MetaPageType;
  pageImage?: string;
  pageImageWidth?: number;
  pageImageHeight?: number;
  url?: string;
  ogpImageUrl?: string;
};

export type MetaPageType = "blog" | "article";

const MyHead: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pageType,
  pageImage,
  pageImageWidth,
  pageImageHeight,
  url,
  ogpImageUrl,
}) => {
  const defaultTitle = "Lily blog";
  const defaultDescription =
    "大手重工メーカーからWeb業界へキャリアチェンジしたフリーランスWebエンジニアのブログ。技術やエンジニアとしてのキャリアなどについて発信中。";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const defaultOgpImageUrl = pageImage ? pageImage : "/images/top_dog.jpeg";
  const ogpUrl = ogpImageUrl ?? defaultOgpImageUrl;
  const imageWidth = pageImageWidth ? pageImageWidth : 1280;
  const imageHeight = pageImageHeight ? pageImageHeight : 640;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:image" content={ogpUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default MyHead;
