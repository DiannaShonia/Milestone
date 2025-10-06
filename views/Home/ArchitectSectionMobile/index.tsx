import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

// import patternDeskSrc from "@/assets/images/architect-pattern-bg.webp";
import img1Src from "@/assets/images/architect-img-1.png";
import img2Src from "@/assets/images/architect-img-2.png";
import img3Src from "@/assets/images/architect-img-3.png";
import sendIconSrc from "@/assets/images/send-icon.svg";

type ArchitectSectionProps = {
  data?: any;
};

const ArchitectSection = ({ data }: ArchitectSectionProps) => {
  // const { t } = useTranslation(["common", "home"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.textBox}>
          <h2 className={styles.textBoxTitle}>
            {/* {t("home:architect-section-title")} */}
            ᲚᲐᲜᲓᲨᲐᲤᲢᲖᲔ ᲝᲠᲘᲔᲜᲢᲘᲠᲔᲑᲣᲚᲘ ᲐᲠᲥᲘᲢᲔᲥᲢᲣᲠᲐ
          </h2>
          <p className={styles.textBoxText}>
            {/* {t("home:architect-section-text")} */}
            კომპანია მაილსტოუნი წავკისის განაპირას ექსკლუზიურ პროექტს ქმნის.
            მზიანი სამხრეთის ფერდზე მდებარე 63 ინდივიდუალური მიწის ნაკვეთი,
            ხედებით ტყესა და  ქალაქზე.
          </p>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.img}>
            <Image src={img2Src} alt="" className={styles.image} />
          </div>
          <div className={styles.img}>
            <Image src={img3Src} alt="" className={styles.image} />
          </div>
          <div className={styles.img}>
            <Image src={img1Src} alt="" className={styles.image} />
          </div>
        </div>
        <button className={styles.sendBtn}>
          {"გაიგე მეტი"}
          <Image
            className={styles.sendIcon}
            src={sendIconSrc}
            width={26}
            height={24}
            alt={""}
          />
        </button>
      </div>
    </div>
  );
};

export default ArchitectSection;
