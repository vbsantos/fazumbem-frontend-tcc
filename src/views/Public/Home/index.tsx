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
import HeadLogo from "../../../components/Home/HeadLogo";
import ImgLogo from "../../../components/Home/Logo";
import WhiteTopLeaf from "../../../assets/images/whiteTopLeaf.svg";
import WhiteBottomLeaf from "../../../assets/images/whiteBottomLeaf.svg";
import BlueLeaf from "../../../assets/images/blueLeaf.svg";

function showCampaignDetails(){
  console.log("show details");
}

export default function Home() {
  const titleColor = useColorModeValue("#034074", "brand.100");
  const headingColor = useColorModeValue("#034074", "brand.200");
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <Box backgroundColor="gray.200">
      <Box
        as="header"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
        backgroundColor={headingColor}
      >
        <Flex
          maxW="1400px"
          paddingX={{ base: "35px", sm: "2px" }}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
        >
          <HeadLogo height="10rem" width="12rem"/>
          <div />
          <Stack
            spacing={{ base: 2, sm: 10 }}
            direction={{ base: "column", sm: "row" }}
            marginRight={{ base: 10, sm: "none" }}
          >
            <Heading
              color="white"
              size="lg"
              cursor="pointer"
              href="#campanhas"
              as={Link}
            >
              Campanhas
            </Heading>

            <Heading
              color="white"
              size="lg"
              cursor="pointer"
              href="#instituicoes"
              as={Link}
            >
              Instituições
            </Heading>

            <Heading
              color="white"
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
              bgColor="white"
              color={headingColor}
              borderRadius={50}
              p={3}
              pl={6}
              pr={6}
              as={RouterLink}
              to="/login"
              size="1xl"        
              boxShadow="0px 6px 20px rgba(0, 0, 0, 0.3)"
            >
              Entrar
            </Button>
            <Button
              bgColor="white"
              color={headingColor}
              borderRadius={50}
              p={3}
              as={RouterLink}
              to="/login"
              size="1xl"        
              boxShadow="0px 6px 20px rgba(0, 0, 0, 0.3)"
            >
              Cadastrar
            </Button>
          </HStack>
        </Flex>
      </Box> 
      <Flex
        maxW="1400px"
        paddingX={{ base: "35px", sm: "2px" }}
        paddingY={2}
        justify="space-between"
        align="center"
        wrap="wrap"
        margin="0 auto"
      >
        <ImgLogo type='blue' />
        <Heading color={titleColor} size="2xl" textAlign="center">
          BEM-VINDO AO FAZ UM <br /> BEM!
          <br />
          <Box 
            as="button" 
            borderRadius={50} 
            bg={headingColor} 
            color="white"
            mt={10}
            p={4}
            pl={10}
            pr={10}
            width="max-content"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
          >
            <Text
              fontSize="2xl"
              color="white"
              fontWeight="medium"
              textAlign="center"
            >
              Saiba mais
            </Text>
          </Box>
        </Heading>
      </Flex>
      <Box
        backgroundColor="brand.500"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <SimpleGrid
          minChildWidth={{ base: "100%", md: "40%", lg: "300px" }}
          spacing={10}
          paddingX={{ base: 4, md: 6, lg: 10 }}
          paddingY={4}
          maxW="1600px"
          margin="0 auto"
        >
          <VStack
            paddingY={3}
          >
            <Image
              height="100px"
              objectFit="contain"
              src={WhiteTopLeaf}
              alt="white icon top"
            />
            <Heading color="white" size="lg" textAlign="center">
              CAMPANHAS EM ANDAMENTO
            </Heading>
            <Image
              height="100px"
              objectFit="contain"
              src={WhiteBottomLeaf}
              alt="white icon bottom"
            />
          </VStack>
          {items.map(
            (value) => (
              <VStack
                spacing={2}
                align="center"
                paddingX={1}
                paddingY={1}
                borderRadius={15}
                pb={8}
                backgroundColor="gray.100"
                cursor="pointer"
                title="Clique para ver mais infomações sobre a campanha"
                boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
                onMouseEnter={showCampaignDetails}
                _hover={{
                  marginTop: "-15px",
                  marginBottom: "15px"
                }}
              >
                <Image
                  src={`https://fazumbem.inf.ufsm.br/images/entidades/${value}.png`}
                  fallbackSrc={logoSrc}
                  alt="logo"
                  height="260px"
                  width="280px"
                  objectFit="fill"
                  borderRadius={15}
                  filter="none"
                  mb={2}
                  mt={4}
                  _hover={{
                    filter: "brightness(30%)",
                    color: "white"
                  }}
                />
                <Text
                  fontSize="lg"
                  color={titleColor}
                  fontWeight="bold"
                  textAlign="left"
                >
                  Nome da Campanha {value} 
                </Text>
              </VStack>
            )
          )}
        </SimpleGrid>
        <Button
          bgColor="white"
          color={headingColor}
          borderRadius={50}
          p={4}
          pl={10}
          pr={10}
          mt={10}
          as={RouterLink}
          to="/login"
          size="3xl"        
          boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
          >
          <Text
            fontSize="2xl"
            color={headingColor}
            fontWeight="medium"
          >
            Ver todas
          </Text>
        </Button>
      </Box>
      <Box
        width="max-content"
        padding={2}
        m="40px auto"
        mt={20}
        mb={20}
        borderRadius={6}
      >
        <Flex
          maxW="1400px"
          paddingX={{ base: "35px", sm: "2px" }}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
        >
          <Stack
            spacing={{ base: 2, sm: 10 }}
            direction={{ base: "column", sm: "row" }}
            marginRight={{ base: 3, sm: "none" }}
          >
            <Image
              height="100px"
              objectFit="contain"
              src={BlueLeaf}
              alt="blue icon start"
              transform="rotateY(180deg)"
            />
            <Heading color="brand.500" size="2xl" textAlign="center">
              INSTITUIÇÕES <br />PARTICIPANTES
            </Heading>
            <Image
              height="100px"
              objectFit="contain"
              src={BlueLeaf}
              alt="blue icon end"
            />
          </Stack>
        </Flex>
      </Box>
      <SimpleGrid
        minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
        maxW="1600px"
        margin="0 auto"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
          <VStack
            spacing={1}
            align="center"
            justify="center"  
            padding={3}
            borderRadius={15}
            backgroundColor="brand.500"
            cursor="pointer"
            boxShadow="5px 10px 10px rgba(0, 0, 0, 0.3)"
            _hover={{
              marginTop: "-15px",
              marginBottom: "15px"
            }}
          >
            <Image
              src={`https://fazumbem.inf.ufsm.br/images/logos/${value}.png`}
              fallbackSrc={logoSrc}
              alt="logo"
              height="100px"
              objectFit="fill"
              borderRadius={10}
            />
            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              Instituição Nome {value}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
      <Box
        backgroundColor="brand.500"
        width="100%"
        mt={20}
        p={2}
      >
        <Flex
          maxW="1400px"
          paddingX={{ base: "35px", sm: "2px" }}
          paddingY={2}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
        >
          <ImgLogo type='white' />

          <Heading color="white" size="2xl" textAlign="center">
            Atalhos
            <Text
              fontSize="2xl"
              color="white"
              fontWeight="medium"
              textAlign="left"
              mt={15}
              pt={10}
            >
              Campanhas
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              fontWeight="medium"
              textAlign="left"
              mt={8}
            >
              Instituições
            </Text>
            <Text
              fontSize="2xl"
              color="white"
              fontWeight="medium"
              textAlign="left"
              mt={8}
            >
              Sobre
            </Text>
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
}
