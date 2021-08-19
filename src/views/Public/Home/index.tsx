/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import {
  Image,
  Text,
  SimpleGrid,
  Tooltip,
  Link,
  useMediaQuery
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { InfoIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Carousel from "../../../components/Home/Carousel";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import TopLayoutDesktop from "../../../components/Home/Top/LayoutDesktop";
import TopLayoutMobile from "../../../components/Home/Top/LayoutMobile";
import TopLayoutTablet from "../../../components/Home/Top/LayoutTablet";
import React from "react";
/*function showCampaignDetails(){
  console.log("show details");
}*/

// function truncateName(name: String) {
//   if (name.length > 12) {
//     return name.substr(0, 12);
//   }
// }

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  let isTablet = false;
  if (!isMobile && !isDesktop) isTablet = true;
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
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
    <>
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
          fontSize={isMobile ? "35px" : "55px"}
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
        width="100%"
        padding={isMobile ? "80px 8px" : "80px;"}
        textAlign="center"
      >
        <Heading>
          <Text
            display="inline"
            fontSize={isMobile ? "35px" : "55px"}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
          >
            Sobre
          </Text>
        </Heading>
        <Box
          marginTop="50px;"
        >
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
          >
          {isDesktop ? (
            <>
            Faz um bem! propõe-se, como uma plataforma virtual interativa,<br/> a
            <strong> interligar doadores e receptores de recursos</strong>, centralizando<br/>
            as necessidades de instituições e organizações sociais de<br/> Santa Maria. Traz,
            portanto, <strong>informações sobre campanhas<br/> que estão acontecendo </strong>
            na cidade e como doadores e<br/> voluntários podem colaborar.
            </>
          ) : (
            <>
            Faz um bem! propõe-se, como uma plataforma virtual interativa, a
            <strong> interligar doadores e receptores de recursos</strong>, centralizando
            as necessidades de instituições e organizações sociais de Santa Maria. Traz,
            portanto, <strong>informações sobre campanhas que estão acontecendo </strong>
            na cidade e como doadores e voluntários podem colaborar.
            </>
          )}
          </Text>
        </Box>
      </Box>
      <>
      <Box
        bg="#ED6A5A"
        width="100%"
        textAlign="center"
        p={2}
        pt={20}
        pb={20}
        id="institutes"
      >

        <Heading>
          <Text
            display="inline"
            fontSize={isMobile ? "35px" : "55px"}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="bluish.100"
          >
            &nbsp;Instituições&nbsp;<br/>
            &nbsp;partipantes&nbsp;
          </Text>
        </Heading>
        <Collapse startingHeight={isMobile ? 850 : 560} in={show} transition={{enter: {duration: 2.5}, exit: {duration: 2.5}}}>
          <SimpleGrid
            columns={4}
            minChildWidth={isMobile ? "30%" : "160px"}//{{ base: "40%", sm: "30%", lg: "160px" }}
            spacingX={40}
            spacingY={20}
            paddingX={{ base: 4, md: 6, lg: 60 }}
            paddingY={4}
            maxW="1600px"
            margin="50px auto 0"
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
                  <div>
                    <Text
                      color="white"
                      margin="5px 0"
                      fontSize="18px"
                    >
                    {institute.name}
                    </Text>
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
                  {/*
                    <div className="institute-details" title={institute.name}>
                  //   <h5>{truncateName(institute.name)}</h5>
                  // </div>
                  */}

                </div>
              </div>
            ))}
          </SimpleGrid>
        </Collapse>
        <Heading
          display="inline-block"
          color="white"
          backgroundColor="transparent"
          fontSize="18px"
          fontWeight="500"
          marginTop="15px"
          size="md"
          cursor="pointer"
          onClick={handleToggle}
          as={Link}
          _hover={{
            textDecoration: "none"
          }}
        >
          Ver {show ? "menos" : "mais"}
        </Heading>
        <br/>
        <IconButton
          aria-label="Ver mais"
          icon={show ? <ChevronUpIcon w={8} h={8}/> : <ChevronDownIcon w={8} h={8}/>}
          marginTop="15px"
          backgroundColor="#ED6A5A"
          color="white"
          border="white solid 3px"
          borderRadius="50px"
          boxShadow="0px 4px 4px 0px #00000040"
          _hover={{
            background: "#F18C7E",
            transition: ".5s",
          }}
          onClick={handleToggle}
        >
        </IconButton>
      </Box>
      <Footer />
      </>
    </Box>
    </>
  );
}
