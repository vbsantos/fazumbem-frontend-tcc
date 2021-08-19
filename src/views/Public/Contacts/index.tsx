/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Text,
  Input,
  Textarea,
  useMediaQuery
} from "@chakra-ui/react";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  const [isGreater] = useMediaQuery("(min-width: 1200px)")
  return (
    <Box backgroundColor="gray.200" >
      <Header />
      <Box
        padding={!isDesktop ? "50px 5px" : "50px"}
        textAlign="center"
      >
        <Heading>
          <Text
            display="inline"
            fontSize={isMobile ? "35px" : "55px"}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
          >
            &nbsp;Contato&nbsp;
          </Text>
        </Heading>
        <Box marginTop="50px;">
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
            padding={isGreater ? "0 24%" : "0 5px"}
          >
            Possui dúvidas, sugestões ou mensagens para compartilhar?
            Abaixo você pode entrar em contato com a plataforma Faz um Bem!
          </Text>
        </Box>
        <Box
          marginTop="50px;"
          padding={isGreater ? "0 25%" : "0 5px"}

        >
          <Box
            backgroundColor="white"
            borderRadius="50px"
            color="bluish.100"
            padding="25px 50px"
            boxShadow="2px 4px 9px rgba(0, 0, 0, 0.25)"
          >
            <form>
              <Text fontWeight="700" fontSize={isMobile ? "20px" : "22px"}>
                Email
              </Text>
              <Input
                focusBorderColor="bluish.100"
                backgroundColor="#F7F6F3"
                borderRadius="50px"
                textAlign="center"
                border="none"
                margin="15px 0 50px"
                type="email"
              />
              <Text fontWeight="700" fontSize={isMobile ? "20px" : "22px"}>
                Seu nome
              </Text>
              <Input
                focusBorderColor="bluish.100"
                backgroundColor="#F7F6F3"
                borderRadius="50px"
                textAlign="center"
                border="none"
                margin="15px 0 50px"
                type="text"
              />
              <Text fontWeight="700" fontSize={isMobile ? "20px" : "22px"}>
                Assunto
              </Text>
              <Input
                focusBorderColor="bluish.100"
                backgroundColor="#F7F6F3"
                borderRadius="50px"
                textAlign="center"
                border="none"
                margin="15px 0 50px"
                type="text"
              />
              <Text fontWeight="700" fontSize={isMobile ? "20px" : "22px"}>
                Mensagem
              </Text>
              <Textarea
                focusBorderColor="bluish.100"
                backgroundColor="#F7F6F3"
                borderRadius="25px"
                minHeight="200px"
                display="block"
                border="none"
                margin="15px 0 50px"
                resize="none"
              />
              <Box
                borderRadius="50px"
                bg="#ED6A5A"
                padding="7px 46px"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                as="button"
                type="submit"
                _hover={{
                  textDecoration: "none",
                  background: "#F18C7E",
                  transition: ".5s",
                }}
              >
                <Text
                  fontSize={isMobile ? "22px" : "24px"}
                  color="white"
                  fontWeight="500"
                  textAlign="center"
                >
                  Enviar
                </Text>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
