import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";

import styles from "./styles.module.css";

import patternMobileSrc from "@/assets/images/architect-pattern-bg-mobile.webp";
import img1Src from "@/assets/images/architect-img-1.png";
import img2Src from "@/assets/images/architect-img-2.png";
import img3Src from "@/assets/images/architect-img-3.png";
import img4Src from "@/assets/images/architect-img-4.png";
import img5Src from "@/assets/images/architect-img-5.png";
import img6Src from "@/assets/images/architect-img-6.png";
import img7Src from "@/assets/images/architect-img-7.png";
import img8Src from "@/assets/images/architect-img-8.png";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const springAanimation = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

type ArchitectSectionMobileProps = {
  data?: any;
};

const ArchitectSectionMobile = ({ data }: ArchitectSectionMobileProps) => {
  const { t } = useTranslation(["common", "home"]);

  const [startPos, setStartPos] = useState<number>(0);
  const [endPos, setEndPos] = useState<number>(0);
  const [startTrValue, setStartTrValue] = useState<number>(0);
  const [endTrValue, setEndTrValue] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateSizes = () => {
      if (
        sliderRef?.current &&
        sliderContentRef?.current &&
        slidesRef?.current
      ) {
        const windowWidth = window.innerWidth;
        const boxWidth = sliderContentRef.current.offsetWidth;
        const wrapperWidth = slidesRef.current.offsetWidth;

        const offsetTop = sliderRef.current.offsetTop;
        const boxHeight = sliderContentRef.current.offsetHeight;
        const height = (boxWidth - windowWidth + boxHeight) * 1;

        sliderRef.current.style.height = `${height}px`;

        setStartPos(offsetTop);
        setEndPos(height - (boxHeight - offsetTop));
        setStartTrValue(0);
        setEndTrValue(-(wrapperWidth - windowWidth));
      }
    };

    calculateSizes();
    const handleResize = () => calculateSizes();
    const resizeObserver = new ResizeObserver(handleResize);
    if (sliderContainerRef?.current)
      resizeObserver.observe(sliderContainerRef?.current);

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollY } = useScroll();

  const transformX = useSpring(scrollY, springAanimation);

  const x = useTransform(
    transformX,
    [startPos, endPos - 100],
    [startTrValue, endTrValue]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider} ref={sliderRef}>
        <motion.div className={styles.sliderContainer} ref={sliderContainerRef}>
          <motion.div className={styles.sliderContent} ref={sliderContentRef}>
            <div className={styles.sliderWrapper}>
              <div className={styles.pattern}>
                <Image
                  src={patternMobileSrc}
                  alt=""
                  className={styles.patternImg}
                />
                <div className={styles.textBox}>
                  <h2 className={styles.textBoxTitle}>
                    {t("home:architect-section-title")}
                  </h2>
                  <p className={styles.textBoxText}>
                  <Trans ns="home" i18nKey="architect-section-mobile-text" />
                  </p>
                </div>
              </div>
              <motion.div
                ref={slidesRef}
                className={styles.slides}
                style={{ x }}
              >
                <div className={styles.spaceSlide}></div>
                <div className={styles.slide}>
                  <div className={styles.absoluteImg}>
                    <Image src={img4Src} alt="" className={styles.image} />
                  </div>
                  <div className={styles.largeImage}>
                    <Image src={img3Src} alt="" className={styles.image} />
                  </div>
                  <div className={styles.horizontalImages}>
                    <div className={styles.horizontalImage}>
                      <Image src={img6Src} alt="" className={styles.image} />
                    </div>
                    <div className={styles.smallImages}>
                      <div className={styles.smallImage}>
                        <Image src={img7Src} alt="" className={styles.image} />
                      </div>
                      <div className={styles.smallImage}>
                        <Image src={img8Src} alt="" className={styles.image} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.spaceSlide}></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchitectSectionMobile;
