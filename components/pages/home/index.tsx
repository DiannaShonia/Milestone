import React from "react";
import { useMediaQuery } from "@/hooks";
import LandingSection from "./LandingSection";
import ArchitectSection from "./ArchitectSection";
import ArchitectSectionMobile from "./ArchitectSectionMobile";
import SalesSection from "./SalesSection";

import styles from "./styles.module.css";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <>
      <LandingSection />
      {isTablet ? (
        <ArchitectSectionMobile data={data} />
      ) : (
        <ArchitectSection data={data} />
      )}
      <SalesSection />
    </>
  );
};

export default View;
