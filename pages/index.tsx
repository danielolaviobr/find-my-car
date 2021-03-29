import { Box, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import QR from "../components/QR";

export default function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    console.log(data);
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Box h="100vh">
      <QR
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 240, width: 320 }}
      />
    </Box>
  );
}
