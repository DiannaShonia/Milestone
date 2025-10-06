import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";
import ImageSrc1 from "@/assets/images/location.png";
import mapIconSrc from "@/assets/images/map-icon.svg";

const Location = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={styles.wrapper}
    >
      <div className={styles.location}>
        <h2 className={styles.subtitle}>ქალაქური რიტმი იდეალურ მანძილზე</h2>
        <h1 className={styles.title}>18 ᲬᲣᲗᲘ ᲥᲐᲚᲐᲥᲘᲡ ᲪᲔᲜᲢᲠᲘᲓᲐᲜ</h1>
        <div className={styles.innerImg}>
          <Image src={ImageSrc1} alt="location" className={styles.image} />
        </div>
        <Link
          href={"https://maps.app.goo.gl/RgWyx2chZMVrwzcE7"}
          target="_blank"
          className={styles.mapBottomBtn}
        >
          <Image
            src={mapIconSrc}
            // alt={t("common:footer-map-button-title")}
            alt=""
            width={24}
            height={24}
            className={styles.mapBottomBtnIcon}
          />
          ზუსტი მისამართი
        </Link>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          კომპანია მაილსთოუნი წავკისში ექსკლუზიურ პროექტს იწყებს. ტყეში ჩაფლული
          ინდვიდუალური მიწის ნაკვეთი წავკისის განაპირას მდებარეობს, უნიკალური
          ხედებით თბილისზე. დახურული კომუნის ერთიან იერსახეს კარგად გააზრებული
          არქიტექტურული გადაწყვეტები ქმნის. პროექტი საერთო სარგებლობის სოცილაურ
          და გასართობ სივრცეებს მოიცავს და გააჩნია პირდაპირი წვდომა ტყესთან.
        </p>
      </div>
    </motion.div>
  );
};

export default Location;
