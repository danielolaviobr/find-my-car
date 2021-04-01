import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function QRscanner() {
  const navigator = useRouter();

  const handleScan = (data) => {
    if (data) {
      navigator.push(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="yellowBG"
      position="relative">
      <img
        src="/assets/logo.png"
        width="192px"
        height="168px"
        style={{ position: "absolute", transform: "scale(0.4)", top: "0px", zIndex:50 }}
      />
      <Flex
        width="100%"
        display="flex"
        direction="column"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="#EB008C" fontSize={40} mb={5} fontWeight="bold">
          QR Code
        </Text>
        <Flex 
          width="100%" 
          alignItems="center"
          justifyContent="center"
          zIndex= "50"
        >
          <QR
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{
              width: "90%",
            }}
            viewFinder={false}
          />
          <Box
            border="4px"
            rounded="md"
            position="absolute"
            borderColor="#FFF"
            w="250px"
            h="250px"
          />
        </Flex>
      </Flex>
      <motion.img
        src="/assets/Polygon 3.svg"
        style={{ position: "absolute", top: 0 }}
        initial={{ x: "50%", y: "50vh", scale: 0.8 }}
        animate={{ x: "70%", y: "80%", scale: 1, rotate: 80 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
        layoutId="pol1"
      />
      <motion.img
        src="/assets/Polygon 4.svg"
        style={{ position: "absolute", top: 0 }}
        initial={{ x: "-70%", y: "25vh", scale: 0.7 }}
        animate={{ x: "30vw", y: "80vh", scale: 1, rotate: 60 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
        layoutId="pol2"
      />
      <motion.img
        src="/assets/Ellipse 2.svg"
        style={{ position: "absolute", top: 0 }}
        initial={{ x: "60%", y: "40vh", scale: 0.5 }}
        animate={{ x: "-80%", y: "5vh", scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
        layoutId="pol3"
      />
      <motion.img
        src="/assets/Subtract.svg"
        style={{ position: "absolute", top: 0 }}
        initial={{ x: "-30%", y: "45vh", scale: 0.7 }}
        animate={{ x: "-60%", y: "70vh", scale: 1, rotate: 120 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
        layoutId="pol4"
      />
    </Box>
  );
}
