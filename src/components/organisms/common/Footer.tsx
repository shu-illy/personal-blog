import React, { FC } from "react";
import {
  createStyles,
  Group,
  Text,
  Container,
  Space,
  Divider,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    backgroundColor: theme.colors.teal[3],
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
}));

type Props = {
  links: { link: string; label: string }[];
};

export const Footer: FC<Props> = ({ links }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          {links.map((link, index) => {
            return (
              <div key={index}>
                <Link href={link.link} key={index}>
                  <a>
                    <Text
                      size="sm"
                      sx={(theme) => ({
                        color: theme.white,
                      })}
                    >
                      {link.label}
                    </Text>
                  </a>
                </Link>
                {index != links.length - 1 && (
                  <Divider
                    sx={(theme) => ({ height: "20px", color: theme.white })}
                    orientation="vertical"
                  />
                )}
              </div>
            );
          })}
        </Group>
      </Container>
      <Text
        align="center"
        size="xs"
        sx={(theme) => ({
          color: theme.white,
        })}
      >
        © 2022 Lily Blog. All rights reserved.
      </Text>
      <Space h={"md"} />
    </div>
  );
};
