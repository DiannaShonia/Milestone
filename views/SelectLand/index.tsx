import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  return (
    <div style={{ position: "relative", margin: "200px 100px" }}>
      <Link href="/">Go to home page</Link>
      <Link href="/test" className={styles.testLink}>
        Go to test page
      </Link>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>

      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
    </div>
  );
};

export default View;
