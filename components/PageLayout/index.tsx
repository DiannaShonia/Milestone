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
        transition: { duration: 0, delay: 0, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, delay: 0.4, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;
