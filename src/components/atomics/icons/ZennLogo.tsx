import Link from "next/link";
import React from "react";
import { SiZenn } from "react-icons/si";

type Props = {
  size: number;
  link: string;
};

const ZennLogo: React.FC<Props> = ({ size, link }) => {
  return (
    <Link href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <SiZenn color="#3ea8ff" size={size} />
      </a>
    </Link>
  );
};

export default ZennLogo;
