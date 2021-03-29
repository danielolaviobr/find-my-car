import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import database from "../../database.json";

const Map = () => {
  const router = useRouter();

  useEffect(() => {
    const { map } = router.query;
    if (map) {
      console.log(map);
      const carLocation = localStorage.getItem("@CarLocation");
      const location = database[`${carLocation}/${map}`];
      console.log(`/guide/${location}`);
      router.push(`/guide/${location}`);
    }
  }, [router]);

  return (
    <Flex align="center" justify="center" h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default Map;
