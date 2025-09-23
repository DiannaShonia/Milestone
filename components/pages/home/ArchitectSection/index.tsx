import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./styles.module.css";

import patternDeskSrc from "@/assets/images/architect-pattern-bg.webp";
import img1Src from "@/assets/images/architect-img-1.png";
import img2Src from "@/assets/images/architect-img-2.png";
import img3Src from "@/assets/images/architect-img-3.png";
import img4Src from "@/assets/images/architect-img-4.png";
import img5Src from "@/assets/images/architect-img-5.png";

type ArchitectSectionProps = {
  data?: any;
};

const ArchitectSection = ({ data }: ArchitectSectionProps) => {
  const { t } = useTranslation(["common", "home"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.textWrapper}>
            <Image
              src={patternDeskSrc}
              alt="Architect Pattern"
              className={styles.textWrapperPattern}
            />
            <div className={styles.textBox}>
              <h2 className={styles.textBoxTitle}>
                {t("home:architect-section-title")}
              </h2>
              <p className={styles.textBoxText}>
                {t("home:architect-section-text")}
              </p>
            </div>
            <div className={styles.textWrapperImages}>
              <div className={styles.textWrapperImgBox}>
                <div className={styles.img}>
                  <Image src={img4Src} alt="" className={styles.image} />
                </div>
              </div>
              <div className={styles.textWrapperImgBox}>
                <div className={styles.img}>
                  <Image src={img5Src} alt="" className={styles.image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <Image src={img1Src} alt="" className={styles.image} />
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <Image src={img2Src} alt="" className={styles.image} />
            </div>
          </div>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <Image src={img3Src} alt="" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectSection;
