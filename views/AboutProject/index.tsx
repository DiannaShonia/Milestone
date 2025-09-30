import React from "react";
import Link from "next/link";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  return (
    <div style={{ position: "relative", margin: "200px 200px" }}>
      <Link href="/">Go to home page</Link>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      About Project Page ...
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
