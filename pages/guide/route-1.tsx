import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import Directions from "../../components/Direction";
import Map from "../../components/Map";

export default function MapTest() {
  return (
    <Box
      bg="red"
      h="100vh"
      display="flex"
      align="center"
      justifyContent="center">
      <svg
        width="375"
        height="375"
        viewBox="0 0 1250 1250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Map />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
          d="M570.5 940.5L445 815L662.5 597.5L729.5 662L927.5 464"
          stroke="#FFEB8C"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter0_d)">
          <g opacity="0.2" filter="url(#filter1_d)">
            <circle cx="570.5" cy="942.5" r="22.5" fill="#EB008C" />
          </g>
          <circle cx="570.5" cy="942.5" r="17.5" fill="#EB008C" />
        </g>
        <path
          d="M928.405 424C924.054 424 919.881 425.728 916.805 428.805C913.728 431.881 912 436.054 912 440.405C912 447.675 922.559 460.878 926.734 465.816C926.94 466.059 927.196 466.254 927.484 466.387C927.773 466.521 928.087 466.59 928.405 466.59C928.723 466.59 929.037 466.521 929.326 466.387C929.614 466.254 929.87 466.059 930.076 465.816C934.246 460.878 944.81 447.675 944.81 440.405C944.81 438.251 944.386 436.117 943.561 434.127C942.737 432.137 941.528 430.328 940.005 428.805C938.482 427.282 936.673 426.073 934.683 425.249C932.693 424.424 930.559 424 928.405 424V424ZM928.405 445.874C927.323 445.874 926.266 445.553 925.367 444.952C924.467 444.351 923.766 443.497 923.353 442.498C922.939 441.499 922.83 440.399 923.041 439.338C923.252 438.277 923.773 437.303 924.538 436.538C925.303 435.773 926.277 435.252 927.338 435.041C928.399 434.83 929.499 434.939 930.498 435.353C931.497 435.766 932.351 436.467 932.952 437.367C933.553 438.266 933.874 439.323 933.874 440.405C933.874 441.855 933.298 443.246 932.272 444.272C931.246 445.298 929.855 445.874 928.405 445.874V445.874Z"
          fill="#EB008C"
        />
        <defs>
          <filter
            id="filter0_d"
            x="543"
            y="911"
            width="63"
            height="63"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.698039 0 0 0 0 0.815686 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="543"
            y="911"
            width="63"
            height="63"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.698039 0 0 0 0 0.815686 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Box>
  );
}
