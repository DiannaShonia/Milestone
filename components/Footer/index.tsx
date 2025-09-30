import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import ContactForm from "@/components/ContactForm";

import styles from "./styles.module.css";

import desktopPaperSrc from "@/assets/images/footer-paper-desktop.png";
import mobilePaperSrc from "@/assets/images/footer-paper-mobile.png";
import mapSrc from "@/assets/images/map.png";
import mapIconSrc from "@/assets/images/map-icon.svg";
import facebookIconSrc from "@/assets/images/facebook-icon.svg";
import instagramIconSrc from "@/assets/images/instagram-icon.svg";
import footerDotSrc from "@/assets/images/footer-dot.png";

const Footer = () => {
  const { t } = useTranslation(["common", "home"]);

  const router = useRouter();

  const handleChangeLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: locale });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.paper}>
          <Image
            src={desktopPaperSrc}
            alt="Footer Paper"
            width={1920}
            height={1000}
            className={styles.paperImg}
          />
          <Image
            src={mobilePaperSrc}
            alt="Footer Paper"
            width={1024}
            height={2772}
            className={styles.paperImg}
          />
        </div>
        <div className={styles.topContent}>
          <div className={styles.contactWrapper}>
            <div className="row">
              <div className="col-7 col-lg-12">
                <div className={styles.mapBox}>
                  <Image
                    src={mapSrc}
                    alt="Map"
                    width={913}
                    height={634}
                    className={styles.mapImg}
                  />
                </div>
                <div className={styles.mapTop}>
                  <div className={styles.mapTopLabel}>
                    {t("ქალაქური რიტმი იდეალურ მანძილზე")}
                  </div>
                  <h4 className={styles.mapTopTitle}>
                    {t("18 წუთი ქალაქის ცენტრიდან")}
                  </h4>
                </div>
                <Link
                  href={"https://maps.app.goo.gl/RgWyx2chZMVrwzcE7"}
                  target="_blank"
                  className={styles.mapBottomBtn}
                >
                  <Image
                    src={mapIconSrc}
                    alt={t("common:footer-map-button-title")}
                    width={24}
                    height={24}
                    className={styles.mapBottomBtnIcon}
                  />
                  {t("ზუსტი მისამართი")}
                </Link>
              </div>
              <div className="col-5 col-lg-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.contactWrapper}>
          <div className="row">
            <div className="col-4 col-md-12 d-flex justify-content-start align-items-center justify-content-md-center">
              <div className={styles.bottomItem}>
                <h5 className={styles.bottomItemTitle}>{t("კონტაქტი")}</h5>
                <div>
                  <a href="tel:+995598399899" className={styles.bottomItemText}>
                    +995 598 399 899
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@milestone.ge"
                    className={styles.bottomItemText}
                  >
                    info@milestone.ge
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-12 d-flex justify-content-center align-items-center justify-content-md-center">
              <div className={styles.bottomItem}>
                <h5
                  className={styles.bottomItemTitle}
                  style={{ textAlign: "center" }}
                >
                  {t("მისამართი")}
                </h5>
                <div>
                  <div
                    className={styles.bottomItemText}
                    style={{ textAlign: "center" }}
                  >
                    D Block @ Stamba
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-12 d-flex justify-content-end align-items-center justify-content-md-center">
              <div className={styles.bottomItem}>
                <h5 className={styles.bottomItemTitle}>{t("გამოგვყევი")}</h5>
                <div className={styles.socials}>
                  <Link
                    href="https://www.facebook.com/share/1LFquLb5Fu/?mibextid=wwXIfr"
                    target="_blank"
                    className={styles.socialsLink}
                  >
                    <Image
                      src={facebookIconSrc}
                      alt="Facebook"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/project.tsavkisi/"
                    target="_blank"
                    className={styles.socialsLink}
                  >
                    <Image
                      src={instagramIconSrc}
                      alt="Instagram"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dots}>
          <div className="container">
            <div className="row justify-content-center gap-s">
              <Image
                src={footerDotSrc}
                alt="FooterDot"
                width={40}
                height={40}
              />
              <Image
                src={footerDotSrc}
                alt="FooterDot"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightText}>&copy; 2025 - Copyright</div>
          <div className={styles.copyrightText}>All Rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
