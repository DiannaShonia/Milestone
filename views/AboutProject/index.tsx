import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useMenuStore } from "@/store/useMenuStore";
import About from "./About";
import Location from "./Location";
import News from "./News";
import Environment from "./Environment";
import Contact from "./Contact";
import AboutMobile from "./AboutMobile";
import LocationMobile from "./LocationMobile";
import EnvironmentMobile from "./EnvironmentMobile";
import Menu from "@/components/Menu";

import styles from "./styles.module.css";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  const { activeMenuItem } = useMenuStore();

  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  const renderMenuItems = () => {
    switch (activeMenuItem) {
      case "0":
        return <About />;
      case "1":
        return <Location />;
      case "2":
        return <Environment />;
      case "3":
        return <News />;
      case "4":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return !isTablet ? (
    <div className={styles.wrapper}>
      <Menu />
      {!isTablet && renderMenuItems()}
    </div>
  ) : (
    <div className={styles.mobileWrapper}>
      <AboutMobile />
      <LocationMobile />
      <EnvironmentMobile />
      <News />
    </div>
  );
};

export default View;
