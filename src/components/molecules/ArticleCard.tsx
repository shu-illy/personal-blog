import React from "react";
import { Card, Image, Text, Group, createStyles, Stack } from "@mantine/core";
import { Badge } from "src/components/atomics/Badge";
import Link from "next/link";
import DateText from "src/components/atomics/DateText";
import { Article } from "src/types";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  article,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) => {
  const { classes, cx } = useStyles();

  return (
    <div className="cursor-pointer">
      <Link href={`articles/${article.id}`}>
        <Card
          withBorder
          radius="md"
          shadow="sm"
          className={cx(classes.card, className)}
          {...others}
        >
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
  );
};

export default ArticleCard;
