import React from "react";
import { Avatar, Text, Paper, Group } from "@mantine/core";
import { UserProfile } from "src/types";
import TwitterLogo from "src/components/atomics/icons/TwitterLogo";
import GithubLogo from "src/components/atomics/icons/GithubLogo";
import { LINKS } from "src/const";

type Props = {
  profile: UserProfile;
};

const snsIconSize = 20;

const ProfileCard = ({ profile }: Props) => {
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
      <Avatar src={profile.avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={600} mt="md" mb={16}>
        {profile.name}
      </Text>
      <Text align="left" size="sm" style={{ whiteSpace: "pre-wrap" }}>
        {profile.description}
      </Text>

      {/* TODO プロフィールページができたらコメントアウト外す */}
      {/* <Button variant="default" fullWidth mt="md">
        プロフィール
      </Button> */}
      {/* TODO SNS等リンクアイコン */}
      <div className="flex justify-center pt-4">
        <Group spacing={8}>
          <TwitterLogo size={snsIconSize} link={LINKS.twitter} />
          <GithubLogo size={snsIconSize} link={LINKS.github} />
        </Group>
      </div>
    </Paper>
  );
};

export default ProfileCard;
