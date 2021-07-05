/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Button } from "@chakra-ui/button";
import "../../../css/instituicoes.css";
import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/layout";
import { Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../../../components/Home/HeadLogo";
import ImgLogo from "../../../components/Home/Logo";
import BlueLeaf from "../../../assets/images/blueLeaf.svg";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import Carousel from "../../../components/Home/Carousel";

/*function showCampaignDetails(){
  console.log("show details");
}*/

export default function Home() {
  const campanhas = [
    {
      id: 0,
      title: "Campanha 1",
      picture_url: 1
    },
    {
      id: 1,
      title: "Campanha 2",
      picture_url: 2
    },
    {
      id: 2,
      title: "Campanha 3",
      picture_url: 3
    },
    {
      id: 3,
      title: "Campanha 4",
      picture_url: 4
    },
    {
      id: 4,
      title: "Campanha 5",
      picture_url: 5
    },
    {
      id: 5,
      title: "Campanha 6",
      picture_url: 6
    },
    {
      id: 6,
      title: "Campanha 7",
      picture_url: 7
    },
    {
      id: 7,
      title: "Campanha 8",
      picture_url: 8
    },
    {
      id: 8,
      title: "Campanha 9",
      picture_url: 9
    },
    {
      id: 9,
      title: "Campanha 10",
      picture_url: 10
    },
    {
      id: 10,
      title: "Campanha 11",
      picture_url: 11
    },
    {
      id: 11,
      title: "Campanha 12",
      picture_url: 12
    },
    {
      id: 12,
      title: "Campanha 13",
      picture_url: 13
    },
    {
      id: 13,
      title: "Campanha 14",
      picture_url: 14
    },
    {
      id: 14,
      title: "Campanha 15",
      picture_url: 15
    }
  ]
  const institutes = [
    {
      id: 0,
      name: "Instituição 1",
      picture_url: 1
    },
    {
      id: 1,
      name: "Instituição 2",
      picture_url: 2
    },
    {
      id: 2,
      name: "Instituição 3",
      picture_url: 3
    },
    {
      id: 3,
      name: "Instituição 4",
      picture_url: 4
    },
    {
      id: 4,
      name: "Instituição 5",
      picture_url: 5
    },
    {
      id: 5,
      name: "Instituição 6",
      picture_url: 6
    },
    {
      id: 6,
      name: "Instituição 7",
      picture_url: 7
    },
    {
      id: 7,
      name: "Instituição 8",
      picture_url: 8
    },
    {
      id: 8,
      name: "Instituição 9",
      picture_url: 9
    },
    {
      id: 9,
      name: "Instituição 10",
      picture_url: 10
    },
    {
      id: 10,
      name: "Instituição 11",
      picture_url: 11
    },
    {
      id: 11,
      name: "Instituição 12",
      picture_url: 12
    },
    {
      id: 12,
      name: "Instituição 13",
      picture_url: 13
    },
    {
      id: 13,
      name: "Instituição 14",
      picture_url: 14
    },
    {
      id: 14,
      name: "Instituição 15",
      picture_url: 15
    }
  ]
  return (
    <Box 
      backgroundColor="gray.200"
    >
      <Box
        as="header"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
        backgroundColor="bluish.200"
      >
      <div>
        <Flex
          maxW="1400px"
          paddingX={{ base: "35px", sm: "50px" }}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
          pb={2}
        >
          <HeadLogo height="5rem" width="7rem"/>
          <div />
          <Stack
            spacing={{ base: 2, sm: 10 }}
            direction={{ base: "column", sm: "row" }}
            marginRight={{ base: 10, sm: "none" }}
          >
            <Heading
              color="white"
              size="md"
              cursor="pointer"
              href="#campanhas"
              as={Link}
            >
              Campanhas
            </Heading>

            <Heading
              color="white"
              size="md"
              cursor="pointer"
              href="#instituicoes"
              as={Link}
            >
              Instituições
            </Heading>

            <Heading
              color="white"
              size="md"
              cursor="pointer"
              href="#sobre"
              as={Link}
            >
              Sobre
            </Heading>
          </Stack>

          <HStack spacing={5} margin={{ lg: "initial" }} pt={2}>
            <Button
              bgColor="white"
              color="bluish.400"
              borderRadius={10}
              p={3}
              pl={6}
              pr={6}
              as={RouterLink}
              to="/login"
              size="sm"        
              boxShadow="0px 6px 20px rgba(0, 0, 0, 0.3)"
            >
              Entrar
            </Button>
            <Button
              bgColor="white"
              color="bluish.400"
              borderRadius={10}
              p={3}
              as={RouterLink}
              to="/login"
              size="sm"        
              boxShadow="0px 6px 20px rgba(0, 0, 0, 0.3)"
            >
              Cadastrar
            </Button>
          </HStack>
        </Flex>
      </div>
      </Box> 
      <Flex
        maxW="1400px"
        paddingX={{ base: "30px", sm: "50px" }}
        paddingY={2}
        pb={10}
        justify="space-between"
        align="center"
        wrap="wrap"
        margin="0 auto"
      >
        <ImgLogo type='bluish' />
        <Heading color="bluish.200" size="2xl" textAlign="center">
          BEM-VINDO AO FAZ UM <br /> BEM!
          <br />
          <Box 
            as="button" 
            borderRadius={16} 
            bg="bluish.100" 
            color="white"
            mt={10}
            p={4}
            pl={10}
            pr={10}
            width="max-content"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
            _hover={{
              background: "bluish.200",
              transition: ".5s"
            }}
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
        backgroundColor="bluish.200"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <div>
          <h1 className="slider_title">CAMPANHAS EM ANDAMENTO</h1>
          <Carousel campanhas={campanhas}/>
        </div>
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
              alt="bluish icon start"
              transform="rotateY(180deg)"
              filter="brightness(180%)"
            />
            <Heading color="bluish.200" size="2xl" textAlign="center">
              INSTITUIÇÕES <br />PARTICIPANTES
            </Heading>
            <Image
              height="100px"
              objectFit="contain"
              src={BlueLeaf}
              alt="bluish icon end"
              filter="brightness(200%)"
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
        {institutes.map((institute: any = []) => (
          <div key={institute.id}>
            <div className="institute-card">
              <div className="institute-card-image">
                <Image src={`https://fazumbem.inf.ufsm.br/images/logos/${institute.picture_url}.png`}/>
              </div>
              <ul className="institute-icons">
                <li>
                  <a href="/">
                    <i>
                      <IconButton 
                        aria-label="info" 
                        icon={<InfoIcon />}  
                        _hover={{ 
                          bgColor: "bluish.400", 
                          transition: "0.2s"
                        }} 
                      />
                    </i>
                  </a>
                </li>
              </ul>
              <div className="institute-details">
                <h2>{ institute.name }</h2>
              </div>
            </div>
          </div>
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
          paddingX={{ base: "35px", sm: "55px" }}
          paddingY={2}
          justify="space-between"
          align="center"
          wrap="wrap"
          margin="0 auto"
        >
          <ImgLogo type='white' />
          <Heading color="white" size="2xl" mr={10} textAlign="center">
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