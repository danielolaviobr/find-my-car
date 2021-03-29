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
          viewBox="0 0 763 626"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", zIndex: 10 }}>
          <motion.path
            d="M173 286.5L180 347.5V415.5L318 427L403 433.5L450 409.5L522.5 492.5C483.5 544 284.5 501.5 99.5 501.5"
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
          src="/bg2.png"
          alt="bg"
          width="763"
          height="626"
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
