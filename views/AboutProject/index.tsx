import React from "react";
import Link from "next/link";

type ViewProps = {
  data: any;
};

const View = ({ data }: ViewProps) => {
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: "70%",
        paddingTop: "200px",
      }}
    >
      <h1>Select Land</h1>
      <Link href="/">Go to home page</Link>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      <div
        style={{ height: 200, backgroundColor: "#000", margin: "20px 0" }}
      ></div>
      Select Land Page ...
    </div>
  );
};

export default View;
