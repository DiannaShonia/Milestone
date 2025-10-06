import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./styles.module.css";
import ImageSrc1 from "@/assets/images/location-mobile.png";

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
      <h1 className={styles.mainTitle}>ᲚᲝᲙᲐᲪᲘᲐ</h1>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          კომპანია მაილსთოუნი წავკისში ექსკლუზიურ პროექტს იწყებს. ტყეში ჩაფლული
          ინდვიდუალური მიწის ნაკვეთი წავკისის განაპირას მდებარეობს, უნიკალური
          ხედებით თბილისზე. დახურული კომუნის ერთიან იერსახეს კარგად გააზრებული
          არქიტექტურული გადაწყვეტები ქმნის. პროექტი საერთო სარგებლობის სოცილაურ
          და გასართობ სივრცეებს მოიცავს და გააჩნია პირდაპირი წვდომა ტყესთან.
        </p>
      </div>
      <div className={styles.location}>
        <h2 className={styles.subtitle}>ქალაქური რიტმი იდეალურ მანძილზე</h2>
        <h1 className={styles.title}>18 ᲬᲣᲗᲘ ᲥᲐᲚᲐᲥᲘᲡ ᲪᲔᲜᲢᲠᲘᲓᲐᲜ</h1>
        <Image src={ImageSrc1} alt="location" className={styles.image}></Image>
      </div>
    </motion.div>
  );
};

export default Location;
