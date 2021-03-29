import { Box, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";
import Link from "next/link";

export default function QRscanner() {
  const navigator = useRouter();

  const handleScan = (data) => {
    if (data) {
      // console.log(data);
      navigator.push(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Link href="/scanner" passHref>
        <Button as="a" colorScheme="blue">
          Abrir scanner
        </Button>
      </Link>
    </Box>
  );
}
