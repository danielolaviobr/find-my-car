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
      as={motion.div}
      h="100vh"
      w="100%"
      display="flex"
      justifyContent="center"
      bg="yellowBG"
      position="relative">
      <motion.img
        src="/assets/logo.png"
        width="192px"
        height="168px"
        style={{ objectFit: "contain", zIndex: 100 }}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
        layoutId="logo"
      />
      <motion.img
        src="/assets/Polygon 3.svg"
        style={{ position: "absolute" }}
        initial={{ x: "50%", y: "50vh", scale: 0.8 }}
        animate={{ x: "70%", y: "80%", scale: 1, rotate: 80 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
      />
      <motion.img
        src="/assets/Polygon 4.svg"
        style={{ position: "absolute" }}
        initial={{ x: "-70%", y: "25vh", scale: 0.7 }}
        animate={{ x: "30vw", y: "80vh", scale: 1, rotate: 60 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
      />
      <motion.img
        src="/assets/Ellipse 2.svg"
        style={{ position: "absolute" }}
        initial={{ x: "60%", y: "40vh", scale: 0.5 }}
        animate={{ x: "-80%", y: "30vh", scale: 1 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
      />
      <motion.img
        src="/assets/Subtract.svg"
        style={{ position: "absolute" }}
        initial={{ x: "-30%", y: "45vh", scale: 0.7 }}
        animate={{ x: "-60%", y: "70vh", scale: 1, rotate: 120 }}
        transition={{ delay: 1, duration: 0.3, ease: "backInOut" }}
      />
      <NextLink href="/onboard" passHref>
        <Link as="a" href="/onboard" position="absolute" left={0}>
          OnBoard
        </Link>
      </NextLink>
    </Box>
  );
}
