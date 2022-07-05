import React from "react";
import { Group } from "@mantine/core";
import { TbClock } from "react-icons/tb";
import { CgSync } from "react-icons/cg";
import { dateFormatted } from "src/lib/dayjsExt";

type Props = {
  date: string;
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

      <div className="text-sm text-m_gray-6">
        {dateFormatted(date, "YYYY/MM/DD")}
      </div>
    </Group>
  );
};

export default DateText;
