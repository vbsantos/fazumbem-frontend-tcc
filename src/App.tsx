import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Router from "./routes/index";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <Router />
  </ChakraProvider>
);
