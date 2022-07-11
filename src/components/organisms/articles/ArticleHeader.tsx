import React from "react";
import Image from "next/image";
import { Grid, Group, Text } from "@mantine/core";
import DateText from "src/components/atomics/DateText";
import { Badge } from "src/components/atomics/Badge";
import { Category } from "src/types";

type Props = {
  title: string;
  imageUrl: string;
  categories: Category[];
  createdAt: string;
  updatedAt?: string;
};

const ArticleHeader: React.FC<Props> = ({
  title,
  imageUrl,
  categories,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className={"relative h-60 w-full justify-center opacity-25"}>
        <Image src={imageUrl} layout={"fill"} objectFit={"cover"} alt={""} />
      </div>
      <div className="absolute flex h-full w-full items-center p-8">
        <Grid className="w-full">
          <Grid.Col span={12} className={"mt-8"}>
            <Text
              className="text-3xl font-semibold"
              weight={"bold"}
              align={"center"}
            >
              {title}
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group spacing={6} position={"center"} className={"mt-2"}>
              {categories.map((category) => {
                return (
                  <Badge
                    key={category.id}
                    size={"lg"}
                    color="teal"
                    fullWidth={false}
                    style={{ transform: "none" }}
                  >
                    {category.name}
                  </Badge>
                );
              })}
            </Group>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group spacing={16} position={"right"} className={"mr-12"}>
              <DateText date={createdAt} type="publishedAt" />
              {updatedAt && <DateText date={createdAt} type="revisedAt" />}
            </Group>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default ArticleHeader;
