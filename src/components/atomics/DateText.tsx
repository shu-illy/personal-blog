import React from "react";
import { Group, Text } from "@mantine/core";
import { TbClock } from "react-icons/tb";
import { CgSync } from "react-icons/cg";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

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
        {dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD")}
      </div>
    </Group>
  );
};

export default DateText;
