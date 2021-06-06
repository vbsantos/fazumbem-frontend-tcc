import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import InputAddress from "../../../components/InputAddress";
import InputEmail from "../../../components/InputEmail";
import InputExternalLink from "../../../components/InputExternalLink";
import InputOrganizationTitle from "../../../components/InputOrganizationTitle";
import InputPassword from "../../../components/InputPassword";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import Logo from "../../../components/Logo";
import Container from "./Container";

export default function Register() {
  return (
    <Container>
      <Logo />

      <InputOrganizationTitle />
      <InputEmail />
      <InputPassword />
      <InputAddress />
      <InputPhone />
      <InputExternalLink />
      <InputProjectDescription />

      <VStack>
        <Button colorScheme="brand">Cadastrar</Button>
        <Link color="brand.300" fontSize="sm" as={RouterLink} to="/login">
          Já possui uma conta?
        </Link>
      </VStack>
    </Container>
  );
}
