import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function MapTest() {
  return (
    <motion.div
      style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      <svg
        width="578"
        height="494"
        viewBox="0 0 578 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", zIndex: 10 }}>
        <motion.path
          d="M316.5 435.5L354 418.5L329.5 366.5L377.5 343L350 278.5L325.5 198"
          stroke="#35A7E8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          initial={{ pathLength: 0, strokeWidth: "5px" }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
        />
      </svg>
      <img
        src="/bg.png"
        alt="bg"
        width="578"
        height="494"
        style={{ position: "absolute" }}
      />
    </motion.div>
  );
}
