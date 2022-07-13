import React from "react";
import {
  Avatar,
  Text,
  Paper,
  Group,
  TypographyStylesProvider,
} from "@mantine/core";
import { UserProfile } from "src/types";
import TwitterLogo from "src/components/atomics/icons/TwitterLogo";
import GithubLogo from "src/components/atomics/icons/GithubLogo";

type Props = {
  profile: UserProfile;
};

const snsIconSize = 28;

const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <Paper
      radius="md"
      shadow={"sm"}
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={profile.icon.url} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={600} mt="md" mb={16}>
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
        </Group>
      </div>
    </Paper>
  );
};

export default ProfileCard;
