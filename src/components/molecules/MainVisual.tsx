import React, { FC } from "react";
import {
  BackgroundImage,
  Center,
  Container,
  Text,
  useMantineTheme,
} from "@mantine/core";

const MainVisual: FC = () => {
  const theme = useMantineTheme();
  return (
    <Container mx={0} px={0} size={99999}>
      <BackgroundImage
        py={120}
        src={"/images/top_dog.jpeg"}
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          backgroundBlendMode: "lighten",
        }}
      >
        <Center>
          <Text size={36} weight="bold" color={theme.colors.dark[3]}>
            L i l y B l o g
          </Text>
        </Center>
      </BackgroundImage>
    </Container>
  );
};

export default MainVisual;
