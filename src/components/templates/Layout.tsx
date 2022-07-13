import { Footer } from "src/components/organisms/common/Footer";
import Header from "src/components/organisms/common/Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

const headerLinks = [
  { label: "Home", link: "/" },
  { label: "Categories", link: "/test" },
  { label: "About me", link: "/" },
];

const footerLinks = [
  {
    link: "/",
    label: "ホーム",
  },
  {
    // TODO
    link: "#",
    label: "プライバシーポリシー",
  },
  {
    // TODO
    link: "#",
    label: "お問合せ",
  },
];

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <Header links={headerLinks} />
      <main className="mt-32">{children}</main>
      <Footer links={footerLinks} />
    </>
  );
};

export default Layout;
