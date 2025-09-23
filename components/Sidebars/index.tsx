"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { PointerEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./styles.module.css";

type Dir = "ltr" | "rtl";
const SIDEBAR_W = 76;

export default function Sidebars({
  onNavigate,
}: {
  onNavigate: (dir: Dir, href: string) => void;
}) {
  const router = useRouter();
  const [preMode, setPreMode] = useState<"stack-right" | "stack-left" | null>(
    null
  );

  useEffect(() => {
    const done = () => setPreMode(null);
    router.events.on("routeChangeComplete", done);
    return () => router.events.off("routeChangeComplete", done);
  }, [router.events]);

  const routeMode: "default" | "stack-right" | "stack-left" =
    router.pathname === "/"
      ? "default"
      : router.pathname.startsWith("/project")
      ? "stack-right"
      : router.pathname.startsWith("/choose-land")
      ? "stack-left"
      : "default";

  const mode = preMode ?? routeMode;

  const leftDockToRight = `calc(100vw - ${2 * SIDEBAR_W}px)`;
  const rightDockToLeft = `calc(-100vw + ${2 * SIDEBAR_W}px)`;

  function handlePointerDown(e: PointerEvent, dir: Dir, href: string) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1)
      return;
    e.preventDefault();
    setPreMode(dir === "ltr" ? "stack-right" : "stack-left");
    onNavigate(dir, href);
  }

  return (
    <>
      <motion.div
        className={clsx(styles.sidebar, styles.sidebarLeft)}
        initial={false}
        animate={{ x: mode === "stack-right" ? leftDockToRight : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/project"
          className={styles.sidebarLink}
          onPointerDown={(e) => handlePointerDown(e, "ltr", "/project")}
        >
          Projects
        </Link>
      </motion.div>

      <motion.div
        className={clsx(styles.sidebar, styles.sidebarRight)}
        initial={false}
        animate={{ x: mode === "stack-left" ? rightDockToLeft : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/choose-land"
          className={styles.sidebarLink}
          onPointerDown={(e) => handlePointerDown(e, "rtl", "/choose-land")}
        >
          Choose ur land
        </Link>
      </motion.div>
    </>
  );
}
