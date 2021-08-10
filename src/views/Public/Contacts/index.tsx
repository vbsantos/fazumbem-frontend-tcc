/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { 
  Text, 
  Center, 
  Tooltip,
  Link,
  Divider
} from "@chakra-ui/react";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";

export default function Home() {
  return (
    <Box backgroundColor="gray.200" >
      <Header />
      <Heading
        color="bluish.100"
        size="2xl"
        textAlign="center"
        mt="5rem"
        mb="2rem"
      >
        CONTATOS
      </Heading>
      <Text color="bluish.100" fontSize="1.4rem" m={10} textAlign="center">
        Entre em contato com a equipe organizadora e idealizadora do projeto
        através do e-mail de contato, telefone ou presencialmente. Não deixe
        de seguir o projeto nas redes sociais para se manter atualizado!
      </Text>
      <Box 
        p={1} 
        pb={20} 
        m={10}
        id="about"
      >
        <Box>
          <Box fontSize="1.2rem" color="bluish.100">
            <div style={{ marginBottom: "-30px" }}>
              <FaRegEnvelope />
            </div>
            <Text ml={6} fontWeight={500}>E-mail</Text><Text>e_mail@mail.com</Text>
            <br />
            <div style={{ marginBottom: "-30px" }}>
              <FaMapMarkerAlt />
            </div>
            <Text ml={6} fontWeight={500}>Endereço</Text><Text>
              Av. Roraima nº 1000 Cidade Universitária Bairro - Camobi, Santa
              Maria - RS, 97105-900
            </Text>
            <br />
            <div style={{ marginBottom: "-30px" }}>
              <FaPhone />
            </div>
            <Text ml={6} fontWeight={500}>Telefone</Text><Text>
              (55) XXXXX-XXXX
            </Text>
          </Box>
          <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
          <Box textAlign="center">
            <Heading size="2xl" mb={2} color="brand.300">
              REDES SOCIAIS
            </Heading>
            <Text color="bluish.100" fontSize="1.4rem" m={10} textAlign="center">
              Confira abaixo as redes sociais do projeto. Não deixe
              de seguir nas redes sociais para se manter atualizado!
            </Text>
            <Center>
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
                  <Box m={2} as={Link} href="/" color="bluish.100">
                    <FaFacebook  size={50} />
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
                  <Box m={2} as={Link} href="/" color="bluish.100">
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
                  <Box m={2} as={Link} href="/" color="bluish.100">
                    <FaYoutube size={50} />
                  </Box>
                </Tooltip>
              </Flex>
            </Center>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
