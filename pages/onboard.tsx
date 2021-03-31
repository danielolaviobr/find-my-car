import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "node:constants";
import React from "react";

export default function OnBoard() {
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="yellowBG"
      position="relative"
      >
      
        <motion.div
          style={{position: "absolute", objectFit: "contain", zIndex: 100, width:"192px", height:"168px"}}
          initial={{ scale: 1.1}}
          animate={{ scale: 0.4, top: "0px" }}
          transition={{ delay: 0.3, duration: 0.5, ease: "backInOut" }}
        >
          <motion.img
            src="/assets/logo.png"
            width="384px"
            height="336px"
            layoutId="logo"
          />
        </motion.div>
        <motion.img
          src="/assets/Polygon 3.svg"
          style={{ position: "absolute", top: 0 }}
          initial={{ x: "50%", y: "50vh", scale: 0.8 }}
          animate={{ x: "70%", y: "80%", scale: 1, rotate: 80 }}
          transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
          layoutId="pol1"
        />
        <motion.img
          src="/assets/Polygon 4.svg"
          style={{ position: "absolute", top: 0 }}
          initial={{ x: "-70%", y: "25vh", scale: 0.7 }}
          animate={{ x: "30vw", y: "80vh", scale: 1, rotate: 60 }}
          transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
          layoutId="pol1"
        />
        <motion.img
          src="/assets/Ellipse 2.svg"
          style={{ position: "absolute", top: 0 }}
          initial={{ x: "60%", y: "40vh", scale: 0.5 }}
          animate={{ x: "-80%", y: "30vh", scale: 1 }}
          transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
          layoutId="pol3"
        />
        <motion.img
          src="/assets/Subtract.svg"
          style={{ position: "absolute", top: 0 }}
          initial={{ x: "-30%", y: "45vh", scale: 0.7 }}
          animate={{ x: "-60%", y: "70vh", scale: 1, rotate: 120 }}
          transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
          layoutId="pol4"
        /> 
    </Box>
  );
}
