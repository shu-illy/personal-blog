import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Script from "next/script";
import { usePageView } from "src/hooks/usePageView";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: "teal",
        // 参考:
        // https://www.rivfield.com/famous-sites-css-font-family/
        fontFamily: "Helvetica Neue ,Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo,sans-serif",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
