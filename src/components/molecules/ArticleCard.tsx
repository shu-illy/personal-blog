import React from "react";
import { Card, Image, Text, Group, createStyles } from "@mantine/core";
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
    // TODO タイトル等の行数が違ってもカードの高さが一定になるようにする
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

          <Text className={classes.title} weight={"bold"} component="a">
            {article.title}
          </Text>
          <div className="mb-4">
            <Group spacing={6}>
              {article.categories.map((category) => {
                return (
                  <Badge
                    key={category}
                    color="teal"
                    fullWidth={false}
                    style={{ transform: "none" }}
                  >
                    {category}
                  </Badge>
                );
              })}
            </Group>
          </div>

          <Group className="flex justify-end text-m_gray-6">
            {article.revisedAt && (
              <DateText date={article.revisedAt} type="revisedAt" size="sm" />
            )}
            {article.publishedAt && (
              <DateText
                date={article.publishedAt}
                type="publishedAt"
                size="sm"
              />
            )}
          </Group>
        </Card>
      </Link>
    </div>
  );
};

export default ArticleCard;
