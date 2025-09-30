import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import salesSectionImgSrc from "@/assets/images/sales-section-img.webp";
import sendIconSrc from "@/assets/images/send-icon.svg";
import { useMediaQuery } from "@mui/material";

type SalesSectionProps = {
  data?: any;
};

const SalesSection = ({ data }: SalesSectionProps) => {
  const { t } = useTranslation(["common", "home"]);
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <Image
          className={styles.img}
          src={salesSectionImgSrc}
          alt="Sales Section Image"
          width={1920}
          height={840}
        />
        <div className={styles.titleWrapper}>
          <h2 className={styles.mainTitle}>
            {/* {t("home:sales-section-main-title")} */}
            წინასწარი გაყიდვები დაიწყო
          </h2>
        </div>
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.title}>
          {/* {t("home:sales-section-title")} */}
          ტყეში ჩაფლული მიწის ნაკვეთები
        </h3>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {/* {t("home:sales-section-text")} */}
            შეარჩიეთ ადგილმდებარეობა, რომელიც საუკეთესოდ შეესაბამება თქვენი
            ცხოვრების წესს: ტყის პირას მდებარე ველი, თუ შემაღლებულ ფერდზე
            განლაგებული ნაკვეთები პანორამული ხედით ქალაქზე.
          </p>
          <button className={styles.sendBtn}>
            {/* {t("home:sales-button-title")} */}
            შეარჩიე მიწის ნაკვეთი
            <Image
              className={styles.sendIcon}
              src={sendIconSrc}
              width={isTablet ? 16 : 24}
              height={isTablet ? 16 : 24}
              alt={t("common:send")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesSection;
