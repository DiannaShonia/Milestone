import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks";
import Sidebars from "@/components/Sidebars";

import "@/assets/styles/reset.css";
import "@/assets/styles/variables.css";
import "@/assets/styles/grids.css";
import "@/assets/styles/mui.css";
import "@/assets/styles/styles.css";
import "@/assets/styles/fonts.css";
import "@/assets/styles/swiper.css";

function App({ Component, pageProps, router }: AppProps) {
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="page-wrap">
        <div>
          <Header />
          {!isTablet ? <Sidebars /> : null}
          <main>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(App);
