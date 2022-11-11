import React from "react";
import NextLink from "next/link";
import {
  createStyles,
  Header as MantineHeader,
  Group,
  Container,
  Drawer,
  useMantineTheme,
  Space,
  Stack,
  Text,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Logo from "src/components/atomics/icons/Logo";
import { pagesPath } from "src/lib/$path";
import { useMediaQuery } from "src/lib/mantine";

type HeaderSearchProps = {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
};

const Header = ({ links }: HeaderSearchProps) => {
  const [opened, handlers] = useDisclosure(false);
  const isDesktop = useMediaQuery("sm");
  const theme = useMantineTheme();
  const headerHeight = isDesktop ? 96 : 48;

  const useStyles = createStyles((theme) => ({
    inner: {
      height: headerHeight,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      cursor: "pointer",

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },

    linkLabel: {
      marginRight: 5,
    },
  }));

  const { classes } = useStyles();

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));
    return (
      <NextLink key={link.label} href={link.link}>
        <Text
          size={16}
          weight={500}
          className={classes.link}
          color={
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[7]
          }
          onClick={() => close()}
        >
          {link.label}
        </Text>
      </NextLink>
    );
  });
  const drawerItems = links.map((link, index) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));
    return (
      <>
        <Stack>
          <NextLink key={link.label} href={link.link}>
            <Text
              size={20}
              weight={500}
              color={
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.colors.gray[7]
              }
              onClick={() => close()}
            >
              {link.label}
            </Text>
          </NextLink>
        </Stack>

        {index !== links.length - 1 && <Divider size="xs" />}
      </>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => handlers.toggle()}
        position="top"
        closeOnClickOutside
        withCloseButton={false}
        size="xs"
      >
        <Space h={24} />
        <Stack spacing={8} pl={24}>
          {drawerItems}
        </Stack>
      </Drawer>
      <MantineHeader height={headerHeight}>
        <Container size={"xl"}>
          <div className={classes.inner}>
            <Link href={pagesPath.$url()}>
              <a className="cursor-pointer">
                <Logo height={headerHeight - 16} />
              </a>
            </Link>
            {isDesktop && (
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>
            )}
            {/* {isDesktop || (
              <Burger
                opened={opened}
                onClick={() => handlers.toggle()}
                size="sm"
              />
            )} */}
          </div>
        </Container>
      </MantineHeader>
    </>
  );
};

export default Header;
