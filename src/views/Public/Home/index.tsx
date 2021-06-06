import { Button } from "@chakra-ui/button";
import { Flex, VStack } from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Flex justify="center" align="center" minH="100vh" direction="column">
      <VStack spacing={6}>
        <Button colorScheme="brand" as={RouterLink} to="/login">
          Login
        </Button>

        <Button colorScheme="brand" as={RouterLink} to="/register">
          Cadastro
        </Button>
      </VStack>
    </Flex>
  );
}
