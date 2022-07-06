import React from "react";
import { Group } from "@mantine/core";
import { TbClock } from "react-icons/tb";
import { CgSync } from "react-icons/cg";
import { dateFormatted } from "src/lib/dayjsExt";

type Props = {
  date: string;
  type: "publishedAt" | "revisedAt";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
};

const DateText: React.FC<Props> = ({ date, type, size }) => {
  const iconSizes = {
    xs: 14,
    sm: 16,
    base: 18,
    lg: 20,
    xl: 22,
    "2xl": 26,
    "3xl": 32,
    "4xl": 38,
    "5xl": 50,
    "6xl": 62,
    "7xl": 74,
    "8xl": 98,
    "9xl": 130,
  };
  const iconSize = size == undefined ? 16 : iconSizes[size];
  return (
    <Group spacing={4}>
      {type == "publishedAt" ? (
        <TbClock size={iconSize} />
      ) : (
        <CgSync size={iconSize} />
      )}

      <p className={`text-${size ?? "base"}`}>
        {dateFormatted(date, "YYYY/MM/DD")}
      </p>
    </Group>
  );
};

export default DateText;
