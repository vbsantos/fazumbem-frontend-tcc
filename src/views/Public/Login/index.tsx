import { Button } from "@chakra-ui/button";
import { Box, VStack } from "@chakra-ui/layout";
import {
  useToast,
  Text,
  Heading,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
  Link,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import InputEmail from "../../../components/InputEmail";
import InputPassword from "../../../components/InputPassword";
import Logo from "../../../components/Logo";
import { loginUser, useAuthDispatch } from "../../../context";
import Container from "./Container";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import { FaArrowLeft, FaArrowRight, FaEnvelopeOpenText } from "react-icons/fa";
import blueLogo from "../../../assets/images/logo.svg";
import { httpClient } from "../../../services/httpClient";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAuthDispatch();
  const toast = useToast();
  const history = useHistory();
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  function closeModal() {
    setForgotPassword(false);
    onClose();
  }
  const onSubmit = async (data: FormData) => {
    if (forgotPassword) {
      const payload = { email: data.email };
      console.log(payload.email);
      //abrir modal de aviso para olhar email
      console.log(
        `Em alguns instantes um email será enviado para ${payload.email} para a recuperação de senha`
      );
      setEmail(payload.email);
      try {
        await httpClient({
          method: "POST",
          url: `/user/resetpassword/${payload.email}`,
          data: payload,
        });
        onOpen();
        toast({
          title: "Email de recuperação enviado com sucesso!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } catch(e) {
        toast({
          title: "Erro ao enviar o email de recuperação",
          description: "Verifique seus dados e tente novamente",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      try {
        const payload = { username: data.email, password: data.password };

        const response = await loginUser(dispatch, payload);

        if (!response?.token) throw new Error("Login error!");

        history.push("/instituições");
      } catch {
        toast({
          title: "Erro no login!",
          description: "Verifique seus dados e tente novamente",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box bg="gray.200">
        {!forgotPassword ? (
          <>
            <Header />
            <Container>
              <Logo />
              {/* <Heading
                as="h5"
                size="md"
                p={1}
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
              >
                Insira suas informações de login
              </Heading> */}
              <InputEmail
                register={{
                  ...register("email", {
                    required: "Campo obrigatório",
                  }),
                }}
                error={errors.email}
              />

              <InputPassword
                register={{
                  ...register("password", {
                    required: "Campo obrigatório",
                    minLength: { value: 6, message: "Mínimo 6 caracteres" },
                  }),
                }}
                error={errors.password}
              />
              <HStack
                spacing="10px"
                m={5}
                p={0}
                _hover={{ color: "brand.200", textDecoration: "underline" }}
              >
                <Box>
                  <Text
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setForgotPassword(true)}
                  >
                    Esqueci minha senha
                  </Text>
                </Box>
                <Box>
                  <FaArrowRight />
                </Box>
              </HStack>

              <VStack>
                <Button
                  colorScheme="brand"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Entrar
                </Button>
              </VStack>
            </Container>
          </>
        ) : (
          <>
            <Header />
            <Container>
              <Logo />
              <Heading
                as="h5"
                p={1}
                size="md"
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
              >
                Solicitar nova senha
              </Heading>
              <InputEmail
                register={{
                  ...register("email", {
                    required: "Campo obrigatório",
                  }),
                }}
                error={errors.email}
              />
              <HStack
                spacing="10px"
                m={5}
                p={0}
                _hover={{ color: "brand.200", textDecoration: "underline" }}
              >
                <Box>
                  <FaArrowLeft />
                </Box>
                <Box>
                  <Text
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setForgotPassword(false)}
                  >
                    Voltar para o <b>login</b>
                  </Text>
                </Box>
              </HStack>
              <VStack>
                <Button
                  colorScheme="brand"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Solicitar
                </Button>
              </VStack>
            </Container>
          </>
        )}
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
            <Text>
              Em breve um email com as informações de recuperação de senha será
              enviado para o email informado ({email}).
            </Text>
            <Center mt={5}>
              <FaEnvelopeOpenText
                style={{ fontSize: "5rem" }}
              />
            </Center>
            <Text marginTop="30px">
              Lembre-se de conferir sua caixa de email.
            </Text>
          </ModalBody>
          <ModalFooter
            textAlign="center"
            display="block"
            padding="30px 0"
            mb={5}
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
              onClick={(e) => closeModal()}
              ml={5}
              _hover={{
                textDecoration: "none",
                background: "#F18C7E",
                transition: ".5s",
              }}
            >
              Retornar ao login
            </Heading>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </form>
  );
}
