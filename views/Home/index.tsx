import React from "react";
import { useMediaQuery } from "@/hooks";
import LandingSection from "./LandingSection";
import ArchitectSection from "./ArchitectSection";
import ArchitectSectionMobile from "./ArchitectSectionMobile";
import SalesSection from "./SalesSection";
import CollaborationsSection from "./CollaborationsSection";
import LandingSectionMobile from "./LandingSectionMobile";

import styles from "./styles.module.css";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <div className={styles.wrapper}>
      {isTablet ? (
        <>
          <LandingSectionMobile />
          <ArchitectSectionMobile data={data} />
        </>
      ) : (
        <>
          <LandingSection />
          <ArchitectSection data={data} />
        </>
      )}
      <SalesSection />
      <CollaborationsSection />
    </div>
  );
};

export default View;
