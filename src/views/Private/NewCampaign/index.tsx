import { Box, HStack } from "@chakra-ui/layout";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Spinner,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FiFile } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import FileUpload from "../../../components/FileUpload";
import InputError from "../../../components/InputError";
import InputProjectDescription from "../../../components/InputProjectDescription";
import InputText from "../../../components/InputText";
import Footer from "../../../components/Private/Footer";
import { useAuthState } from "../../../context";
import { httpClient } from "../../../services/httpClient";

const NewCampaign = () => {
  let { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [campaignToEdit, setCampaignToEdit] = useState<any>();
  const [imageSrc, setImageSrc] = useState(null);
  const toast = useToast();
  const user = useAuthState();
  const onlyView = useLocation().search === "?viewInfo";

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues: campaignToEdit });

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
    if (campaignToEdit === undefined && value.length < 1) {
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
        url: "/campaign/all",
      })
        .then((req) => {
          const inst = req?.data?.find(
            (item) => item.idCampaign === Number(id)
          );

          setCampaignToEdit(inst);

          reset(inst);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, reset]);

  const onSubmit = async (data: any) => {
    if (campaignToEdit) {
      try {
        if (files) {
          let body = new FormData();
          body.set("key", "e8a140d7ae8c3ede637cd5be670fe181");
          body.append("image", data.files[0]);

          const response = await axios.post(
            `https://api.imgbb.com/1/upload`,
            body
          );
          const url = response.data?.data.display_url;

          const { images, ...restData } = data;

          await httpClient({
            method: "PUT",
            url: "/campaign",
            data: { ...restData, images: [url] },
          });
        } else {
          await httpClient({
            method: "PUT",
            url: "/campaign",
            data: { ...data },
          });
        }

        toast({
          title: "Atualizada com sucesso!",
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
      }
    } else {
      let body = new FormData();
      body.set("key", "e8a140d7ae8c3ede637cd5be670fe181");
      body.append("image", data.files[0]);

      axios.post(`https://api.imgbb.com/1/upload`, body).then((response) => {
        const url = response.data?.data.display_url;

        httpClient({
          method: "POST",
          url: "/campaign",
          data: {
            title: data.title,
            description: data.description,
            externalLink: data.externalLink,
            images: [url],
            user: { ...user.user },
          },
        })
          .then(() => {
            toast({
              title: "Campanha cadastrada com sucesso!",

              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
            });
          })
          .catch(() => {
            toast({
              title: "Houve um erro!",
              status: "error",
              duration: 3000,
              position: "top",
              isClosable: true,
            });
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
            &nbsp;{campaignToEdit ? campaignToEdit.title : "Nova campanha"}
            &nbsp;
          </Text>
        </Box>

        <Box m={20} mt={10} pb={10} color="bluish.100">
          <Text
            color="bluish.100"
            fontSize="1.8rem"
            textAlign="left"
            pb={5}
            fontFamily="Comfortaa"
          >
            Informações básicas
          </Text>
          <HStack
            spacing={10}
            margin={{ lg: "initial" }}
            pt={2}
            alignItems="flex-end"
          >
            <FormControl id="title" isRequired>
              <FormLabel>Título</FormLabel>
              <InputText
                name="title"
                control={control}
                error={errors.title}
                background="white"
                placeholder="Título da campanha"
                isReadOnly={onlyView}
              />
            </FormControl>
            <FormControl id="picture">
              <FormLabel>Imagem da campanha</FormLabel>

              <>
                {Boolean(imageSrc || campaignToEdit?.images[0]) && (
                  <Image
                    boxSize="400px"
                    objectFit="cover"
                    src={imageSrc || campaignToEdit?.images[0]}
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
          </HStack>
          <FormControl mt="8" id="description" isRequired>
            <FormLabel>Descrição da campanha</FormLabel>
            <InputProjectDescription
              bg="white"
              register={{
                ...register("description", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.description}
              isReadOnly={onlyView}
            />
          </FormControl>

          <FormControl id="externalLink" mt="8">
            <FormLabel>Link da campanha</FormLabel>
            <InputText
              name="externalLink"
              control={control}
              error={errors.externalLink}
              background="white"
              isRequired={false}
              isReadOnly={onlyView}
            />
          </FormControl>
        </Box>
        {!onlyView && (
          <Center pb={10} mb={12}>
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

export default NewCampaign;
