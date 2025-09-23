import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import AnimatedLayout from "@/components/AnimatedLayout";

import "@/assets/styles/reset.css";
import "@/assets/styles/variables.css";
import "@/assets/styles/grids.css";
import "@/assets/styles/mui.css";
import "@/assets/styles/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <AnimatedLayout>
        <Component {...pageProps} />
      </AnimatedLayout>
    </>
  );
}

export default appWithTranslation(App);
