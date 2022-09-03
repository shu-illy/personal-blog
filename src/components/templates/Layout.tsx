import { Footer } from "src/components/organisms/common/Footer";
import Header from "src/components/organisms/common/Header";
import MyHead, { MetaPageType } from "src/components/organisms/common/MyHead";
import { pagesPath } from "src/lib/$path";

type Props = {
  title: string;
  pageType: MetaPageType;
  children: React.ReactNode;
};

type LinkItem = {
  label: string;
  link: string;
};

const headerLinks: LinkItem[] = [
  // { label: "Home", link: "/" },
  // { label: "Categories", link: "/test" },
  // { label: "About me", link: "/" },
];

const footerLinks: LinkItem[] = [
  {
    link: pagesPath.$url().pathname,
    label: "ホーム",
  },
  // {
  //   // TODO
  //   link: "#",
  //   label: "プライバシーポリシー",
  // },
  // {
  //   // TODO
  //   link: "#",
  //   label: "お問合せ",
  // },
];

const Layout: React.FC<Props> = ({ children, title, pageType }) => {
  console.log(pagesPath.$url());
  return (
    <>
      <title>{title}</title>
      <MyHead pageTitle={title} pageType={pageType} />
      <Header links={headerLinks} />
      <main className="mt-32">{children}</main>
      <Footer links={footerLinks} />
    </>
  );
};

export default Layout;
