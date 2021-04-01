import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import Directions from "../../components/Direction";

export default function MapTest() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <>
      <Box position="relative" minW="300px" w="100%" minH="400px" h="100%">
        <svg
          viewBox="0 0 763 626"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", zIndex: 10 }}>
          <motion.path
            key={animationKey}
            d="M173 286.5L180 347.5V415.5L318 427L403 433.5L450 409.5L522.5 492.5C483.5 544 284.5 501.5 99.5 501.5"
            stroke="#008837"
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
      </Box>
      <Box
        bg="white"
        mx={4}
        rounded="md"
        boxShadow="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxH="320px"
        pt={36}
        overflowY="scroll">
        <Heading>Direções</Heading>
        <Directions icon={<ArrowDownIcon w={8} h={8} />}>
          Siga em frente por 30m
        </Directions>
        <Directions icon={<ArrowForwardIcon w={8} h={8} />}>
          Vire a esquerda
        </Directions>
        <Directions icon={<ArrowForwardIcon w={8} h={8} />}>
          Siga em frente por 100m
        </Directions>
        <Directions icon={<ArrowDownIcon w={8} h={8} />}>
          Vire a direita
        </Directions>
        <Directions icon={<ArrowBackIcon w={8} h={8} />}>
          Siga em frente por 100 metros
        </Directions>
      </Box>
      <Button
        position="fixed"
        bottom={4}
        left="50%"
        transform="translate(-50%, 0)"
        colorScheme="green"
        size="lg"
        onClick={() => setAnimationKey(animationKey + 1)}>
        Mostrar novamente
      </Button>
    </>
  );
}
