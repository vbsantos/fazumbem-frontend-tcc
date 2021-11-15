import "../../../css/instituicoes.css";
import { Box, HStack } from "@chakra-ui/layout";
import {
  Text,
  FormControl,
  FormLabel,
  Center,
  Button,
  Divider,
  useMediaQuery,
  useToast,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputText from "../../../components/InputText";
import InputPassword from "../../../components/InputPassword";
import InputCPF from "../../../components/InputCPF";
import InputPhone from "../../../components/InputPhone";
import { useAuthDispatch, useAuthState } from "../../../context";
import { httpClient } from "../../../services/httpClient";
import Footer from "../../../components/Private/Footer";

interface Props {}

const UserProfile = (props: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const userDetails = useAuthState();
  const dispatch = useAuthDispatch();
  const toast = useToast();
  const { password, address, verified, ...others } = userDetails.user;
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ defaultValues: { address: { ...address }, ...others } });

  const onSubmit = async (data: any) => {
    try {
      const req = await httpClient<any>({
        method: "PUT",
        url: "/user",
        data: data,
      });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { ...userDetails, user: { ...userDetails.user, ...req.data } },
      });

      toast({
        title: "Alterado com sucesso!",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Houve um erro!",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box backgroundColor="gray.100" m={0} p={0}>
        <Box
          backgroundColor="#ED6A5A"
          width="100%"
          color="brand.300"
          p={2}
        ></Box>
        <Box m={0} pt={10} textAlign="center">
          <Text
            fontSize="2.5rem"
            textAlign="center"
            fontWeight={500}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
            display="inline"
          >
            &nbsp;Minha instituição&nbsp;
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
            Informações básicas da instituição
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
              id="username"
              fontSize={isMobile ? "1rem" : "2rem"}
              isRequired
            >
              <FormLabel>Email</FormLabel>
              <Input
                value={userDetails.user.username}
                background="white"
                isDisabled
              />
            </FormControl>
            <FormControl
              isRequired
              id="password"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>Senha</FormLabel>
              <InputPassword
                register={{
                  ...register("password", {
                    required: "Campo obrigatório",
                    minLength: { value: 6, message: "Mínimo 6 caracteres" },
                  }),
                }}
                error={errors.password}
                placeholder="*********"
                background="white"
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
            <FormControl
              isRequired
              id="cpf"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>CPF</FormLabel>
              <InputCPF name="cpf" control={control} error={errors.cpf} />
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
          </HStack>
        </Box>
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
        <Footer />
      </Box>
    </form>
  );
};

export default UserProfile;
