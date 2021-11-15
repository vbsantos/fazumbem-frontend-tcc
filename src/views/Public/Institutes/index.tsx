/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import instituteStyle from "../../../css/Institutes.module.css";
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Tooltip,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import "../../../css/instituicoes.css";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import "@fontsource/montserrat/600.css";

// function truncateName(name: String) {
//   if (name.length > 12) {
//     return name.substr(0, 12);
//   }
// }
/*function showCampaignDetails(){
  console.log("show details");
}*/

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");
  const [isGreater] = useMediaQuery("(min-width: 1200px)");

  const institutes = [
    {
      id: 0,
      name: "Instituição 1",
      picture_url: 1,
    },
    {
      id: 1,
      name: "Instituição 2",
      picture_url: 2,
    },
    {
      id: 2,
      name: "Instituição 3",
      picture_url: 3,
    },
    {
      id: 3,
      name: "Instituição 4",
      picture_url: 4,
    },
    {
      id: 4,
      name: "Instituição 5",
      picture_url: 5,
    },
    {
      id: 5,
      name: "Instituição 6",
      picture_url: 6,
    },
    {
      id: 6,
      name: "Instituição 7",
      picture_url: 7,
    },
    {
      id: 7,
      name: "Instituição 8",
      picture_url: 8,
    },
    {
      id: 8,
      name: "Instituição 9",
      picture_url: 9,
    },
    {
      id: 9,
      name: "Instituição 10",
      picture_url: 10,
    },
    {
      id: 10,
      name: "Instituição 11",
      picture_url: 11,
    },
    {
      id: 11,
      name: "Instituição 12",
      picture_url: 12,
    },
    {
      id: 12,
      name: "Instituição 13",
      picture_url: 13,
    },
    {
      id: 13,
      name: "Instituição 14",
      picture_url: 14,
    },
    {
      id: 14,
      name: "Instituição 15",
      picture_url: 15,
    },
  ];
  return (
    <Box backgroundColor="gray.200">
      <Header />
      <Box padding={!isDesktop ? "50px 5px" : "50px"} textAlign="center">
        <Heading>
          <Text
            display="inline"
            fontSize={isMobile ? "35px" : "55px"}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
          >
            &nbsp;Instituições&nbsp;
            <br />
            &nbsp;participantes&nbsp;
          </Text>
        </Heading>
        <Box marginTop="50px">
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
            padding={isGreater ? "0 20%" : "0 5px"}
          >
            Conheça as instituições participantes da plataforma Faz um Bem!
          </Text>
        </Box>
        <Box marginTop="50px" padding={isGreater ? "0 15%" : "0 5px"}>
          <SimpleGrid
            minChildWidth={isMobile ? "30%" : "160px"}
            spacingX={40}
            spacingY={10}
            margin="50px auto 0"
          >
            {institutes.map((institute: any = []) => (
              <Box
                className={instituteStyle["card-wrapper"]}
                key={institute.id}
              >
                <Box className={instituteStyle["card"]}>
                  <Box className={instituteStyle["card-image"]}>
                    <Image
                      src={`https://fazumbem.inf.ufsm.br/images/logos/${institute.picture_url}.png`}
                    />
                  </Box>
                  <Box className={instituteStyle["card-title"]}>
                    <Text color="bluish.100">{institute.name}</Text>
                  </Box>
                  <Box className={instituteStyle["icons"]}>
                    <Tooltip
                      hasArrow
                      label="Ver informações"
                      bg="bluish.100"
                      color="white"
                      placement="top"
                      borderRadius="8px"
                      transition="0.4s"
                    >
                      <IconButton
                        aria-label="info"
                        borderRadius="10px"
                        bgColor="white"
                        color="bluish.100"
                        icon={<InfoIcon />}
                        _hover={{
                          bgColor: "#ED6A5A",
                          color: "white",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box
          marginTop="100px"
          padding={isGreater ? "0 15%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Deseja fazer uma doação?</Heading>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Veja as campanhas que precisam da sua ajuda:
            </Text>
            <Box>
              <Box
                fontSize="22px"
                borderRadius="50px"
                bg="bluish.100"
                color="white"
                padding="12px 19px"
                boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                href="/campaigns"
                as={Link}
                _hover={{
                  textDecoration: "none",
                  background: "bluish.200",
                  transition: ".5s",
                }}
              >
                Campanhas
              </Box>
            </Box>
          </VStack>
        </Box>
        {/* <Box
          margin="100px 0 50px"
          padding={isGreater ? "0 15%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">É uma instituição?</Heading>
            <Text
              fontSize={isMobile ? "22px" : "24px"}
              color="bluish.100"
            >
              Faça parte da nossa plataforma e cadastre-se no botão abaixo!
            </Text>
            <Box>
              <Box
                fontSize="22px"
                borderRadius="50px"
                bg="#ED6A5A"
                color="white"
                padding="12px 36px"
                boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                href="/register"
                as={Link}
                _hover={{
                  textDecoration: "none",
                  background: "#F18C7E",
                  transition: ".5s",
                }}
              >
                  Cadastro
              </Box>
            </Box>
          </VStack>
        </Box> */}
      </Box>
      <Footer />
    </Box>
  );
}
