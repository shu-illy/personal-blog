import Link from "next/link";
import React from "react";
import { SiQiita } from "react-icons/si";

type Props = {
  size: number;
  link: string;
};

const QiitaLogo: React.FC<Props> = ({ size, link }) => {
  return (
    <Link href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <SiQiita color="#55c500" size={size} />
      </a>
    </Link>
  );
};

export default QiitaLogo;
