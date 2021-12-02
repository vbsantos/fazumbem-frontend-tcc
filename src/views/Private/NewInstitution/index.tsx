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
  Icon,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useParams, useLocation } from "react-router-dom";
import InputCNPJ from "../../../components/InputCNPJ";
import InputPhone from "../../../components/InputPhone";
import InputProjectDescription from "../../../components/InputProjectDescription";
import InputText from "../../../components/InputText";
import "../../../css/instituicoes.css";
import { httpClient } from "../../../services/httpClient";
import Footer from "../../../components/Private/Footer";
import FileUpload from "../../../components/FileUpload";
import InputError from "../../../components/InputError";
import { FiFile } from "react-icons/fi";
import axios from "axios";
import { useHistory } from "react-router";
import { useAuthState } from "../../../context";

const NewInstituition = () => {
  let { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [institutionToEdit, setInstitutionToEdit] = useState<any>();
  const [imageSrc, setImageSrc] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const userDetails = useAuthState();
  const isSuperUser = userDetails?.user?.group === "Curator";

  const onlyView = useLocation().search === "?viewInfo";

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues: institutionToEdit });

  const files = useWatch({
    name: "files",
    defaultValue: false,
    control,
  });

  useEffect(() => {
    if (!files) return;

    const file = files[0];

    setImageSrc(URL.createObjectURL(file));
  }, [files]);

  const validateFiles = (value: FileList) => {
    if (institutionToEdit === undefined && value.length < 1) {
      return "Selecione um arquivo!";
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 5;
      if (fsMb > MAX_FILE_SIZE) {
        return "Tamanho máximo 5mb";
      }
    }
    return true;
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);

      httpClient<any>({
        method: "GET",
        url: "/user/institution",
      })
        .then((req) => {
          const inst = req?.data?.find((item) => item.idUser === Number(id));

          setInstitutionToEdit(inst);

          reset(inst);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, reset]);

  const onSubmit = async (data: any) => {
    if (institutionToEdit) {
      try {
        setIsRequesting(true);

        if (files) {
          let body = new FormData();
          body.set("key", "85073d9659d6a29c95abf796134fbc2c");
          body.append("image", data.files[0]);

          const response = await axios.post(
            `https://api.imgbb.com/1/upload`,
            body
          );
          const url = response.data?.data.display_url;

          const { images, ...restData } = data;

          await httpClient({
            method: "PUT",
            url: "/user",
            data: { ...restData, image: url },
          });
        } else {
          await httpClient({
            method: "PUT",
            url: "/user",
            data: { ...data },
          });
        }

        toast({
          title: "Atualizado com sucesso!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });

        if (isSuperUser) history.goBack();
      } catch (error) {
        toast({
          title: "Houve um erro!",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } finally {
        setIsRequesting(false);
      }
    } else {
      let body = new FormData();
      body.set("key", "e8a140d7ae8c3ede637cd5be670fe181");
      body.append("image", data.files[0]);

      setIsRequesting(true);

      axios.post(`https://api.imgbb.com/1/upload`, body).then((response) => {
        const url = response.data?.data.display_url;

        httpClient({
          method: "POST",
          url: "/user/register",
          data: { ...data, image: url },
        })
          .then(() => {
            toast({
              title: "Instituição cadastrada com sucesso!",

              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
            });

            history.goBack();
          })
          .catch(() => {
            toast({
              title: "Houve um erro!",
              status: "error",
              duration: 3000,
              position: "top",
              isClosable: true,
            });
          })
          .finally(() => {
            setIsRequesting(false);
          });
      });
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
            {institutionToEdit?.name || "Nova Instituição"}
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
          <HStack spacing={10} pt={2} alignItems="flex-end">
            <FormControl id="picture">
              <FormLabel>Imagem da instituição</FormLabel>
              <>
                {Boolean(imageSrc || institutionToEdit?.image) && (
                  <Image
                    boxSize="400px"
                    objectFit="cover"
                    src={imageSrc || institutionToEdit?.image}
                    marginX="auto"
                    fallbackSrc="https://via.placeholder.com/300"
                  />
                )}

                <FileUpload
                  accept={"image/*"}
                  register={register("files", { validate: validateFiles })}
                  isDisabled={onlyView}
                >
                  <Button
                    colorScheme="blue"
                    background="#ED6A5A"
                    color="white"
                    borderRadius="50px"
                    padding="15px 20px 15px"
                    boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                    _hover={{
                      textDecoration: "none",
                      background: "#F18C7E",
                      transition: ".5s",
                    }}
                    leftIcon={<Icon as={FiFile} />}
                    isFullWidth
                    mt={2}
                    isDisabled={onlyView}
                  >
                    Alterar
                  </Button>
                </FileUpload>

                <InputError error={errors.files} />
              </>
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

          <FormControl id="name" isRequired mt="16px">
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
          <HStack spacing={10} pt={2} pb={5}>
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
          <HStack spacing={10} pt={2} pb={5}>
            <FormControl id="logradouro">
              <FormLabel>Logradouro</FormLabel>
              <InputText
                name="address.street"
                control={control}
                error={errors.street}
                placeholder="Jardim Guaíra"
                background="white"
                isReadOnly={onlyView}
                required={false}
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
                required={false}
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
                required={false}
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
          <HStack spacing={10} pt={2}>
            <FormControl id="identifier">
              <FormLabel>CNPJ</FormLabel>
              <InputCNPJ
                name="identifier"
                control={control}
                error={errors.identifier}
                isReadOnly={onlyView}
              />
            </FormControl>

            <FormControl isRequired id="telephone">
              <FormLabel>Telefone</FormLabel>
              <InputPhone
                name="telephone"
                control={control}
                error={errors.telephone}
                isReadOnly={onlyView}
              />
            </FormControl>
          </HStack>
          <HStack spacing={10} pt={2} mt={4}>
            <FormControl id="url">
              <FormLabel>Link do site</FormLabel>

              <InputText
                name="url"
                control={control}
                error={errors.complement}
                placeholder="https://www.seu_site.com.br"
                required={false}
                isReadOnly={onlyView}
                background="white"
                type="url"
              />
            </FormControl>
            <FormControl id="facebook">
              <FormLabel>Link do Facebook</FormLabel>

              <InputText
                name="facebook"
                control={control}
                error={errors.complement}
                placeholder="https://www.facebook.com/sua_pagina"
                required={false}
                isReadOnly={onlyView}
                background="white"
                type="url"
              />
            </FormControl>
            <FormControl id="instagram">
              <FormLabel>Link do Instagram</FormLabel>

              <InputText
                name="instagram"
                control={control}
                error={errors.complement}
                placeholder="https://www.instagram.com/sua_pagina"
                required={false}
                isReadOnly={onlyView}
                background="white"
                type="url"
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
              background="white"
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
              background="white"
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
              background="white"
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
              isLoading={isRequesting}
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
