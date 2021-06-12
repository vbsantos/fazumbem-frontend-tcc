import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import InputEmail from "../../../components/InputEmail";
import InputPassword from "../../../components/InputPassword";
import Logo from "../../../components/Logo";
import Container from "./Container";

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

  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 3000));
      console.log(data);
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Logo />

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

        <VStack>
          <Button colorScheme="brand" type="submit" isLoading={isSubmitting}>
            Entrar
          </Button>
          <Link as={RouterLink} to="/register" color="brand.300" fontSize="sm">
            Não possui uma conta?
          </Link>
        </VStack>
      </Container>
    </form>
  );
}
