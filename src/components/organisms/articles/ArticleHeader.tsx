import React from "react";
import Image from "next/image";
import { dateFormatted } from "src/lib/dayjsExt";
import { Group, Text } from "@mantine/core";
import DateText from "src/components/atomics/DateText";

type Props = {
  title: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
};

const ArticleHeader: React.FC<Props> = ({
  title,
  image,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className={"relative h-60 w-full justify-center opacity-25"}>
        <Image src={image} layout={"fill"} objectFit={"cover"} alt={""} />
      </div>
      <div className="absolute flex h-full w-full items-center p-8">
        {/* <div className="text-3xl font-semibold">{title}</div> */}
        <div>
          <Text
            className="text-3xl font-semibold"
            weight={"bold"}
            component="a"
          >
            {title}
          </Text>
          <Group spacing={16} className="mt-4">
            <DateText date={createdAt} type="createdAt" />
            {updatedAt && <DateText date={createdAt} type="updatedAt" />}
          </Group>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
