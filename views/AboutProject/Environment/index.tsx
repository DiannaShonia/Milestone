import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import LightGallery from "@/components/LightGallery";

import styles from "./styles.module.css";

const images = [
  { url: "/images/environment1.png", alt: "" },
  { url: "/images/environment2.png", alt: "" },
  { url: "/images/environment1.png", alt: "" },
  { url: "/images/environment2.png", alt: "" },
  { url: "/images/environment1.png", alt: "" },
  { url: "/images/environment1.png", alt: "" },
  { url: "/images/environment2.png", alt: "" },
  { url: "/images/environment1.png", alt: "" },
  { url: "/images/environment2.png", alt: "" },
  { url: "/images/environment1.png", alt: "" },
];

const Environment = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleLightGallery = (index: number) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);
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
      <LightGallery
        images={images}
        openIndex={openIndex}
        onClose={handleClose}
      />
      <Swiper
        className={styles.swiper}
        spaceBetween={16}
        modules={[Navigation]}
        slidesPerView={"auto"}
      >
        {images.map((image, i) => (
          <SwiperSlide className={styles.swiperSlide} key={i}>
            <Image
              onClick={() => handleLightGallery(i)}
              src={image.url}
              alt={image.alt}
              className={styles.image}
              width={908}
              height={490}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
