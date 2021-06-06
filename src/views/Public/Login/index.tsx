import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import InputEmail from "../../../components/InputEmail";
import PasswordInput from "../../../components/InputPassword";
import Logo from "../../../components/Logo";
import Container from "./Container";

export default function Login() {
  return (
    <Container>
      <Logo />

      <InputEmail />
      <PasswordInput />

      <VStack>
        <Button colorScheme="brand">Entrar</Button>
        <Link as={RouterLink} to="/register" color="brand.300" fontSize="sm">
          Não possui uma conta?
        </Link>
      </VStack>
    </Container>
  );
}
