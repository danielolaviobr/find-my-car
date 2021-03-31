import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import router from "next/router";
import React from "react";
import { MotionBox } from "../../components/MotionBox";

export default function StepTwo() {
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="yellowBG"
      position="relative">
      <img
        src="/assets/logo.png"
        width="192px"
        height="168px"
        style={{ position: "absolute", transform: "scale(0.4)", top: "0px" }}
      />
      <Flex direction="column" align="center" justify="center">
        <motion.img
          src="/assets/hand-2.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        />
        <MotionBox
          key="1"
          as={Heading}
          color="#EB008C"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ delay: 0.2, duration: 1 }}>
          Passo 2
        </MotionBox>
        <motion.p
          style={{ maxWidth: "256px", textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "20px" }}
          transition={{ delay: 0.2, duration: 1 }}>
          Abra a câmera do Find My Care aponte para o QR Code maisperto de si!
        </motion.p>
      </Flex>
      <MotionBox
        w={28}
        h={2}
        bg="gray.300"
        rounded="full"
        position="fixed"
        bottom="28px"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.2, duration: 1 }}
      >
        <MotionBox
          w="33%"
          h={2}
          bg="#EB008C"
          rounded="full"
          layoutId="progressBar"
          ml="33%"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   transition={{ delay: 0.2, duration: 1 }}
        />
      </MotionBox>
      <MotionBox
        position="fixed"
        bottom="16px"
        right="32px"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.2, duration: 1 }}
        as={IconButton}
        variant="unstyled"
        onClick={() => router.replace("/onboard/3")}
        icon={
          <ArrowForwardIcon w="24px" h="24px" color="#EB008C" />
        }></MotionBox>
    </Box>
  );
}
