import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme.chakra";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type="switch">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
