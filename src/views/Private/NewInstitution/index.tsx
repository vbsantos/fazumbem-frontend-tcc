import { Box, HStack } from "@chakra-ui/layout";
import {
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputCNPJ from "../../../components/InputCNPJ";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import InputText from "../../../components/InputText";
import "../../../css/instituicoes.css";
import { httpClient } from "../../../services/httpClient";

const NewInstituition = () => {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await httpClient<any>({
        method: "POST",
        url: "/institution",
        data: { ...data },
      });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box backgroundColor="gray.100" m={0} p={0}>
        <Box
          backgroundColor="brownish.200"
          width="100%"
          color="brand.300"
          p={2}
        ></Box>
        <Box m={0}>
          <Text
            color="bluish.100"
            fontSize="3rem"
            textAlign="center"
            fontWeight={500}
            p={10}
          >
            Nova Instituição
          </Text>
        </Box>

        <Box m={20} mt={0} pb={10} color="bluish.100">
          <Text color="bluish.100" fontSize="1.8rem" textAlign="left" pb={5}>
            Informações básicas
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl
              id="name"
              fontSize={isMobile ? "1rem" : "2rem"}
              isRequired
            >
              <FormLabel>Nome</FormLabel>
              <InputText
                name="name"
                control={control}
                error={errors.name}
                background="white"
              />
            </FormControl>
            <FormControl
              id="email"
              fontSize={isMobile ? "1rem" : "2rem"}
              isRequired
            >
              <FormLabel>Email</FormLabel>
              <InputText
                name="email"
                control={control}
                error={errors.username}
                background="white"
              />
            </FormControl>
          </HStack>
          <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
          <Text color="bluish.100" fontSize="1.8rem" textAlign="left" pb={5}>
            Endereço
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2} pb={5}>
            <FormControl
              isRequired
              id="cep"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>CEP</FormLabel>
              <InputText
                name="address.cep"
                control={control}
                error={errors.cep}
                placeholder="90420041"
                background="white"
              />
            </FormControl>
            <FormControl
              isRequired
              id="city"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>Cidade</FormLabel>
              <InputText
                name="address.city"
                control={control}
                error={errors.city}
                placeholder="Porto alegre"
                background="white"
              />
            </FormControl>
            <FormControl
              isRequired
              id="state"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>Estado</FormLabel>
              <InputText
                name="address.state"
                control={control}
                error={errors.state}
                placeholder="Rio Grande do Sul"
                background="white"
              />
            </FormControl>
          </HStack>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2} pb={5}>
            <FormControl id="logradouro" fontSize={isMobile ? "1rem" : "2rem"}>
              <FormLabel>Logradouro</FormLabel>
              <InputText
                name="address.street"
                control={control}
                error={errors.street}
                placeholder="Jardim Guaíra"
                background="white"
              />
            </FormControl>
            <FormControl id="number" fontSize={isMobile ? "1rem" : "2rem"}>
              <FormLabel>Número</FormLabel>
              <InputText
                name="address.number"
                control={control}
                error={errors.number}
                placeholder="1373"
                background="white"
              />
            </FormControl>
            <FormControl id="complemento" fontSize={isMobile ? "1rem" : "2rem"}>
              <FormLabel>Complemento</FormLabel>{" "}
              <InputText
                name="address.complement"
                control={control}
                error={errors.complement}
                placeholder="apto xxx"
                background="white"
              />
            </FormControl>
          </HStack>
          <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
          <Text color="bluish.100" fontSize="1.8rem" textAlign="left" pb={5}>
            Informações complementares
          </Text>
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl
              isRequired
              id="cnpj"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>CNPJ</FormLabel>
              <InputCNPJ name="cnpj" control={control} error={errors.cnpj} />
            </FormControl>

            <FormControl
              isRequired
              id="phone"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>Telefone</FormLabel>
              <InputPhone
                name="telephone"
                control={control}
                error={errors.phone}
              />
            </FormControl>
            <FormControl id="url" fontSize={isMobile ? "1rem" : "2rem"}>
              <FormLabel>Url da página</FormLabel>

              <InputText
                name="url"
                control={control}
                error={errors.complement}
                placeholder="https://ufsm.fazumbem.br"
                background="white"
              />
            </FormControl>
          </HStack>
          <FormControl id="description" fontSize={isMobile ? "1rem" : "2rem"}>
            <FormLabel>Descrição da instituição</FormLabel>

            <InputProjectDescription
              register={{
                ...register("description", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.description}
            />
          </FormControl>
        </Box>
        <Center pb={10}>
          <Button
            colorScheme="blue"
            background="bluish.100"
            color="white"
            type="submit"
          >
            Salvar alterações
          </Button>
        </Center>
        <Box
          backgroundColor="brownish.200"
          width="100%"
          color="brand.300"
          p={2}
        ></Box>
      </Box>
    </form>
  );
};

export default NewInstituition;
