import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Location = () => {
  const router = useRouter();

  useEffect(() => {
    const { location } = router.query;
    localStorage.setItem("@CarLocation", location as string);
  }, [router]);

  return (
    <Flex align="center" justify="center" direction="column" h="100vh">
      <img
        src="/assets/logo.png"
        width="192px"
        height="168px"
        style={{ position: "absolute", transform: "scale(0.4)", top: "0px", zIndex:50 }}
      />
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M31 53L48 70L78.5 40" 
          stroke="#EB008C" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, strokeWidth: "6px" }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle 
          cx="55" 
          cy="55" 
          r="52.5" 
          stroke="#EB008C" 
          strokeWidth="5"
          initial={{ pathLength: 0, strokeWidth: "5px" }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
      <Heading color="#EB008C" mt={8} size="2xl">OBRIGADO!</Heading>
      <motion.p
          
          style={{ fontSize:"1rem", maxWidth: "256px", textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "16px" }}
          transition={{ delay: 0.2, duration: 1 }}>
          A sua localização foi guardada.
          Para encontrar o seu carro volte ao Find My Car e clique no botão de navegar.
      </motion.p>
    </Flex>
  );
};

export default Location;
