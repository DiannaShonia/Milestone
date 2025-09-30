import React from "react";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import { useMediaQuery } from "@/hooks";

import styles from "./styles.module.css";

// import patternDeskSrc from "@/assets/images/architect-pattern-bg.webp";
import imgSrc from "@/assets/images/collaborations-img.jpg";
import sendIconSrc from "@/assets/images/send-icon.svg";
import SliderCard from "./SliderCard";

type CollaborationsSectionProps = {
  data?: any;
};

const CollaborationsSection = ({ data }: CollaborationsSectionProps) => {
  const { t } = useTranslation(["common", "home"]);
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.textBox}>
          <h2 className={styles.textBoxTitle}>
            {t("home:collaborations-section-title")}
          </h2>
          <p className={styles.textBoxText}>
            <Trans i18nKey="home:collaborations-section-text">
              <br />
            </Trans>
          </p>
          {!isTablet ? (
            <button className={styles.sendBtn}>
              {t("home:collaborations-section-button")}
              <Image
                className={styles.sendIcon}
                src={sendIconSrc}
                width={26}
                height={24}
                alt={t("common:send")}
              />
            </button>
          ) : null}
        </div>
        <SliderCard />
        {isTablet ? (
          <button className={styles.sendBtn}>
            {t("home:collaborations-section-button")}
            <Image
              className={styles.sendIcon}
              src={sendIconSrc}
              width={26}
              height={24}
              alt={t("common:send")}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CollaborationsSection;
