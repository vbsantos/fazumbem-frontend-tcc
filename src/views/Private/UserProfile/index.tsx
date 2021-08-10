
import "../../../css/instituicoes.css";
import { Box, HStack } from "@chakra-ui/layout";
import { 
  Image, 
  Text, 
  FormControl,
  FormLabel,
  Input, 
  Center,
  Button,
  Divider,
  useMediaQuery,

} from "@chakra-ui/react";

interface Props {}

const UserProfile = (props: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  return (
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
          MEU PERFIL
        </Text>
      </Box>
      
      <Box m={20} mt={0} pb={10} color="bluish.100">
        <Text
          color="bluish.100"
          fontSize="1.8rem"
          textAlign="left"
          pb={5}
        >
          Informações básicas da conta
        </Text>
        <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
          <Image 
            height="10rem"
            src="https://fazumbem.inf.ufsm.br/images/logos/1.png" 
            alt="profile_picture"
            borderRadius="50%"
          />
          <FormControl
            id="name"
            fontSize={isMobile ? "1rem" : "2rem"}
            isRequired
          >
            <FormLabel>Nome</FormLabel>
            <Input placeholder="Universidade Federal de Santa Maria" backgrond="white"/>
          </FormControl>
          <FormControl 
            isRequired
            id="password"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Senha</FormLabel>
            <Input placeholder="*********" backgrond="white"/>
          </FormControl>
          <FormControl
            id="mail"
            fontSize={isMobile ? "1rem" : "2rem"}
            isRequired
          >
            <FormLabel>E-mail</FormLabel>
            <Text
              color="bluish.100"
              fontSize="1.2rem"
            >
              e-mail@instituicao.com
            </Text>
          </FormControl>
        </HStack>
        <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
        <Text
          color="bluish.100"
          fontSize="1.8rem"
          textAlign="left"
          pb={5}
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
            <Input placeholder="90420041" backgrond="white"/>
          </FormControl>
          <FormControl
            isRequired
            id="city"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Cidade</FormLabel>
            <Input placeholder="Porto Alegre" backgrond="white"/>
          </FormControl>
          <FormControl
            isRequired
            id="state"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Estado</FormLabel>
            <Input placeholder="Rio Grande do Sul" backgrond="white"/>
          </FormControl>
        </HStack>
        <HStack spacing={10} margin={{ lg: "initial" }} pt={2} pb={5}>
          <FormControl
            id="logradouro"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Logradouro</FormLabel>
            <Input placeholder="Jardim Guaíra" backgrond="white"/>
          </FormControl>
          <FormControl
            id="number"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Número</FormLabel>
            <Input placeholder="1373" backgrond="white"/>
          </FormControl>
          <FormControl
            id="complemento"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Complemento</FormLabel>
            <Input placeholder="214" backgrond="white"/>
          </FormControl>
        </HStack>
        <Divider borderBottom="1px solid #034074" pt={10} mb={10} />
        <Text
          color="bluish.100"
          fontSize="1.8rem"
          textAlign="left"
          pb={5}
        >
          Informações complementares
        </Text>
        <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
          <FormControl
            isRequired
            id="cnpj"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>CNPJ</FormLabel>
            <Input placeholder="123456123456123456" backgrond="white"/>
          </FormControl>
          <FormControl
            isRequired
            id="phone"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Telefone</FormLabel>
            <Input placeholder="51985763442" backgrond="white"/>
          </FormControl>
          <FormControl
            id="url"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Url da página</FormLabel>
            <Input placeholder="https://ufsm.fazumbem.br" backgrond="white"/>
          </FormControl>
          <FormControl
            id="description"
            fontSize={isMobile ? "1rem" : "2rem"}
          >
            <FormLabel>Descrição da instituição</FormLabel>
            <Input placeholder="A UFSM, Universidade Fedaral de Santa Maria é ..." backgrond="white"/>
          </FormControl>
        </HStack>
      </Box>
      <Center pb={10}>
        <Button variant="ghost" mr={3}>
          Cancelar
        </Button>
        <Button colorScheme="blue" background="bluish.100" color="white">
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
  );
};

export default UserProfile;
