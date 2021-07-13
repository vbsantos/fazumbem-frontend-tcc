import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#0669BF",
      200: "#055499",
      300: "#04447D",
      400: "#033B6B",
      500: "#034074",
      600: "#032E54",
      700: "#022645",
      800: "#02203B",
      900: "#012768",
    },
    bluish: {
      100: "#034074",
      200: "#055499",
      300: "#1283E6",
      400: "#1E88E6",
      500: "#298EE6",
      600: "#217CFC",
      700: "#298EE6",
      800: "#29B1E6",
      900: "#51CEE6"
    },
    brownish: {
      100: "#A37633",
      200: "#FCC068",
      300: "#FFCD82",
      400: "#f9e3c1"
    }
  },
});

export default theme;
