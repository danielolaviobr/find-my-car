import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Location = () => {
  const router = useRouter();

  useEffect(() => {
    const { blob } = router.query;
    localStorage.setItem("@Location", blob as string);
  }, []);

  return (
    <Flex align="center" justify="center" direction="column" h="100vh">
      <CheckCircleIcon color="green" width={16} height={16} mb={8} />
      <Heading color="green">Localização salva</Heading>
    </Flex>
  );
};

export default Location;
