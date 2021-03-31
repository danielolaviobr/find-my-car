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
      <motion.div
        style={{
          position: "absolute",
          objectFit: "contain",
          zIndex: 100,
          width: "192px",
          height: "168px",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 0.4, top: "0px" }}
        transition={{ delay: 0.3, duration: 0.5, ease: "backInOut" }}>
        <motion.img
          src="/assets/logo.png"
          width="384px"
          height="336px"
          layoutId="logo"
        />
      </motion.div>

      <QR
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{
          width: "100%",
          border: "4px solid #EB008C",
          borderRadius: "8px",
          margin: "16px",
        }}
        viewFinder={false}
      />
      <Flex
        width="100%"
        display="flex"
        direction="column"
        position="absolute"
        alignItems="center"
        justifyContent="center">
        <Text color="#EB008C" fontSize={20} mb={8}>
          Please Scan Barcode
        </Text>
        <Box
          border="4px"
          rounded="md"
          borderColor="#EB008C"
          w="300px"
          h="300px"
        />
      </Flex>
    </Box>
  );
}
