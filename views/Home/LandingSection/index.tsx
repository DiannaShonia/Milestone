import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks";

import styles from "./styles.module.css";

import videoDesktopPosterSrc from "@/assets/images/video-dektop-poster.webp";
import videoMobilePosterSrc from "@/assets/images/video-mobile-poster.webp";
import videoTabletPosterSrc from "@/assets/images/video-tablet-poster.png";

type LandingSectionProps = {
  data?: any;
};

const LandingSection = ({ data }: LandingSectionProps) => {
  // const { t } = useTranslation(["common", "home"]);
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();
    }
  }, [isTablet]);

  return (
    <>
      <div className={styles.videoBox}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          poster={
            isMobile
              ? videoMobilePosterSrc.src
              : isTablet
              ? videoTabletPosterSrc.src
              : videoDesktopPosterSrc.src
          }
        >
          <source
            src={
              isMobile
                ? "https://techzywebsite.blob.core.windows.net/milestone/video-mobile.webm"
                : isTablet
                ? "https://techzywebsite.blob.core.windows.net/milestone/tablet tsavkisi1.mp4"
                : "https://techzywebsite.blob.core.windows.net/milestone/video-desktop.webm"
            }
            type="video/webm"
          />
        </video>
      </div>
      <div className={styles.infoBox}>
        <div>
          <div className="row">
            <div className="col-6 col-md-12">
              <h1 className={styles.title}>
                {/* {t("home:landing-title")  */}
                ᲡᲐᲙᲛᲐᲠᲘᲡᲐᲓ ᲐᲮᲚᲝᲡ ᲓᲐ ᲡᲐᲙᲛᲐᲠᲘᲡᲐᲓ ᲨᲝᲠᲡ ᲥᲐᲚᲐᲥᲘᲡᲒᲐნ
              </h1>
            </div>
            <div className="col-6 col-md-12">
              <p className={styles.text}>
                {/* {t("home:landing-text-1")} */}კომპანია მაილსტოუნი წავკისის
                განაპირას ექსკლუზიურ პროექტს ქმნის. მზიანი სამხრეთის ფერდზე
                მდებარე 63 ინდივიდუალური მიწის ნაკვეთი, ხედებით ტყესა და 
                ქალაქზე.
              </p>
              <br />
              <p className={styles.text}>
                {/* {t("home:landing-text-2")} */}
                პროექტი : წავკისი უნიკალურ გარემოში მდებარე, ერთიანი
                არქიტექტურული იერსახის მქონე დასახლებაა, რომელიც შექმნილია
                მათთვის, ვისაც სურს აიშენოს ოცნების სახლი ბუნებასთან ახლოს და
                ამავდროულად არ დაკარგოს კავშირი ქალაქთან.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
