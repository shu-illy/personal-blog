import React from "react";
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

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export const Footer = ({ links }: FooterCenteredProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          {links.map((link, index) => {
            return (
              <>
                <Link href={link.link}>
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
              </>
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
