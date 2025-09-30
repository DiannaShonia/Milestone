import type { GetStaticProps, InferGetStaticPropsType } from "next";
import View from "@/views/Home";
import { Seo, Footer, PageLayout } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  data: any | null;
};

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo data={data?.seo} />
      <PageLayout>
        <View data={data} />
      </PageLayout>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const data: any | null = null;

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
      // ...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
    },
    revalidate: 60,
  };
};

export default HomePage;
