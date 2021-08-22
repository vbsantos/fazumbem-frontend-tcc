import { Box, HStack } from "@chakra-ui/layout";
import {
  Button,
  Center,
  /* Divider, */
  FormControl,
  FormLabel,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import InputProjectDescription from "../../../components/InputProjectDescription";
import InputText from "../../../components/InputText";
import { httpClient } from "../../../services/httpClient";
import Footer from "../../../components/Private/Footer";
import DefaultButton from "../../../components/DefaultButton";


const NewCampaign = () => {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  let { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [campaignToEdit, setCampaignToEdit] = useState<any>();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues: campaignToEdit });

  useEffect(() => {
    if (id) {
      setIsLoading(true);

      httpClient<any>({
        method: "GET",
        url: "/campaign",
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
    try {
      if (campaignToEdit) {
        await httpClient({
          method: "PUT",
          url: "/campaign",
          data: { ...data },
        });
      } else {
        await httpClient({
          method: "POST",
          url: "/campaign",
          data: { ...data },
        });
      }

      toast({
        title: "Campanha cadastrada com sucesso!",
        description: "Acesse o página Campanhas no menu lateral",
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
            &nbsp;{campaignToEdit ? campaignToEdit.title : "Nova campanha"}&nbsp;
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
          <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
            <FormControl
              id="title"
              fontSize={isMobile ? "1rem" : "2rem"}
              isRequired
            >
              <FormLabel>Título</FormLabel>
              <InputText
                name="title"
                control={control}
                error={errors.title}
                background="white"
                placeholder="Título da campanha"
              />
            </FormControl>
            <FormControl
              id="picture"
              fontSize={isMobile ? "1rem" : "2rem"}
            >
              <FormLabel>Imagem da campanha</FormLabel>
              <DefaultButton type="" title="Anexar imagem" route=""/>
            </FormControl>
          </HStack>
          <FormControl
            mt="8"
            id="description"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Descrição da campanha</FormLabel>
            <InputProjectDescription
              bg="white"
              register={{
                ...register("description", {
                  required: "Campo obrigatório",
                }),
              }}
              error={errors.description}
            />
          </FormControl>
        </Box>
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
        <Footer />
      </Box>
    </form>
  );
};

export default NewCampaign;
