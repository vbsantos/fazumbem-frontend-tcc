import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logoSrc from "../../../assets/images/grayLogo.svg";
import Logo from "../../../components/Logo";

export default function Home() {
  const titleColor = useColorModeValue("brand.600", "brand.100");
  const headingColor = useColorModeValue("brand.400", "brand.200");

  return (
    <Box backgroundColor="gray.300">
      <Box
        as="header"
        borderBottomColor="brand.500"
        borderBottomWidth="5px"
        backgroundColor="gray.100"
      >
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
              color={headingColor}
              size="lg"
              cursor="pointer"
              href="#campanhas"
              as={Link}
            >
              Campanhas
            </Heading>

            <Heading
              color={headingColor}
              size="lg"
              cursor="pointer"
              href="#instituicoes"
              as={Link}
            >
              Instituições
            </Heading>

            <Heading
              color={headingColor}
              size="lg"
              cursor="pointer"
              href="#sobre"
              as={Link}
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

      <Box
        backgroundColor="brand.500"
        width="max-content"
        padding={2}
        margin="16px auto"
        borderRadius={6}
      >
        <Heading color={"white"} textAlign="center" id="campanhas">
          Campanhas
        </Heading>
      </Box>

      <SimpleGrid
        minChildWidth={{ base: "100%", md: "40%", lg: "300px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
          <VStack
            spacing={4}
            align="center"
            justify="center"
            borderColor="brand.500"
            borderWidth="2px"
            paddingX={6}
            paddingY={3}
            borderRadius={30}
            backgroundColor="gray.100"
          >
            <Text
              fontSize="2xl"
              color={titleColor}
              fontWeight="bold"
              textAlign="center"
            >
              Nome da Campanha {value}
            </Text>

            <Image
              src={`https://fazumbem.inf.ufsm.br/images/entidades/${value}.png`}
              fallbackSrc={logoSrc}
              alt="logo"
              height="300px"
              objectFit="fill"
              borderRadius={30}
            />

            <Button variant="solid" colorScheme="brand">
              Acessar
            </Button>
          </VStack>
        ))}
      </SimpleGrid>

      <Box
        backgroundColor="brand.500"
        width="max-content"
        padding={2}
        margin="16px auto"
        borderRadius={6}
      >
        <Heading color="white" textAlign="center" id="instituicoes">
          Instituições
        </Heading>
      </Box>

      <SimpleGrid
        minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
          <VStack
            spacing={1}
            align="center"
            justify="center"
            borderColor="gray.500"
            borderWidth="3px"
            padding={3}
            borderRadius={30}
            backgroundColor="gray.200"
            cursor="pointer"
            _hover={{
              borderColor: "brand.500",
            }}
          >
            <Text
              fontSize="1xl"
              color={titleColor}
              fontWeight="bold"
              textAlign="center"
            >
              Instituição Nome {value}
            </Text>

            <Image
              src={`https://fazumbem.inf.ufsm.br/images/logos/${value}.png`}
              fallbackSrc={logoSrc}
              alt="logo"
              height="100px"
              objectFit="fill"
              borderRadius={10}
            />
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
