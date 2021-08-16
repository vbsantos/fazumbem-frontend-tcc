/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Image,
  Text,
  SimpleGrid,
  Tooltip,
  useMediaQuery
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Carousel from "../../../components/Home/Carousel";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import TopLayoutDesktop from "../../../components/Home/Top/LayoutDesktop";
import TopLayoutMobile from "../../../components/Home/Top/LayoutMobile";
import TopLayoutTablet from "../../../components/Home/Top/LayoutTablet";
/*function showCampaignDetails(){
  console.log("show details");
}*/

function truncateName(name: String) {
  if (name.length > 12) {
    return name.substr(0, 12);
  }
}

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  let isTablet = false;
  if (!isMobile && !isDesktop) isTablet = true;
  const campanhas = [
    {
      id: 0,
      title: "Campanha 1",
      picture_url: 1,
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
    <Box backgroundColor="gray.200" >
      <Header />
      {isMobile ? (
        <TopLayoutMobile />
      ) : ("")}
      {isDesktop ? (
        <TopLayoutDesktop />
      ) : ("")}
      {isTablet ? (
        <TopLayoutTablet />
      ) : ("")}
      <Box
        backgroundColor="bluish.100"
        width="100%"
        p={2}
        pt={20}
        pb={20}
        textAlign="center"
      >
        <Heading>
        <Text
          display="inline"
          fontSize="55px"
          fontFamily="Comfortaa"
          color="white"
          backgroundColor="#ED6A5A"
        >
          Campanhas em<br/>
          andamento
        </Text>
        </Heading>
        <Carousel campanhas={campanhas} />
      </Box>
      <Box
        p={1}
        pb={20}
        id="about"
      >
          {isDesktop ? (
            <SimpleGrid
              minChildWidth="120px"
              spacing={12}
              mt={20}
              ml={20}
              mr={20}
            >
              <Box>
                <Text
                  fontSize="2rem"
                >
                  Impulsionar uma plataforma virtual interativa que centralize
                  necessidades de instituições e organizações sociais de Santa
                  Maria. Faz um bem! propõe-se como uma platagorma virtual
                  interativa, incentivadora e mediadora entre doadores e receptores
                  de recursos.
                </Text>
              </Box>
              {/*
                backgroundImage={BackgroundImage}
                backgroundPosition="right"
                backgroundSize="cover"
              */}
              <Box>
                <Text
                  color="bluish.100"
                  fontSize="5rem"
                  textAlign="center"
                  fontWeight={500}
                >
                  SOBRE
                </Text>
              </Box>
            </SimpleGrid>
          ) : (
            <SimpleGrid
              minChildWidth="120px"
              spacing={5}
              mt={10}
              ml={10}
              mr={10}
            >
              <Box>
                <Text
                  color="bluish.100"
                  fontSize={isMobile ? "3rem" : "5rem"}
                  textAlign="center"
                  fontWeight={500}
                  mb={10}
                >
                  SOBRE
                </Text>
              </Box>
              {/*
                backgroundImage={BackgroundImage}
                backgroundPosition="right"
                backgroundSize="cover"
              */}
              <Box>
                <Text
                  fontSize={isMobile ? "1rem" : "2rem"}
                >
                  Impulsionar uma plataforma virtual interativa que centralize
                  necessidades de instituições e organizações sociais de Santa
                  Maria. Faz um bem! propõe-se como uma platagorma virtual
                  interativa, incentivadora e mediadora entre doadores e receptores
                  de recursos.
                </Text>
              </Box>
            </SimpleGrid>
          )}
      </Box>
      <Box bg="bluish.100" width="100%" textAlign="center" p={0} id="institutes">
        <Text
          ml={isMobile ? "34%" : "44%"}
          style={{
            width: 0,
            height: 0,
            borderLeft: isMobile ? "3rem solid transparent" : "5rem solid transparent",
            borderRight: isMobile ? "3rem solid transparent" : "5rem solid transparent",
            borderTop: isMobile ? "3rem solid #E2E8F0" : "5rem solid #E2E8F0",
            marginBottom:"2rem",
            marginTop: "-1rem"
          }}
        />
        <h1
          className="slider_title"
          style={{
            fontSize: isMobile ? "2rem" : (
              isDesktop ? "5rem" : "3rem"
            )}}
        >
          INSTITUIÇÕES PARTICIPANTES
        </h1>
        <SimpleGrid
          minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
          spacing={10}
          paddingX={{ base: 4, md: 6, lg: 10 }}
          paddingY={4}
          maxW="1600px"
          margin="0 auto"
          pb={20}
        >
          {institutes.map((institute: any = []) => (
            <div key={institute.id}>
              <div className="institute-card">
                <div className="institute-card-image">
                  <Image
                    src={`https://fazumbem.inf.ufsm.br/images/logos/${institute.picture_url}.png`}
                  />
                </div>
                <Tooltip
                  hasArrow
                  label="Ver informações"
                  bg="bluish.300"
                  color="white"
                  placement="right"
                  borderRadius="8px"
                  transition="0.4s"
                  ml={1}
                >
                  <ul className="institute-icons">
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
                          />
                        </i>
                      </span>
                    </li>
                  </ul>
                </Tooltip>
                <div className="institute-details" title={institute.name}>
                  <h5>{truncateName(institute.name)}</h5>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}
