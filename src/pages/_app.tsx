import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
      theme={{
        primaryColor: "teal",
        // 参考:
        // https://www.rivfield.com/famous-sites-css-font-family/
        fontFamily:
          "Helvetica Neue ,Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo,sans-serif",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
