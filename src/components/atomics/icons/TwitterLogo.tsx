import Link from "next/link";
import React from "react";
import { FaTwitterSquare } from "react-icons/fa";

type Props = {
  size: number;
  link: string;
};

const TwitterLogo: React.FC<Props> = ({ size, link }) => {
  return (
    <Link href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare color="#1d9bf0" size={size} />
      </a>
    </Link>
  );
};

export default TwitterLogo;
