import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Image, Link, Text, SimpleGrid, Tooltip } from "@chakra-ui/react";
import React from "react";
import blueLogo from "../../assets/images/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ReactElement } from "react";

function scrollToElement(element: string) {
  (document.getElementById(element) as HTMLInputElement).scrollIntoView();
}

export default function Footer(): ReactElement {

  return (
    <Box 
      backgroundColor="brownish.200" 
      width="100%" 
      color="brand.300" 
      p={2} 
      id="footer"
    >
      <SimpleGrid 
        minChildWidth="120px" 
        spacing={12} 
        mt={20} 
        ml={20} 
        mr={20}
      >
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
              <Text 
                as={Link}
                onClick={() => scrollToElement('institutes')} 
              >
                Instituições
              </Text>
            </li>
            <li>
              <Text
                as={Link}
                onClick={() => scrollToElement('about')} 
              >
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
          <Flex flex-direction="row">
            <Tooltip 
              hasArrow 
              label="Facebook"
              bg="bluish.200" 
              color="white"
              placement="top"
              borderRadius="8px"
              transition="0.2s"
            >
              <Box m={2} as={Link} href="/">
                <FaFacebook size={50} />
              </Box>
            </Tooltip>
            <Tooltip 
              hasArrow 
              label="Instagram"
              bg="bluish.200" 
              color="white"
              placement="top"
              borderRadius="8px"
              transition="0.2s"
            >
              <Box m={2} as={Link} href="/">
                <FaInstagram size={50} />
              </Box>
            </Tooltip>
            <Tooltip 
              hasArrow 
              label="Youtube"
              bg="bluish.200" 
              color="white"
              placement="top"
              borderRadius="8px"
              transition="0.2s"
            >
            <Box m={2} as={Link} href="/">
              <FaYoutube size={50} />
            </Box>
            </Tooltip>
            <Text
              height= "250px"
              borderLeft= "3px solid"
              marginLeft="auto"
              mt={-5}
            />
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
            onClick={() => window.scrollTo(0, 0)}
            cursor="pointer"
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
  );
}
