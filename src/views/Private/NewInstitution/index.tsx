import { Box, HStack } from "@chakra-ui/layout";
import {
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useLocation } from "react-router-dom";
import InputCNPJ from "../../../components/InputCNPJ";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import InputText from "../../../components/InputText";
import "../../../css/instituicoes.css";
import { httpClient } from "../../../services/httpClient";
import Footer from "../../../components/Private/Footer";

const NewInstituition = () => {
  let { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [institutionToEdit, setInstitutionToEdit] = useState<any>();
  const toast = useToast();
  debugger;
  const onlyView = useLocation().search === "?viewInfo";

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues: institutionToEdit });

  useEffect(() => {
    if (id) {
      setIsLoading(true);

      httpClient<any>({
        method: "GET",
        url: "/user",
      })
        .then((req) => {
          const inst = req?.data?.find((item) => item.idUser === Number(id));

          debugger;

          setInstitutionToEdit(inst);

          reset(inst);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, reset]);

  const onSubmit = async (data: any) => {
    try {
      if (institutionToEdit) {
        await httpClient({
          method: "PUT",
          url: "/user",
          data: { ...data },
        });
      } else {
        await httpClient({
          method: "POST",
          url: "/user/register",
          data: { ...data },
        });
      }

      toast({
        title: "Cadastrado com sucesso!",
        description: "Acesse o página Instituições no menu lateral",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Houve um erro!",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(e);
    }
  };

  if (isLoading) {
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner colorScheme="brand" size="xl" />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box backgroundColor="gray.100" m={0} p={0}>
        <Box
          backgroundColor="#ED6A5A"
          width="100%"
          color="brand.300"
          p={2}
        ></Box>
        <Box pt={10} textAlign="center">
          <Text
            fontSize="2.5rem"
            textAlign="center"
            fontWeight={500}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
            display="inline"
          >
            &nbsp;
            {institutionToEdit ? institutionToEdit.name : "Nova Instituição"}
            &nbsp;
          </Text>
        </Box>

        <Box m={20} mt={0} pb={10} color="bluish.100">
          <Text
            color="bluish.100"
            fontSize="1.8rem"
            textAlign="left"
            pb={5}
            fontFamily="Comfortaa"
          >
            Informações básicas
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl id="name" isRequired>
              <FormLabel>Nome</FormLabel>
              <InputText
                name="name"
                placeholder="Digite seu nome"
                control={control}
                error={errors.name}
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Email</FormLabel>
              <InputText
                name="username"
                placeholder="Digite seu email"
                control={control}
                error={errors.username}
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>
          <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
          <Text
            color="bluish.100"
            fontSize="1.8rem"
            textAlign="left"
            pb={5}
            fontFamily="Comfortaa"
          >
            Endereço
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2} pb={5}>
            <FormControl isRequired id="cep">
              <FormLabel>CEP</FormLabel>
              <InputText
                name="address.cep"
                control={control}
                error={errors.cep}
                placeholder="90420041"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl isRequired id="city">
              <FormLabel>Cidade</FormLabel>
              <InputText
                name="address.city"
                control={control}
                error={errors.city}
                placeholder="Santa Maria"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl isRequired id="district">
              <FormLabel>Bairro</FormLabel>
              <InputText
                name="address.district"
                control={control}
                error={errors.city}
                placeholder="Camobi"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl isRequired id="state">
              <FormLabel>Estado</FormLabel>
              <InputText
                name="address.state"
                control={control}
                error={errors.state}
                placeholder="Rio Grande do Sul"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2} pb={5}>
            <FormControl id="logradouro">
              <FormLabel>Logradouro</FormLabel>
              <InputText
                name="address.street"
                control={control}
                error={errors.street}
                placeholder="Jardim Guaíra"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="number">
              <FormLabel>Número</FormLabel>
              <InputText
                name="address.number"
                control={control}
                error={errors.number}
                placeholder="1373"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="complemento">
              <FormLabel>Complemento</FormLabel>{" "}
              <InputText
                name="address.complement"
                control={control}
                error={errors.complement}
                placeholder="apto xxx"
                background="white"
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>
          <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
          <Text
            color="bluish.100"
            fontSize="1.8rem"
            textAlign="left"
            pb={5}
            fontFamily="Comfortaa"
          >
            Informações complementares
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl id="identifier">
              <FormLabel>CNPJ</FormLabel>
              <InputCNPJ
                name="identifier"
                control={control}
                error={errors.cnpj}
                isReadOnly={onlyView}
              />
            </FormControl>

            <FormControl isRequired id="phone">
              <FormLabel>Telefone</FormLabel>
              <InputPhone
                name="telephone"
                control={control}
                error={errors.phone}
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl id="url" mt="4">
              <FormLabel>Link do site</FormLabel>

              <InputText
                name="url"
                control={control}
                error={errors.complement}
                placeholder="www.seu_site.com.br"
                required={false}
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="facebook" mt="4">
              <FormLabel>Link do Facebook</FormLabel>

              <InputText
                name="facebook"
                control={control}
                error={errors.complement}
                placeholder="www.facebook.com/sua_pagina"
                required={false}
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="instagram" mt="4">
              <FormLabel>Link do Instagram</FormLabel>

              <InputText
                name="instagram"
                control={control}
                error={errors.complement}
                placeholder="www.instagram.com/sua_pagina"
                required={false}
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>

          <FormControl mt="4" id="openHours" isRequired>
            <FormLabel>Horário de funcionamento</FormLabel>

            <InputProjectDescription
              register={{
                ...register("openHours", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.openHours}
              isReadOnly={onlyView}
            />
          </FormControl>

          <FormControl mt="4" id="description" isRequired>
            <FormLabel>Descrição da instituição</FormLabel>

            <InputProjectDescription
              register={{
                ...register("description", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.description}
              isReadOnly={onlyView}
            />
          </FormControl>

          <FormControl mt="4" id="bankAccount" isRequired>
            <FormLabel>Informações para doação</FormLabel>

            <InputProjectDescription
              register={{
                ...register("bankAccount", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.bankAccount}
              isReadOnly={onlyView}
            />
          </FormControl>
        </Box>

        {!onlyView && (
          <Center pb={10}>
            <Button
              colorScheme="blue"
              background="#ED6A5A"
              color="white"
              type="submit"
              borderRadius="50px"
              padding="15px 20px 15px"
              boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
              _hover={{
                textDecoration: "none",
                background: "#F18C7E",
                transition: ".5s",
              }}
            >
              Salvar alterações
            </Button>
          </Center>
        )}

        <Footer />
      </Box>
    </form>
  );
};

export default NewInstituition;
