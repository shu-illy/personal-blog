import Head from "next/head";
import React from "react";

type MetaData = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageType: MetaPageType;
  pageImage?: string;
  pageImageWidth?: number;
  pageImageHeight?: number;
};

export type MetaPageType = "blog" | "article";

const Seo: React.FC<MetaData> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageType,
  pageImage,
  pageImageWidth,
  pageImageHeight,
}) => {
  const defaultTitle = "Lily blog";
  const defaultDescription =
    "大手重工メーカーからWeb業界へキャリアチェンジしたフリーランスWebエンジニアのブログ。技術やエンジニアとしてのキャリアなどについて発信中。";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;
  const imageUrl = pageImage ? pageImage : "/images/top_dog.jpeg";
  const imageWidth = pageImageWidth ? pageImageWidth : 1280;
  const imageHeight = pageImageHeight ? pageImageHeight : 640;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
