import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { HomeIcon } from "../styles/icons/home";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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
        style={{ objectFit: "contain", zIndex: 100, width:"192px", height:"168px"}}
        initial={{ scale: 0.6 }}
        animate={{ scale: 0.9 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
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
        layoutId="pol2"
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
      <NextLink href="/onboard" passHref>
        <Link as="a" href="/onboard" position="absolute" left={0}>
          OnBoard
        </Link>
      </NextLink>
    </Box>
  );
}
