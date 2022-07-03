import React from "react";
import { Avatar, Text, Button, Paper } from "@mantine/core";
import { UserProfile } from "src/types";

type Props = {
  profile: UserProfile;
};

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
    </Paper>
  );
};

export default ProfileCard;
