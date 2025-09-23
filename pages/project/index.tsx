import type { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {};

const ProjectPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main style={{ background: "blue", minHeight: "100vh" }} id="main">
        <h1>Project Page</h1>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default ProjectPage;
