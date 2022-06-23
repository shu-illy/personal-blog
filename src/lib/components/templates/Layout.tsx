import { Container } from "@mantine/core";
import Header from "src/lib/components/organisms/common/Header";

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
      <Header links={links} />
      <Container size={"xl"}>
        <title>{title}</title>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
