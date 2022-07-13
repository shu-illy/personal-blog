import React from "react";
import { Group, MantineSize, Text } from "@mantine/core";
import { TbClock } from "react-icons/tb";
import { CgSync } from "react-icons/cg";
import { dateFormatted } from "src/lib/dayjsExt";

type Props = {
  date: string;
  type: "publishedAt" | "revisedAt";
  size: MantineSize;
  position?: "right" | "center" | "left" | "apart";
};

const DateText: React.FC<Props> = ({ date, type, size, position }) => {
  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };
  const iconSize = iconSizes[size];
  return (
    <Group spacing={4} align="center" position={position}>
      {type == "publishedAt" ? (
        <TbClock size={iconSize} />
      ) : (
        <CgSync size={iconSize} />
      )}

      <Text size={size} inline={true}>
        {dateFormatted(date, "YYYY/MM/DD")}
      </Text>
    </Group>
  );
};

export default DateText;
