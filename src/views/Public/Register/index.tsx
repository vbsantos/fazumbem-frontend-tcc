/* eslint-disable no-useless-escape */
import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import InputAddress from "../../../components/InputAddress";
import InputCNPJ from "../../../components/InputCNPJ";
import InputCPF from "../../../components/InputCPF";
import InputEmail from "../../../components/InputEmail";
import InputExternalLink from "../../../components/InputExternalLink";
import InputOrganizationTitle from "../../../components/InputOrganizationTitle";
import InputPassword from "../../../components/InputPassword";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import Logo from "../../../components/Logo";
import Container from "./Container";
import RegisterType from "./RegisterType";

type FormData = {
  organizationTitle: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  externalLink: string;
  description: string;
  cpf: string;
  cnpj: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 3000));
      console.log(data);

      toast({
        title: "Cadastrado com sucesso!",
        description: "Acesse o login e entre na sua conta.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch {
      toast({
        title: "Erro no cadastro!",
        description: "Verifique seus dados e tente novamente",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const [isCurador, setIsCurador] = useState(false);
  const registerType = isCurador ? "CURADOR" : "INSTITUICAO";

  useEffect(() => {
    reset();
  }, [isCurador, reset]);

  function getFields(type: typeof registerType) {
    const isInstitution = type === "INSTITUICAO";

    return (
      <>
        {isInstitution && (
          <InputOrganizationTitle
            register={{
              ...register("organizationTitle", {
                required: "Campo obrigatório",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
              }),
            }}
            error={errors.organizationTitle}
          />
        )}

        {isInstitution ? (
          <InputCNPJ
            register={{
              ...register("cnpj", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
                  message: "Padrão XX.XXX.XXX/0001-XX",
                },
              }),
            }}
            error={errors.cnpj}
          />
        ) : (
          <InputCPF
            register={{
              ...register("cpf", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                  message: "Padrão XXX.XXX.XXX-XX",
                },
              }),
            }}
            error={errors.cpf}
          />
        )}

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
        {isInstitution && (
          <InputAddress
            register={{
              ...register("address", {
                required: "Campo obrigatório",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
              }),
            }}
            error={errors.address}
          />
        )}

        <InputPhone
          register={{
            ...register("phone", {
              required: "Campo obrigatório",
              pattern: {
                value: /\(\d{2}\)\s\d{4,5}\-\d{4}/g,
                message: "(XX) XXXXX-XXXX",
              },
            }),
          }}
          error={errors.phone}
        />
        {isInstitution && (
          <InputExternalLink
            register={{
              ...register("externalLink", {
                pattern: {
                  value:
                    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                  message: "Digite uma URL válida",
                },
              }),
            }}
            error={errors.externalLink}
          />
        )}

        {isInstitution && (
          <InputProjectDescription
            register={{
              ...register("description", {
                required: "Campo obrigatório",
              }),
            }}
            error={errors.description}
          />
        )}
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Logo />

        <RegisterType checked={isCurador} setChecked={setIsCurador} />

        {getFields(registerType)}

        <VStack>
          <Button type="submit" colorScheme="brand" isLoading={isSubmitting}>
            Cadastrar
          </Button>
          <Link color="brand.300" fontSize="sm" as={RouterLink} to="/login">
            Já possui uma conta?
          </Link>
        </VStack>
      </Container>
    </form>
  );
}
