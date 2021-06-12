import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, VStack } from "@chakra-ui/layout";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  const formBackground = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex justify="center" align="center" minH="100vh">
      <VStack
        spacing={4}
        justifyContent="center"
        maxW="400px"
        w="400px"
        padding={6}
        background={formBackground}
        rounded={10}
      >
        {children}
      </VStack>
    </Flex>
  );
}
