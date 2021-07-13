/* eslint-disable no-useless-escape */
import { Button } from "@chakra-ui/button";
import { Link, VStack } from "@chakra-ui/layout";
import { Input, Select, SimpleGrid, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useHistory } from "react-router-dom";
import InputCNPJ from "../../../components/InputCNPJ";
import InputCPF from "../../../components/InputCPF";
import InputEmail from "../../../components/InputEmail";
import InputError from "../../../components/InputError";
import InputExternalLink from "../../../components/InputExternalLink";
import InputOrganizationTitle from "../../../components/InputOrganizationTitle";
import InputPassword from "../../../components/InputPassword";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import Logo from "../../../components/Logo";
import { httpClient } from "../../../services/httpClient";
import Container from "./Container";
import RegisterType from "./RegisterType";
import { getStates } from "@brazilian-utils/brazilian-utils";
import InputCEP from "../../../components/InputCEP";

type FormData = {
  organizationTitle: string;
  email: string;
  password: string;
  street: string;
  number: string;
  complement: string;
  cep: string;
  city: string;
  state: string;
  phone: string;
  externalLink: string;
  description: string;
  cpf: string;
  cnpj: string;
  cpfFormated: string;
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

  const onSubmit = async (data: FormData) => {
    try {
      const payload = { ...data, username: data.email };
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

  const [isUser, setIsUser] = useState(false);
  const registerType = isUser ? "USER" : "INSTITUICAO";

  useEffect(() => {
    reset();
  }, [isUser, reset]);

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
          <InputCNPJ name="cnpj" control={control} error={errors.cnpj} />
        ) : (
          <InputCPF name="cpf" control={control} error={errors.cpf} />
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

        <InputPhone name="phone" control={control} error={errors.phone} />

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

        <RegisterType checked={isUser} setChecked={setIsUser} />

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
