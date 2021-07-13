/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { HamburgerIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import { IconButton, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLandmark,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import blueLogo from "../../../assets/images/logo.svg";
import Carousel from "../../../components/Home/Carousel";
import HeadLogo from "../../../components/Home/HeadLogo";
import "../../../css/instituicoes.css";

/*function showCampaignDetails(){
  console.log("show details");
}*/

function truncateName(name: String) {
  if (name.length > 12) {
    return name.substr(0, 12);
  }
}

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
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
        backgroundColor="bluish.100"
      >
        <div>
          <Flex
            maxW="1400px"
            padding={0}
            justify="space-between"
            align="center"
            wrap="wrap"
            margin="0 auto"
          >
            <Heading
              color="white"
              fontWeight="none"
              size="md"
              cursor="pointer"
              onClick={(event) => setShowMenu(!showMenu)}
              title={!showMenu ? "Exibir menu" : "Ocultar menu"}
            >
              <HamburgerIcon marginRight={3} marginBottom={1} />
              Menu
            </Heading>
            <HeadLogo height="7rem" width="7rem" />
            <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
              <Heading
                color="white"
                fontWeight="none"
                size="md"
                cursor="pointer"
                as={RouterLink}
                to="/login"
              >
                Login
              </Heading>
              <Heading
                color="white"
                fontWeight="none"
                size="md"
                cursor="pointer"
                as={RouterLink}
                to="/register"
              >
                Cadastro
              </Heading>
            </HStack>
          </Flex>
        </div>
      </Box>
      {showMenu ? (
        <Box
          as="header"
          boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
          backgroundColor="brownish.200"
          id="menu"
        >
          <Flex
            maxW="1400px"
            paddingX={{ base: "35px", sm: "50px" }}
            justify="space-between"
            align="center"
            wrap="wrap"
            margin="0 auto"
            p="0.7rem"
          >
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="/campaigns"
              as={Link}
            >
              Campanhas
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="#instituicoes"
              as={Link}
            >
              Instituições
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="#sobre"
              as={Link}
            >
              Sobre
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="#sobre"
              as={Link}
            >
              Contatos
            </Heading>
          </Flex>
        </Box>
      ) : (
        ""
      )}
      <Heading
        color="bluish.100"
        size="2xl"
        textAlign="center"
        mt="5rem"
        mb="5rem"
      >
        CAMPANHAS EM ANDAMENTO
      </Heading>
      <SimpleGrid
        minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
        maxW="1600px"
        margin="0 auto"
      >
        {campanhas.map((campanha: any = []) => (
          <div className="all-card-wrapper" key={campanha.id}>
            <div className="all-card">
              <div className="all-card-image">
                <Image
                  src={`https://fazumbem.inf.ufsm.br/images/entidades/${campanha.picture_url}.png`}
                />
              </div>
              <ul className="all-icons">
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
                <li>
                  <a href="/">
                    <i>
                      <IconButton
                        aria-label="info"
                        borderRadius="10px"
                        transform="translateY(-3px)"
                        bgColor="white"
                        icon={<FaLandmark />}
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
              <div className="all-details">
                <h2>{campanha.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </SimpleGrid>
      <Box
        backgroundColor="bluish.100"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <h1 className="slider_title">CAMPANHAS PASSADAS</h1>
        <Carousel campanhas={campanhas} />
      </Box>
      <Box backgroundColor="brownish.200" width="100%" color="brand.300" p={2}>
        <SimpleGrid minChildWidth="120px" spacing={12} mt={20} ml={20} mr={20}>
          <Box>
            <Heading size="1xl" mb={4} color="brand.300">
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
                <Text as={Link} href="/login">
                  Login
                </Text>
              </li>
              <li>
                <Text as={Link} href="/register">
                  Cadastro
                </Text>
              </li>
              <li>
                <Text as={Link} href="/campaigns">
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
            <Heading size="1xl" mb={4} color="brand.300">
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
            <Heading size="1xl" mb={2} color="brand.300">
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
            <Image
              boxSize="450px"
              height="15rem"
              objectFit="contain"
              mb={20}
              mt={-10}
              src={blueLogo}
              alt="brand logo"
            />
          </Box>
        </SimpleGrid>
        <Box backgroundColor="rgba(255,255,255, 0.3)">
          <Text fontSize="sm" textAlign="center">
            Desenvolvido por{" "}
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
