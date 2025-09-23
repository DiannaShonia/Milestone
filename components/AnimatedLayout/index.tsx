import { useRouter } from "next/router";
import { MotionConfig, useReducedMotion, useAnimate } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import Sidebars from "@/components/Sidebars";
import style from "./styles.module.css";

type Dir = "ltr" | "rtl";

const OVERLAY_MS = 550;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const prefersReduced = useReducedMotion();

  const [scope, animate] = useAnimate();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [origin, setOrigin] = useState<"0% 50%" | "100% 50%" | "50% 50%">(
    "50% 50%"
  );

  const originFromDir = useCallback(
    (dir: Dir) => (dir === "ltr" ? "0% 50%" : "100% 50%"),
    []
  );

  const nextFrame = () =>
    new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

  const waitForRouteComplete = () =>
    new Promise<void>((resolve) => {
      const done = () => {
        router.events.off("routeChangeComplete", done);
        resolve();
      };
      router.events.on("routeChangeComplete", done);
    });

  const navigateWithWipe = useCallback(
    async (dir: Dir, href: string) => {
      setOrigin(originFromDir(dir));
      await nextFrame();

      const node = overlayRef.current;
      if (!node) return;

      await animate(
        node,
        { transform: "scaleX(1)" },
        { duration: prefersReduced ? 0 : OVERLAY_MS / 1000, ease: EASE }
      );

      router.push(href);
      await waitForRouteComplete();
      await nextFrame();

      await animate(node, { transform: "scaleX(0)" }, { duration: 0 });
    },
    [router, animate, prefersReduced, originFromDir]
  );

  const transformOrigin = useMemo(() => origin, [origin]);

  return (
    <MotionConfig transition={{ duration: 0.6, ease: EASE }}>
      <div
        ref={scope}
        style={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <div
          ref={overlayRef}
          aria-hidden
          className={style.overlay}
          style={{
            transformOrigin,
          }}
        />

        <main style={{ minHeight: "100vh" }}>{children}</main>

        <Sidebars onNavigate={navigateWithWipe} />
      </div>
    </MotionConfig>
  );
}
