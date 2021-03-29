import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";

export default function MapTest() {
  const [animationKey, setAnimationKey] = useState(0);
  return (
    <>
      <motion.div
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "400px",
          height: "100%",
        }}>
        <svg
          viewBox="0 0 578 494"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", zIndex: 10 }}>
          <motion.path
            key={animationKey}
            d="M316.5 435.5L354 418.5L329.5 366.5L377.5 343L350 278.5L325.5 198"
            stroke="#35A7E8"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            initial={{ pathLength: 0, strokeWidth: "5px" }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, easings: "easeOut" }}
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
      <Button
        colorScheme="blue"
        onClick={() => setAnimationKey(animationKey + 1)}>
        Mostrar novamente
      </Button>
    </>
  );
}
