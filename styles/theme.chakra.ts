import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  color: {
    yellowBG: "#FFF9F3",
    accentPink: "#EB008C",
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
