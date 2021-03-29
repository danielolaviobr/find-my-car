import { Box, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";
import { useRouter } from "next/router";

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
      <QR
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 240, width: 320 }}
      />
    </Box>
  );
}
