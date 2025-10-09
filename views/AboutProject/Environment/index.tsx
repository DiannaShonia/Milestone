import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import Image from "next/image";

import styles from "./styles.module.css";

import ImageSrc1 from "@/assets/images/environment1.png";
import ImageSrc2 from "@/assets/images/environment2.png";

const images = [
  { imgSrc: ImageSrc1 },
  { imgSrc: ImageSrc2 },
  { imgSrc: ImageSrc1 },
  { imgSrc: ImageSrc2 },
  { imgSrc: ImageSrc1 },
];

const Environment = () => {
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
      <div className={styles.slider}>
        <Swiper
          className={styles.swiper}
          spaceBetween={16}
          modules={[Navigation]}
          slidesPerView={"auto"}
        >
          {images.map((image, i) => (
            <SwiperSlide className={styles.swiperSlide} key={i}>
              <Image src={image.imgSrc} alt="" className={styles.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          ტყე პროექტ :  წავკისის განუყოფელი ნაწილია, რაც განსაკუთრებულ
          ღირებულებას სძენს დასახლებას. მობინადრეებს, რომლებიც ირჩევენ ჩვენს
          კომუნას, სურთ სრულფასოვნად შეინარჩუნონ ურბანული ცხოვრება, მაგრამ როცა
          შორდებიან მას, შორდებიან სრულად. ჩვენთვის მნიშვნელოვანია გავაძლიროთ
          კავშირი ბუნებასთან და გავხადოთ ხელშესახები.
        </p>
      </div>
    </motion.div>
  );
};

export default Environment;
