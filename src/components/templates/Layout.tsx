import { Container } from "@mantine/core";
import Header from "src/components/organisms/common/Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

const links = [
  { label: "Home", link: "/" },
  { label: "Categories", link: "/test" },
  { label: "About me", link: "/" },
];

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <Header links={links} />
      <main className="mt-32">{children}</main>
    </>
  );
};

export default Layout;
