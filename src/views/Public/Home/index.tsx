/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Button } from "@chakra-ui/button";
import "../../../css/instituicoes.css";
import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/layout";
import { Image, Link, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../../../components/Home/HeadLogo";
import ImgLogo from "../../../components/Home/Logo";
import BlueLeaf from "../../../assets/images/blueLeaf.svg";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import {
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Carousel from "../../../components/Home/Carousel";

/*function showCampaignDetails(){
  console.log("show details");
}*/

export default function Home() {
  const campanhas = [
    {
      id: 0,
      title: "Campanha 1",
      picture_url: 1,
    },
    {
      id: 1,
      title: "Campanha 2",
      picture_url: 2,
    },
    {
      id: 2,
      title: "Campanha 3",
      picture_url: 3,
    },
    {
      id: 3,
      title: "Campanha 4",
      picture_url: 4,
    },
    {
      id: 4,
      title: "Campanha 5",
      picture_url: 5,
    },
    {
      id: 5,
      title: "Campanha 6",
      picture_url: 6,
    },
    {
      id: 6,
      title: "Campanha 7",
      picture_url: 7,
    },
    {
      id: 7,
      title: "Campanha 8",
      picture_url: 8,
    },
    {
      id: 8,
      title: "Campanha 9",
      picture_url: 9,
    },
    {
      id: 9,
      title: "Campanha 10",
      picture_url: 10,
    },
    {
      id: 10,
      title: "Campanha 11",
      picture_url: 11,
    },
    {
      id: 11,
      title: "Campanha 12",
      picture_url: 12,
    },
    {
      id: 12,
      title: "Campanha 13",
      picture_url: 13,
    },
    {
      id: 13,
      title: "Campanha 14",
      picture_url: 14,
    },
    {
      id: 14,
      title: "Campanha 15",
      picture_url: 15,
    },
  ];
  const institutes = [
    {
      id: 0,
      name: "Instituição 1",
      picture_url: 1,
    },
    {
      id: 1,
      name: "Instituição 2",
      picture_url: 2,
    },
    {
      id: 2,
      name: "Instituição 3",
      picture_url: 3,
    },
    {
      id: 3,
      name: "Instituição 4",
      picture_url: 4,
    },
    {
      id: 4,
      name: "Instituição 5",
      picture_url: 5,
    },
    {
      id: 5,
      name: "Instituição 6",
      picture_url: 6,
    },
    {
      id: 6,
      name: "Instituição 7",
      picture_url: 7,
    },
    {
      id: 7,
      name: "Instituição 8",
      picture_url: 8,
    },
    {
      id: 8,
      name: "Instituição 9",
      picture_url: 9,
    },
    {
      id: 9,
      name: "Instituição 10",
      picture_url: 10,
    },
    {
      id: 10,
      name: "Instituição 11",
      picture_url: 11,
    },
    {
      id: 11,
      name: "Instituição 12",
      picture_url: 12,
    },
    {
      id: 12,
      name: "Instituição 13",
      picture_url: 13,
    },
    {
      id: 13,
      name: "Instituição 14",
      picture_url: 14,
    },
    {
      id: 14,
      name: "Instituição 15",
      picture_url: 15,
    },
  ];
  return (
    <Box backgroundColor="gray.200">
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
            <HeadLogo height="5rem" width="7rem" />
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
                to="/register"
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
        <ImgLogo type="bluish" />
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
              transition: ".5s",
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
        <h1 className="slider_title">CAMPANHAS EM ANDAMENTO</h1>
        <Carousel campanhas={campanhas} />
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
              INSTITUIÇÕES <br />
              PARTICIPANTES
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
                <Image
                  src={`https://fazumbem.inf.ufsm.br/images/logos/${institute.picture_url}.png`}
                />
              </div>
              <ul className="institute-icons">
                <li>
                  <a href="/">
                    <i>
                      <IconButton
                        aria-label="info"
                        borderRadius="10px"
                        transform="translateY(-3px)"
                        bgColor="white"
                        icon={<InfoIcon />}
                        _hover={{
                          bgColor: "bluish.400",
                          borderRadius: "10px",
                          transform: "translateY(-3px)",
                        }}
                      />
                    </i>
                  </a>
                </li>
              </ul>
              <div className="institute-details">
                <h5>{institute.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </SimpleGrid>
      <Box
        backgroundColor="brand.500"
        width="100%"
        color="gray.300"
        mt={20}
        p={2}
      >
        <SimpleGrid minChildWidth="120px" spacing={12} mt={20} ml={20} mr={20}>
          <Box>
            <Heading size="1xl" mb={4} color="white">
              Mapa do site
            </Heading>
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <Text as={Link} href="/">
                  Início
                </Text>
              </li>
              <li>
                <Text as={Link} href="/">
                  Login/Cadastro
                </Text>
              </li>
              <li>
                <Text as={Link} href="/">
                  Campanhas
                </Text>
              </li>
              <li>
                <Text as={Link} href="/">
                  Instituições
                </Text>
              </li>
              <li>
                <Text as={Link} href="/">
                  Sobre
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Heading size="1xl" mb={4} color="white">
              Contato
            </Heading>
            <Box as={Link} hreaf="/">
              <div style={{ marginBottom: "-28px" }}>
                <FaRegEnvelope />
              </div>
              <Text ml={6}>e_mail@mail.com</Text>
            </Box>
            <Box mt={2} textAlign="justify">
              <div style={{ marginBottom: "-28px" }}>
                <FaMapMarkerAlt />
              </div>
              <Text ml={6}>
                Av. Roraima nº 1000 Cidade Universitária Bairro - Camobi, Santa
                Maria - RS, 97105-900
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading size="1xl" mb={2} color="white">
              Siga-nos
            </Heading>
            <Flex flax-direction="row">
              <Box m={2} as={Link} href="/">
                <FaFacebook size={35} />
              </Box>
              <Box m={2} as={Link} href="/">
                <FaInstagram size={35} />
              </Box>
              <Box m={2} as={Link} href="/">
                <FaYoutube size={35} />
              </Box>
            </Flex>
          </Box>
          <Box>
            <ImgLogo type="white" />
          </Box>
        </SimpleGrid>
        <Box backgroundColor="rgba(255,255,255, 0.1)">
          <Text fontSize="sm" textAlign="center">
            desenvolvido por{" "}
            <Text as={Link} href="" fontWeight={500}>
              Rafael de Lima
            </Text>
            ,{" "}
            <Text as={Link} href="" fontWeight={500}>
              Raíssa Arantes
            </Text>
            ,{" "}
            <Text as={Link} href="" fontWeight={500}>
              Vitória Pizzuti
            </Text>
            ,{" "}
            <Text as={Link} href="" fontWeight={500}>
              Yuri Becker
            </Text>{" "}
            e{" "}
            <Text as={Link} href="" fontWeight={500}>
              Tayna ??
            </Text>
            .
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
