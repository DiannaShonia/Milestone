import Head from "next/head";
import { NextSeo } from "next-seo";
import { ISeo } from "@/types";

interface ISeoProps {
  data?: ISeo;
}

const Seo = ({ data }: ISeoProps) => {
  return (
    data && (
      <>
        <Head>
          <script
            async
            type="application/ld+json"
            id="ldJsonId"
            dangerouslySetInnerHTML={{
              __html: data.structuredDataMarkup ?? "",
            }}
          />
        </Head>
        <NextSeo
          title={data.title ?? ""}
          description={data.description ?? ""}
          canonical={data.canonical}
          openGraph={{
            title: data.ogTitle ?? "",
            description: data.ogDescription ?? "",
            url: data.ogUrl ?? "",
            images: [
              {
                url: data.ogImage?.url ?? "",
                alt: data.ogImage?.altText ?? "",
                type: "image/jpeg",
                width: 1200,
                height: 675,
              },
            ],
          }}
        />
      </>
    )
  );
};

export default Seo;
