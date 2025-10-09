import type { GetStaticProps, InferGetStaticPropsType } from "next";
import View from "@/views/AboutProject";
import { PageLayout, Seo } from "@/components";
import { newsData } from "@/mockData/news";

type Props = {
  data: any | null;
};

const AboutProjectPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo data={data?.seo} />
      <PageLayout>
        <View data={data} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const data: any | null = newsData;

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default AboutProjectPage;
