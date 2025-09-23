import type { GetStaticProps, InferGetStaticPropsType } from "next";
import LangSwitcher from "@/components/LangSwitch";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  data: any | null;
};

import { useTranslation } from "next-i18next";

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  return (
    <>
      {/* <Seo data={data?.seo} /> */}
      {/* <Header /> */}
      <main
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
        id="main"
      >
        <h1>Home Page</h1>
        <LangSwitcher />
        <h1>{t("test")}</h1>
      </main>
      {/* <Footer  /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale = "en",
}) => {
  const data: any | null = null;

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 60,
  };
};

export default HomePage;
