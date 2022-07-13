import React from "react";
import {
  Avatar,
  Text,
  Paper,
  Group,
  TypographyStylesProvider,
  Card,
} from "@mantine/core";
import { UserProfile } from "src/types";
import TwitterLogo from "src/components/atomics/icons/TwitterLogo";
import GithubLogo from "src/components/atomics/icons/GithubLogo";

type Props = {
  profile: UserProfile;
};

const snsIconSize = 28;

const ProfileCard: React.FC<Props> = ({ profile }) => {
  const image =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
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
          height: 180,
        }}
      />
      <Avatar src={profile.icon.url} size={90} radius={90} mt={-70} mx="auto" />
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
    </Card>
  );
};

export default ProfileCard;
