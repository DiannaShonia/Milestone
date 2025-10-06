import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const SidebarsMobile = () => {
  return (
    <div className={styles.linkWrapper}>
      <Link className={styles.linkToProject} href={"/about-project"}>
        პროექტის შესახებ
      </Link>
      <Link className={styles.linkToSelectLand} href={"/select-land"}>
        შეარჩიე მიწა
      </Link>
    </div>
  );
};

export default SidebarsMobile;
