import React from "react";
import {
  Avatar,
  Text,
  Group,
  TypographyStylesProvider,
  Card,
} from "@mantine/core";
import { UserProfile } from "src/types";
import TwitterLogo from "src/components/atomics/icons/TwitterLogo";
import GithubLogo from "src/components/atomics/icons/GithubLogo";
import ZennLogo from "src/components/atomics/icons/ZennLogo";
import QiitaLogo from "../atomics/icons/QiitaLogo";

type Props = {
  profile: UserProfile;
};

const snsIconSize = 28;

const ProfileCard: React.FC<Props> = ({ profile }) => {
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
      <Avatar src={profile.icon.url} size={90} radius={90} mt={-70} mx="auto" />
      <Text align="center" size="lg" weight={600} mt="sm" mb="sm">
        {profile.name}
      </Text>
      <TypographyStylesProvider
        sx={() => ({
          fontSize: 14,
          marginBottom: 0,
        })}
      >
        <div dangerouslySetInnerHTML={{ __html: profile.body }} />
      </TypographyStylesProvider>
      {/* TODO プロフィールページができたらコメントアウト外す */}
      {/* <Button variant="default" fullWidth mt="md">
        プロフィール
      </Button> */}
      {/* TODO SNS等リンクアイコン */}
      <div className="flex justify-center">
        <Group spacing={16}>
          <TwitterLogo size={snsIconSize} link={profile.twitterUrl} />
          <GithubLogo size={snsIconSize} link={profile.githubUrl} />
          <ZennLogo size={snsIconSize} link={profile.zennUrl} />
          <QiitaLogo size={snsIconSize} link={profile.qiitaUrl} />
        </Group>
      </div>
    </Card>
  );
};

export default ProfileCard;
