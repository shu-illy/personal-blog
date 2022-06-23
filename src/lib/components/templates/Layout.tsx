import Header from "src/lib/components/organisms/Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

const links = [
  { label: "ホーム", link: "/", links: undefined },
  { label: "テスト", link: "/test", links: undefined },
];

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Header links={links} />
      <title>{title}</title>
      <main>{children}</main>
    </>
  );
};

export default Layout;
