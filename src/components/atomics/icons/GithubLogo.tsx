import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {
  size: number;
  link: string;
};

const GithubLogo: React.FC<Props> = ({ size, link }) => {
  return (
    <Link href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <FaGithub color="#0e0c0d" size={size} />
      </a>
    </Link>
  );
};

export default GithubLogo;
