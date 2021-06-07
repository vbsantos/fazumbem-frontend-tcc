import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../../components/Logo";

export default function Home() {
  return (
    <Box>
      <Box as="header" borderBottomColor="brand.500" borderBottomWidth="5px">
        <Flex
          maxW="1400px"
          paddingX={{ base: "35px", sm: "60px" }}
          paddingY={2}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
        >
          <Logo height="7rem" width="100px" />

          <Stack
            spacing={{ base: 2, sm: 10 }}
            direction={{ base: "column", sm: "row" }}
            marginRight={{ base: 3, sm: "none" }}
          >
            <Heading
              color="brand.400"
              size="lg"
              border="2px solid transparent"
              _hover={{
                borderBottomColor: "brand.400",
                borderBottomWidth: "2px",
              }}
              cursor="pointer"
            >
              Campanhas
            </Heading>

            <Heading
              color="brand.400"
              size="lg"
              border="2px solid transparent"
              _hover={{
                borderBottomColor: "brand.400",
                borderBottomWidth: "2px",
              }}
              cursor="pointer"
            >
              Instituições
            </Heading>

            <Heading
              color="brand.400"
              size="lg"
              border="2px solid transparent"
              _hover={{
                borderBottomColor: "brand.400",
                borderBottomWidth: "2px",
              }}
              cursor="pointer"
            >
              Sobre
            </Heading>
          </Stack>

          <HStack spacing={5} margin={{ base: "15px auto", lg: "initial" }}>
            <Button
              colorScheme="brand"
              as={RouterLink}
              to="/login"
              size="sm"
              variant="outline"
            >
              Entrar
            </Button>

            <Button
              colorScheme="brand"
              as={RouterLink}
              to="/register"
              size="sm"
              variant="outline"
            >
              Cadastro
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
