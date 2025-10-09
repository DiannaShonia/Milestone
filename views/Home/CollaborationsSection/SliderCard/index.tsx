import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMediaQuery } from "@/hooks";

import ImageSrc from "@/assets/images/collaborations-img.jpg";
import ArrowLeft from "@/assets/images/ArrowLeft.svg";
import ArrowRight from "@/assets/images/ArrowRight.svg";

const images = [
  { imgSrc: ImageSrc },
  { imgSrc: ImageSrc },
  { imgSrc: ImageSrc },
];

const SliderCard = () => {
  const isTablet = useMediaQuery("(max-width: 1023.98px)");

  return (
    <div className={styles.imageBox}>
      <Swiper
        spaceBetween={32}
        modules={[Navigation, Pagination]}
        navigation={
          !isTablet
            ? {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }
            : false
        }
        pagination={
          isTablet
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className={styles.innerImg}>
              <Image src={image.imgSrc} alt="" className={styles.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isTablet ? (
        <>
          <div className={`custom-prev ${styles.navBtn}`}>
            <Image alt="" src={ArrowLeft} />
          </div>
          <div className={`custom-next ${styles.navBtn}`}>
            <Image alt="" src={ArrowRight} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SliderCard;
