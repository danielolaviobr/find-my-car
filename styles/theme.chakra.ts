import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    yellowBG: "#FFF9F3",
  },
  styles: {
    global: {
      "html, body": {
        minWidth: "360px",
        scrollBehavior: "smooth",
        backgroundColor: "#FFF9F3",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    },
  },
});
