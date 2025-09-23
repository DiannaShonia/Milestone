import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import salesSectionImgSrc from "@/assets/images/sales-section-img.webp";
import salesSectionBgSrc from "@/assets/images/sales-section-bg.png";

type SalesSectionProps = {
  data?: any;
};

const SalesSection = ({ data }: SalesSectionProps) => {
  const { t } = useTranslation(["common", "home"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgBox}>
        <Image
          src={salesSectionBgSrc}
          alt="Sales Section Background"
          layout="fill"
          objectFit="cover"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.imgBox}>
        <Image
          className={styles.img}
          src={salesSectionImgSrc}
          alt="Sales Section Image"
          width={1920}
          height={840}
        />
        <div className="container">
          <h2 className={styles.mainTitle}>
            {t("home:sales-section-main-title")}
          </h2>
        </div>
      </div>
      <div className="container">
        <div className={styles.infoBox}>
          <h3 className={styles.title}>{t("home:sales-section-title")}</h3>
          <p className={styles.text}>{t("home:sales-section-text")}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesSection;
