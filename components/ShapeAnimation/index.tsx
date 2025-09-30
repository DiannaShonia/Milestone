// components/ShapeAnimation.tsx
import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

export type Direction = "ltr" | "rtl";

type Props = { show: boolean; direction?: Direction };

const ShapeAnimation: React.FC<Props> = ({ show, direction = "ltr" }) => {
  const slideVariants: Variants = {
    initial: { x: direction === "ltr" ? "-100vw" : "100vw" },
    animate: {
      x: "0",
      transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="page-transition-overlay"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: direction === "ltr" ? "#B23F2A" : "#6F756F",
            zIndex: 998,
            willChange: "transform",
          }}
        />
      )}
    </AnimatePresence>
  );
};
export default ShapeAnimation;
