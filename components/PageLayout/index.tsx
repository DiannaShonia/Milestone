import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

interface IPageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayout) => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 0, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;
