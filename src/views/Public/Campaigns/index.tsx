/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/layout";
import { 
  IconButton, 
  Image, 
  SimpleGrid, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  useDisclosure,
  /* useMediaQuery, */
  Text,
  Center
} from "@chakra-ui/react";
import { FaLandmark } from "react-icons/fa";
import "../../../css/instituicoes.css";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";

/*function showCampaignDetails(){
  console.log("show details");
}*/

// function truncateName(name: String) {
//   if (name.length > 12) {
//     return name.substr(0, 12);
//   }
// }


export default function Home() {
  /* const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)") */
  let { isOpen, onClose, onOpen } = useDisclosure();
  const campanhas = [
    {
      id: 0,
      title: "Campanha 1",
      picture_url: 1
    },
    {
      id: 1,
      title: "Campanha 2",
      picture_url: 2,
    },
    {
      id: 2,
      title: "Campanha 3",
      picture_url: 3,
    },
    {
      id: 3,
      title: "Campanha 4",
      picture_url: 4,
    },
    {
      id: 4,
      title: "Campanha 5",
      picture_url: 5,
    },
    {
      id: 5,
      title: "Campanha 6",
      picture_url: 6,
    },
    {
      id: 6,
      title: "Campanha 7",
      picture_url: 7,
    },
    {
      id: 7,
      title: "Campanha 8",
      picture_url: 8,
    },
    {
      id: 8,
      title: "Campanha 9",
      picture_url: 9,
    },
    {
      id: 9,
      title: "Campanha 10",
      picture_url: 10,
    },
    {
      id: 10,
      title: "Campanha 11",
      picture_url: 11,
    },
    {
      id: 11,
      title: "Campanha 12",
      picture_url: 12,
    },
    {
      id: 12,
      title: "Campanha 13",
      picture_url: 13,
    },
    {
      id: 13,
      title: "Campanha 14",
      picture_url: 14,
    },
    {
      id: 14,
      title: "Campanha 15",
      picture_url: 15,
    },
  ];
  return (
    <Box backgroundColor="gray.200">
      <Header />
      <Heading
        color="bluish.100"
        size="2xl"
        textAlign="center"
        mt="5rem"
        mb="2rem"
      >
        CAMPANHAS EM ANDAMENTO
      </Heading>
      <Text color="bluish.100" fontSize="1.4rem" m={10} textAlign="center">
        Confira as campanhas que estão em andamento e participe! Loga abaixo você
        pode conferir as informações das campanhas em maiores detalhes e verificar
        a instituição que as estão organizando.
      </Text>
      <SimpleGrid
        minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
        pb="5rem"
        maxW="1600px"
        margin="0 auto"
      >
        {campanhas.map((campanha: any = []) => (
          <div className="all-card-wrapper" key={campanha.id}>
            <div className="all-card">
              <div className="all-card-image">
                <Image
                  src={`https://fazumbem.inf.ufsm.br/images/entidades/${campanha.picture_url}.png`}
                />
              </div>
              <ul className="all-icons">
                <li>
                  <span>
                    <i>
                      <IconButton
                        aria-label="info"
                        borderRadius="10px"
                        transform="translateY(-3px)"
                        bgColor="white"
                        icon={<InfoIcon />}
                        _hover={{
                          bgColor: "bluish.400",
                          borderRadius: "10px",
                          transform: "translateY(-3px)",
                        }}
                        onClick={onOpen}
                      />
                    </i>
                  </span>
                </li>
                <li>
                  <span>
                    <i>
                      <IconButton
                        aria-label="info"
                        borderRadius="10px"
                        transform="translateY(-3px)"
                        bgColor="white"
                        icon={<FaLandmark />}
                        _hover={{
                          bgColor: "bluish.400",
                          borderRadius: "10px",
                          transform: "translateY(-3px)",
                        }}
                      />
                    </i>
                  </span>
                </li>
              </ul>
              <div className="all-details">
                <h2>{campanha.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </SimpleGrid>
      <Box
        backgroundColor="bluish.100"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <Heading
          color="white"
          size="2xl"
          textAlign="center"
          mt="2rem"
          mb="2rem"
        >
          CAMPANHAS PASSADAS
        </Heading>
        <Text color="white" fontSize="1.4rem" m={10} textAlign="center">
          Deseja ver informações de campanhas passadas? Confira a seguir
          detalhes de campanhas que já se encerraram e as suas instituições 
          organizadoras.
        </Text>
        <SimpleGrid
          minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
          spacing={10}
          paddingX={{ base: 4, md: 6, lg: 10 }}
          paddingY={4}
          pb="5rem"
          maxW="1600px"
          margin="0 auto"
        >
          {campanhas.map((campanha: any = []) => (
            <div className="all-card-wrapper" key={campanha.id}>
              <div className="all-card">
                <div className="all-card-image">
                  <Image
                    src={`https://fazumbem.inf.ufsm.br/images/entidades/${campanha.picture_url}.png`}
                  />
                </div>
                <ul className="all-icons">
                  <li>
                    <span>
                      <i>
                        <IconButton
                          aria-label="info"
                          borderRadius="10px"
                          transform="translateY(-3px)"
                          bgColor="white"
                          icon={<InfoIcon />}
                          _hover={{
                            bgColor: "bluish.400",
                            borderRadius: "10px",
                            transform: "translateY(-3px)",
                          }}
                          onClick={onOpen}
                        />
                      </i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>
                        <IconButton
                          aria-label="info"
                          borderRadius="10px"
                          transform="translateY(-3px)"
                          bgColor="white"
                          icon={<FaLandmark />}
                          _hover={{
                            bgColor: "bluish.400",
                            borderRadius: "10px",
                            transform: "translateY(-3px)",
                          }}
                        />
                      </i>
                    </span>
                  </li>
                </ul>
                <div className="all-details">
                  <h2>{campanha.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose} onEsc={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"bluish.100"} fontWeight="none">Informações da campanha</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center >
              <Image
                src={`https://fazumbem.inf.ufsm.br/images/entidades/1.png`}
                borderRadius="16px"
                maxWidth="400px"
                mb={5}
              />
            </Center>
            <Text color="bluish.100" fontSize="1.4rem">
              Instituição organizadora
            </Text>
            <p>Instituição X</p>
            <Text color="bluish.100" fontSize="1.4rem">
              Nome da campanha
            </Text>
            <p>Campanha X</p>
            <Text color="bluish.100" fontSize="1.4rem">
              Descrição
            </Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer volutpat ligula vel nunc finibus rutrum. Proin mattis 
              odio id purus posuere, in euismod mauris malesuada. Suspendisse 
              lacerat dictum nulla, at porttitor dui placerat pellentesque. 
              Curabitur vulputate felis feugiat libero maximus, et eleifend dui 
              convallis. Ut tempor, lacus in sollicitudin elementum, erat lorem 
              laoreet enim, semper tincidunt lorem arcu sed dolor. Aenean sed 
              porttitor leo. Praesent eu purus at sem placerat hendrerit a nec 
              massa. Proin bibendum arcu cursus ultricies dapibus. In ultrices 
              lacinia arcu vitae varius. Suspendisse scelerisque ullamcorper ante, 
              nec ullamcorper elit mattis et. Phasellus vel mauris erat. Integer ac 
              sagittis urna. Nam consectetur commodo finibus. Praesent tincidunt ac 
              massa sed tincidunt. Donec eget neque placerat ante efficitur 
              pellentesque sed rhoncus quam. Fusce tristique nunc dui, non 
              pellentesque odio efficitur vitae.
            </p>
            <p>
              Quisque posuere dapibus erat. Aenean imperdiet ut elit ac vestibulum. 
              Suspendisse vestibulum libero nisi. Quisque sit amet leo velit. Curabitur 
              non aliquet enim, imperdiet rhoncus mi. Donec non condimentum dui. Proin 
              maximus magna id mauris porta consectetur. Proin lacus arcu, volutpat eget 
              mattis vel, egestas vitae magna. Nam quis venenatis augue. Nunc a blandit 
              velit, at semper mauris.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" background="bluish.100" color="white">
              Ver detalhes da campanha
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
