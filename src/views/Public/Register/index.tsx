/* eslint-disable no-useless-escape */
import { getStates } from "@brazilian-utils/brazilian-utils";
import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import { Input, Select, SimpleGrid, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useHistory } from "react-router-dom";
import InputCEP from "../../../components/InputCEP";
import InputCPF from "../../../components/InputCPF";
import InputEmail from "../../../components/InputEmail";
import InputError from "../../../components/InputError";
import InputPassword from "../../../components/InputPassword";
import InputPhone from "../../../components/InputPhone";
import InputText from "../../../components/InputText";
import Logo from "../../../components/Logo";
import { httpClient } from "../../../services/httpClient";
import Container from "./Container";

type FormData = {
  organizationTitle: string;
  username: string;
  name: string;
  password: string;
  street: string;
  number: string;
  complement: string;
  cep: string;
  city: string;
  state: string;
  telephone: string;
  externalLink: string;
  description: string;
  cpf: string;
  cnpj: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const toast = useToast();
  const history = useHistory();

  const onSubmit = async ({
    cep,
    city,
    complement,
    number,
    state,
    street,
    ...others
  }: FormData) => {
    try {
      const payload = {
        ...others,
        address: {
          cep,
          city,
          complement,
          number,
          state,
          street,
        },
      };

      await httpClient({
        method: "POST",
        url: "/user/register",
        data: payload,
      });

      toast({
        title: "Cadastrado com sucesso!",
        description: "Acesse o login e entre na sua conta.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });

      history.push("/login");
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

  const registerType = "USER";

  useEffect(() => {
    reset();
  }, [reset]);

  function getFields(type: typeof registerType) {
    return (
      <>
        <InputCPF name="cpf" control={control} error={errors.cpf} />

        <InputText
          name="name"
          control={control}
          error={errors.name}
          placeholder="Nome"
        />

        <InputEmail
          register={{
            ...register("username", {
              required: "Campo obrigatório",
            }),
          }}
          error={errors.username}
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

        <InputPhone
          name="telephone"
          control={control}
          error={errors.telephone}
        />

        <InputCEP name="cep" control={control} error={errors.cep} />

        <div>
          <Input
            placeholder="Rua"
            width="full"
            isInvalid={!!errors.street}
            {...register("street", {
              required: "Campo obrigatório",
              minLength: { value: 4, message: "Mínimo 4 caracteres" },
            })}
          />

          <InputError error={errors.street} />
        </div>

        <div>
          <Input
            placeholder="Número"
            width="full"
            isInvalid={!!errors.number}
            {...register("number", {
              required: "Campo obrigatório",
            })}
            type="number"
          />
          <InputError error={errors.number} />
        </div>

        <div>
          <Input
            placeholder="Complemento"
            width="full"
            isInvalid={!!errors.complement}
            {...register("complement", {
              required: "Campo obrigatório",
            })}
          />
          <InputError error={errors.complement} />
        </div>

        <div>
          <Select
            placeholder="Estado"
            isInvalid={!!errors.state}
            {...register("state", {
              required: "Campo obrigatório",
            })}
          >
            {getStates().map((state) => (
              <option value={state.code}>{state.name}</option>
            ))}
          </Select>
          <InputError error={errors.state} />
        </div>

        <div>
          <Input
            placeholder="Cidade"
            width="full"
            isInvalid={!!errors.city}
            {...register("city", {
              required: "Campo obrigatório",
            })}
          />
          <InputError error={errors.city} />
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Logo />

        {/* <RegisterType checked={isUser} setChecked={setIsUser} /> */}

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} marginY={10}>
          {getFields(registerType)}
        </SimpleGrid>

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
