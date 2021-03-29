import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";
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
      <CheckCircleIcon color="green" width={16} height={16} mb={8} />
      <Heading color="green">Localização salva</Heading>
    </Flex>
  );
};

export default Location;
