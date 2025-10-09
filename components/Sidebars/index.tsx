import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import usePreviousPath from "@/hooks/usePreviusPath";

import styles from "./styles.module.css";
import { motion, Variants } from "framer-motion";

const leftItemVariants: Variants = {
  inactive: {
    right: "auto",
    left: 0,
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
  },
  active: {
    left: "auto",
    right: 75,
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
  },
};

const rightItemVariants: Variants = {
  inactive: {
    left: "auto",
    right: 0,
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
  },
  active: {
    left: 75,
    right: "auto",
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
  },
};

const Sidebars = () => {
  const router = useRouter();
  const prevPath = usePreviousPath();
  const [navTarget, setNavTarget] = useState<string | null>(null);

  useEffect(() => {
    if (navTarget && router.pathname !== navTarget) {
      setNavTarget(null);
    }
    if (!navTarget) {
    }
  }, [router.pathname]);

  const handleNavigation = (path: string) => {
    if (router.pathname === path) return;
    setNavTarget(path);
    router.push(path);
  };

  const testVariants: Variants = {
    initial: { width: "100vw" },
    animate: {
      width: "0",
      transition: { duration: 1.7, delay: 0.2, ease: [0.7, 0, 0.3, 1] },
    },
  };

  console.log(router.pathname, "this should be correct path");

  return (
    <>
      <div className={styles.header}>
        <motion.div
          variants={leftItemVariants}
          initial={false}
          animate={
            navTarget === "/about-project" ||
            navTarget === "/about-project/[slug]" ||
            ((router.pathname === "/about-project" ||
              router.pathname === "/about-project/[slug]") &&
              navTarget === null)
              ? "active"
              : "inactive"
          }
          onClick={() => handleNavigation("/about-project")}
          className={clsx(styles.menuItem, styles.menuItemLeft, {
            [styles.active]:
              router.pathname === "/about-project" ||
              router.pathname === "/about-project/[slug]",
          })}
        >
          <span className={styles.menuItemLabel}>ᲞᲠᲝᲔᲥᲢᲘᲡ ᲨᲔᲡᲐᲮᲔᲑ</span>
          {(router.pathname === "/about-project" && navTarget === null) ||
            (prevPath === "/about-project/[slug]" &&
              router.pathname === "/about-project") ||
            (navTarget === "/about-project" && (
              <motion.div
                key="about-project-slide"
                variants={testVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "#B23F2A",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            ))}
          {router.pathname === "/" &&
            navTarget === null &&
            (prevPath === "/about-project/[slug]" ||
              prevPath === "/about-project") && (
              <motion.div
                key="slide"
                variants={testVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "#B23F2A",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            )}
        </motion.div>
        <motion.div
          variants={rightItemVariants}
          initial={false}
          animate={
            navTarget === "/select-land" ||
            (router.pathname === "/select-land" && navTarget === null)
              ? "active"
              : "inactive"
          }
          onClick={() => handleNavigation("/select-land")}
          className={clsx(styles.menuItem, styles.menuItemRight, {
            [styles.active]: router.pathname === "/select-land",
          })}
        >
          <span className={styles.menuItemLabel}>ᲨᲔᲐᲠᲩᲘᲔ ᲛᲘᲬᲘᲡ ᲜᲐᲙᲕᲔᲗᲘ</span>
          {(navTarget === "/select-land" ||
            (router.pathname === "/select-land" && navTarget === null)) && (
            <motion.div
              key="select-land-slide"
              variants={testVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#6F756F",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          )}
          {router.pathname === "/" &&
            navTarget === null &&
            prevPath === "/select-land" && (
              <motion.div
                key="exit-slide"
                variants={testVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "#6F756F",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            )}
        </motion.div>
      </div>
    </>
  );
};

export default Sidebars;
