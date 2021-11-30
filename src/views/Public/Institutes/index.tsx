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
  useMediaQuery
} from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";
import "../../../css/instituicoes.css";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
// import InstituteModal from "../../../components/Modals/InstituteModal";
import "@fontsource/montserrat/600.css";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { httpClient } from "../../../services/httpClient";
import defaultLogo from "../../../assets/images/defaultlogo.png";

function truncateName(name: String) {
  if (name.length > 12) {
    return name.substr(0, 10) + "...";
  }
}
/*function showCampaignDetails(){
  console.log("show details");
}*/

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");
  const [isGreater] = useMediaQuery("(min-width: 1200px)");

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [opened, setOpened] = useState<any>();

  const history = useHistory();

  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    const getList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/user/institution",
      });

      setList(req.data);
    };

    getList();
  }, []);
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
            {list.map((institute: any = []) => (
              <Box
                className={instituteStyle["card-wrapper"]}
                key={institute.username}
              >
                <Box className={instituteStyle["card"]}>
                  <Box className={instituteStyle["card-image"]}>
                    <Image
                      src={defaultLogo}
                    />
                  </Box>
                  <Box className={instituteStyle["card-title"]}>
                    <Text color="bluish.100" title={institute.name}>
                      {truncateName(institute.name)}
                    </Text>
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
                        onClick={() => history.push(`/institute/${institute.idUser}`)}
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
      </Box>


      <Footer />
    </Box>
  );
}
// <InstituteModal
//   isOpen={isOpen}
//   onOpen={onOpen}
//   onClose={onClose}
//   opened={opened}
// />
