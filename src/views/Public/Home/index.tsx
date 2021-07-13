/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Flex, Heading, HStack, Grid } from "@chakra-ui/layout";
import { Image, Link, Text, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../../../components/Home/HeadLogo";
import ImgLogo from "../../../components/Home/Logo";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon, HamburgerIcon } from "@chakra-ui/icons";
import blueLogo from "../../../assets/images/logo.svg";
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
        <Heading color="bluish.100" size="2xl" textAlign="center">
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
        backgroundColor="bluish.100"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <h1 className="slider_title">CAMPANHAS EM ANDAMENTO</h1>
        <Carousel campanhas={campanhas} />
      </Box>
      <Box width="100%" p={2} pt={20} pb={20}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          margin={10}
          padding={10}
          fontSize={45}
        >
          <Box w="80%">
            <Text>
              Impulsionar uma plataforma virtual interativa que centralize
              necessidades de instituições e organizações sociais de Santa
              Maria. Faz um bem! propõe-se como uma platagorma virtual
              interativa, incentivadora e mediadora entre doadores e receptores
              de recursos.
            </Text>
          </Box>
          <Box w="100%">
            <Text
              color="bluish.100"
              fontSize={150}
              textAlign="center"
              fontWeight={500}
            >
              SOBRE
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box bg="bluish.100" width="100%" textAlign="center" pb={20}>
        <Text
          pt={20}
          ml="45%"
          style={{
            width: 0,
            height: 0,
            borderLeft: "5rem solid transparent",
            borderRight: "5rem solid transparent",
            borderTop: "5rem solid #E2E8F0",
          }}
        />
        <h1 className="slider_title">INSTITUIÇÕES PARTICIPANTES</h1>
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
                <div className="institute-details" title={institute.name}>
                  <h5>{truncateName(institute.name)}</h5>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
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
          </Box>
          <Heading size="1xl" mb={4} color="white">
            Contato
          </Heading>
          <Box as={Link} hreaf="/">
            <div style={{ marginBottom: "-28px" }}>
              <FaRegEnvelope />
            </div>
            <Text ml={6}>e_mail@mail.com</Text>
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
