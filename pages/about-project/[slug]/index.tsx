import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { PageLayout } from "@/components";
import { newsData } from "@/mockData/news";
import NewsItemView from "@/views/NewsItem";

type Props = {
  data: any;
};

const NewsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* <Seo data={data.seo} /> */}
      {/* <Header /> */}
      <article>
        <PageLayout>
          <NewsItemView data={data} />
        </PageLayout>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const newsSlugs = [
    "news-1",
    "news-2",
    "news-3",
    "news-4",
    "news-5",
    "news-6",
  ];

  const paths = newsData.map((n) => ({
    params: { slug: n.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const data: any = newsData.find((item) => item.slug === slug);

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default NewsPage;
