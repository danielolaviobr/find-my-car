import { Box, Button, chakra, Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { MotionBox } from "../../components/MotionBox";

export default function OnBoard() {
  const router = useRouter();
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
      <Flex direction="column" align="center" justify="center">
        <MotionBox
          key="1"
          as={Heading}
          color="#EB008C"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "-50px" }}
          transition={{ delay: 0.7, duration: 1 }}>
          Bem vindo
        </MotionBox>
        <motion.p
          style={{ maxWidth: "256px", textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}>
          Bem vindo ao Find My Car do Centro Comercial Alegro! Estamos aqui para
          o ajudar a encontrar o seu carro.
        </motion.p>
        <MotionBox
          as="span"
          color="#EB008C"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "20px" }}
          transition={{ delay: 0.7, duration: 1 }}>
          Vamos começar?
        </MotionBox>
        <MotionBox
          as={Button}
          onClick={() => router.replace("/onboard/1")}
          rounded="full"
          bg="#EB008C"
          color="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "40px" }}
          transition={{ delay: 0.6, duration: 0.9 }}>
          Começar
        </MotionBox>
      </Flex>
    </Box>
  );
}
