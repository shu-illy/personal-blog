import { Box, Divider, Group } from "@mantine/core";
import React from "react";
import { Badge } from "src/components/atomics/Badge";
import { Article } from "src/types";

type Props = {
  article: Article;
};

const ArticleBody: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.lg,
        })}
      >
        <Group spacing={6}>
          {article.categories.map((category) => {
            return (
              <Badge
                key={category.id}
                size={"lg"}
                color={"green"}
                fullWidth={false}
                style={{ transform: "none" }}
              >
                {category.name}
              </Badge>
            );
          })}
        </Group>
        <Divider my="sm" />
        <div
          dangerouslySetInnerHTML={{
            __html: `${article.body}`,
          }}
        />
      </Box>
    </>
  );
};

export default ArticleBody;
