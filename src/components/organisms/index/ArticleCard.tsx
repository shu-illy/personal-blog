import React from "react";
import { Bookmark, Heart, Share } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import DateText from "src/components/atomics/DateText";

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
  image: string;
  link: string;
  title: string;
  rating?: string;
  createdAt: Date;
  updatedAt?: Date;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  image,
  link,
  title,
  createdAt,
  updatedAt,
  rating,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) => {
  const { classes, cx } = useStyles();

  return (
    <div className="cursor-pointer">
      <Link href={link}>
        <Card
          withBorder
          radius="md"
          shadow="sm"
          className={cx(classes.card, className)}
          {...others}
        >
          <Card.Section>
            <Image src={image} height={180} alt="" />
          </Card.Section>

          {rating && (
            <Badge
              className={classes.rating}
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              {rating}
            </Badge>
          )}

          <Text className={classes.title} weight={"bold"} component="a">
            {title}
          </Text>
          <Group className="flex justify-end">
            {updatedAt && <DateText date={createdAt} type="updatedAt" />}
            <DateText date={createdAt} type="createdAt" />
          </Group>
        </Card>
      </Link>
    </div>
  );
};

export default ArticleCard;
