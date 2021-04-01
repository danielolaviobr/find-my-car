import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import StaticBackground from "../components/StaticBackground";

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
        style={{
          position: "absolute",
          transform: "scale(0.4)",
          top: "0px",
          zIndex: 100,
        }}
      />
      <Flex
        width="100%"
        display="flex"
        direction="column"
        position="absolute"
        alignItems="center"
        justifyContent="center"
        zIndex={10}>
        <Text color="#EB008C" fontSize={40} mb={5} fontWeight="bold">
          QR Code
        </Text>
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          zIndex="50">
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
      <StaticBackground initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </Box>
  );
}
