/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Text,
  Link,
  Image,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import blueLogo from "../../../assets/images/logo.svg";

export default function Home() {
  const {handleSubmit} = useForm<FormData>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  const [isGreater] = useMediaQuery("(min-width: 1200px)")
  const history = useHistory();

  const onSubmit = async (data: FormData) => {
    onOpen();
  };

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
            <form  onSubmit={handleSubmit(onSubmit)}>
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
      <Modal isOpen={isOpen} onClose={onClose} onEsc={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent background="white" textAlign="center">
          <ModalHeader>
            <Image
              height="150px"
              margin="0 auto"
              objectFit="contain"
              src={blueLogo}
              alt="brand logo"
            />
          </ModalHeader>
          <ModalCloseButton color="#ED6A5A" />
          <ModalBody fontSize="20px" padding="10px 90px" color="bluish.100">
            <Text><strong>Agradecemos sua mensagem!</strong></Text>
            <Text marginTop="30px">Retornaremos seu contato o mais rápido possível.</Text>
          </ModalBody>
          <ModalFooter
            textAlign="center"
            display="block"
            padding="30px 0"
          >
            <Heading
              color="white"
              fontWeight="none"
              fontSize="18px"
              fontFamily="Comfortaa"
              backgroundColor="#ED6A5A"
              padding="10px 32px"
              borderRadius="50px"
              boxShadow="0px 4px 4px 0px #00000040"
              size="md"
              cursor="pointer"
              as={Link}
              onClick={() => history.push("/")}
            >
              Voltar para a página inicial
            </Heading>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Box>
  );
}
