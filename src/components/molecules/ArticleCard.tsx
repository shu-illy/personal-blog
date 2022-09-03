import React from "react";
import { Card, Image, Text, Group, Stack, MediaQuery } from "@mantine/core";
import { Badge } from "src/components/atomics/Badge";
import Link from "next/link";
import DateText from "src/components/atomics/DateText";
import { Article } from "src/types";
import { pagesPath } from "src/lib/$path";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) => {
  return (
    <>
      {/* Responsive: PC */}
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <div className="cursor-pointer">
          <Link
            href={pagesPath.articles._id(article.id).$url()}
            prefetch={false}
          >
            <Card withBorder radius="md" shadow="sm">
              <Card.Section>
                <Image src={article.image.url} height={180} alt="" />
              </Card.Section>

              <Stack justify="space-between" className="h-44">
                <Stack spacing={0}>
                  <Text
                    className="my-2 block line-clamp-3"
                    weight={"bold"}
                    component="a"
                  >
                    {article.title}
                  </Text>
                  <Group spacing={6}>
                    {article.categories.map((category) => {
                      return (
                        <Badge
                          key={category.id}
                          color="teal"
                          fullWidth={false}
                          style={{ transform: "none" }}
                        >
                          {category.name}
                        </Badge>
                      );
                    })}
                  </Group>
                </Stack>

                <Group className="flex justify-end text-m_gray-6">
                  {article.revisedAt &&
                    article.revisedAt != article.publishedAt && (
                      <DateText
                        date={article.revisedAt}
                        type="revisedAt"
                        size="sm"
                      />
                    )}
                  {article.publishedAt && (
                    <DateText
                      date={article.publishedAt}
                      type="publishedAt"
                      size="sm"
                    />
                  )}
                </Group>
              </Stack>
            </Card>
          </Link>
        </div>
      </MediaQuery>

      {/* Responsive: スマホ */}
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <div className="cursor-pointer">
          <Link
            href={pagesPath.articles._id(article.id).$url()}
            prefetch={false}
          >
            <Card withBorder={true} radius="md" shadow="sm">
              <Card.Section>
                <Image src={article.image.url} height={90} alt="" />
              </Card.Section>

              <Stack justify="space-between" className="h-40">
                <Stack spacing={0}>
                  <Text
                    size="sm"
                    className="my-1 block line-clamp-3"
                    weight={"bold"}
                    component="a"
                  >
                    {article.title}
                  </Text>
                  <Group spacing={6}>
                    {article.categories.map((category) => {
                      return (
                        <Badge
                          key={category.id}
                          color="teal"
                          fullWidth={false}
                          style={{ transform: "none" }}
                        >
                          {category.name}
                        </Badge>
                      );
                    })}
                  </Group>
                </Stack>

                <Stack spacing={8} className="text-m_gray-6">
                  {article.revisedAt &&
                    article.revisedAt != article.publishedAt && (
                      <DateText
                        date={article.revisedAt}
                        type="revisedAt"
                        size="xs"
                        position="right"
                      />
                    )}
                  {article.publishedAt && (
                    <DateText
                      date={article.publishedAt}
                      type="publishedAt"
                      size="xs"
                      position="right"
                    />
                  )}
                </Stack>
              </Stack>
            </Card>
          </Link>
        </div>
      </MediaQuery>
    </>
  );
};

export default ArticleCard;
