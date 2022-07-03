import React from "react";
import { Group, Text } from "@mantine/core";
import { format } from "date-fns";
import { TbClock } from "react-icons/tb";
import { CgSync } from "react-icons/cg";

type Props = {
  date: Date;
  type: "createdAt" | "updatedAt";
};

const DateText: React.FC<Props> = ({ date, type }) => {
  const iconSize = 16;
  return (
    <Group spacing={4}>
      {type == "createdAt" ? (
        <TbClock size={iconSize} />
      ) : (
        <CgSync size={iconSize} />
      )}

      <div className="text-sm text-m_gray-6">{format(date, "yyyy/MM/dd")}</div>
    </Group>
  );
};

export default DateText;
