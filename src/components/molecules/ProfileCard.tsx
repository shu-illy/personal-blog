import React, { FC } from "react";
import {
  Avatar,
  Text,
  Group,
  TypographyStylesProvider,
  Card,
  Space,
} from "@mantine/core";
import TwitterLogo from "src/components/atomics/icons/TwitterLogo";
import GithubLogo from "src/components/atomics/icons/GithubLogo";
import ZennLogo from "src/components/atomics/icons/ZennLogo";
import QiitaLogo from "../atomics/icons/QiitaLogo";
import {
  authorName,
  githubUrl,
  profileBody,
  qiitaUrl,
  twitterUrl,
  zennUrl,
} from "src/constants";

const snsIconSize = 28;

const ProfileCard: FC = () => {
  return (
    <Card
      radius="md"
      shadow={"sm"}
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Card.Section
        sx={{
          backgroundImage: `url(/images/profile_background.jpeg)`,
          backgroundSize: "cover",
          height: 130,
        }}
      />
      <Avatar
        src={"/images/icon.jpg"}
        size={90}
        radius={90}
        mt={-70}
        mx="auto"
      />
      <Text align="center" size="lg" weight={600} mt="sm" mb="sm">
        {authorName}
      </Text>
      <TypographyStylesProvider
        sx={() => ({
          fontSize: 14,
          marginBottom: 0,
        })}
      >
        <div dangerouslySetInnerHTML={{ __html: profileBody }} />
      </TypographyStylesProvider>
      <Space h={8} />
      {/* TODO プロフィールページができたらコメントアウト外す */}
      {/* <Button variant="default" fullWidth mt="md">
        プロフィール
      </Button> */}
      {/* TODO SNS等リンクアイコン */}
      <div className="flex justify-center">
        <Group spacing={16}>
          <TwitterLogo size={snsIconSize} link={twitterUrl} />
          <GithubLogo size={snsIconSize} link={githubUrl} />
          <ZennLogo size={snsIconSize} link={zennUrl} />
          <QiitaLogo size={snsIconSize} link={qiitaUrl} />
        </Group>
      </div>
    </Card>
  );
};

export default ProfileCard;
