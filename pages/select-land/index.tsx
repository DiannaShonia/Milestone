import type { GetStaticProps, InferGetStaticPropsType } from "next";
import View from "@/views/SelectLand";
import { PageLayout, Seo } from "@/components";

type Props = {
  data: any | null;
};

const SelectLandPage = ({
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
  const data: any | null = null;

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

export default SelectLandPage;
