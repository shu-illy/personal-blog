import { Group } from "@mantine/core";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

type Props = {
  url: string;
  title: string;
};

const iconSize = 32;
const iconBorderRadius = 12;
const iconStyles = {
  size: 32,
  borderRadius: 12,
};

const SocialShares: React.FC<Props> = ({ url, title }) => {
  return (
    <div className="sticky top-1/2">
      <Group className="ml-2">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon {...iconStyles} />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon {...iconStyles} />
        </FacebookShareButton>
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon {...iconStyles} />
        </HatenaShareButton>
        <LineShareButton url={url} title={title}>
          <LineIcon {...iconStyles} />
        </LineShareButton>
      </Group>
    </div>
  );
};

export default SocialShares;
