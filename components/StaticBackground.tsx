import React from "react";
import { motion, AnimationControls, MotionProps } from "framer-motion";
import { MotionBox } from "./MotionBox";
import { MakeCustomValueType } from "framer-motion/types/types";

interface StaticBackgroundProps {
  animate?: any;
  initial?: any;
}

export default function StaticBackground({
  animate,
  initial,
}: StaticBackgroundProps) {
  return (
    <MotionBox
      position="fixed"
      top="0"
      w="100%"
      h="100%"
      animate={animate}
      initial={initial}>
      <motion.img
        src="/assets/Polygon 3.svg"
        style={{
          position: "absolute",
          top: "80%",
          left: "70%",
          transform: "rotate(80deg)",
        }}
        layoutId="pol1"
      />
      <motion.img
        src="/assets/Polygon 4.svg"
        style={{
          position: "absolute",
          left: "10vw",
          top: "20vh",
          transform: "rotate(60deg)",
        }}
        layoutId="pol2"
      />
      <motion.img
        src="/assets/Ellipse 2.svg"
        style={{ position: "absolute", left: "80vw", top: "10vh" }}
        layoutId="pol3"
      />
      <motion.img
        src="/assets/Subtract.svg"
        style={{
          position: "absolute",
          top: "70vh",
          left: "-5vw",
          transform: "rorate(120deg)",
        }}
        layoutId="pol4"
      />
    </MotionBox>
  );
}
