import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

import styles from "./styles.module.css";

import logoSrc from "@/assets/images/logo.svg";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale: locale });
  };

  return (
    <>
      <header
        className={clsx(
          styles.header,
          pathname !== "/" ? styles.filledBackground : ""
        )}
      >
        <div
          className={clsx(
            styles.wrapper,
            pathname === "/about-project" ||
              pathname === "/about-project/[slug]"
              ? styles.about
              : "",
            pathname === "/select-land" ? styles.select : ""
          )}
        >
          <div className={styles.row}>
            <div>
              <div className={styles.logoBox}>
                <Link href={"./"}>
                  <Image
                    src={logoSrc}
                    alt="Milestone Logo"
                    width={150}
                    height={50}
                    className={styles.logo}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.languages}>
                <span
                  className={clsx(styles.language, {
                    [styles.active]: router.locale === "ka",
                  })}
                  onClick={() => handleChangeLanguage("ka")}
                >
                  ქარ
                </span>
                <span
                  className={clsx(styles.language, {
                    [styles.active]: router.locale === "en",
                  })}
                  onClick={() => handleChangeLanguage("en")}
                >
                  En
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
