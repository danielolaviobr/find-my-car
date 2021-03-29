import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme.chakra";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
