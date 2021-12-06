/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import instituteStyle from "../../../css/HomeInstitutes.module.css";
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

import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { httpClient } from "../../../services/httpClient";


export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  let isTablet = false;
  if (!isMobile && !isDesktop) isTablet = true;
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  const history = useHistory();


  const [camp_list, setCampList] = useState<any[]>([]);
  useEffect(() => {
    const getCampList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/campaign/all",
      });

      setCampList(req.data);
      console.log(req.data);
    };

    getCampList();
  }, []);

  const [inst_list, setInstList] = useState<any[]>([]);
  useEffect(() => {
    const getInstList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/user/institution",
      });

      setInstList(req.data);
    };

    getInstList();
  }, []);
  console.log(inst_list);

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
          { camp_list.length ? (
            <Carousel campanhas={camp_list} />
          ) : (
            <>
              <br />
              <Text
                display="inline"
                fontSize={isMobile ? "15px" : "20px"}
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
              >
                Não foram encontradas campanhas cadastradas até o momento
              </Text>
            </>
          )}
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
        <Collapse startingHeight={isMobile ? 850 : 700} in={show} transition={{enter: {duration: 2.5}, exit: {duration: 2.5}}}>
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

            {inst_list.map((institute: any = []) => (
              <Box key={institute.id}>
                <Box className={instituteStyle["card"]}>
                  <Box className={instituteStyle["card-image"]}>
                    <Image src={institute.image} />
                  </Box>
                  <Box className={instituteStyle["card-title"]}>
                    <Text
                      color="white"
                      margin="5px 0"
                      fontSize="18px"
                    >
                    {institute.name}
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
                  {/*
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
                              onClick={() => history.push(`/institute/${institute.idUser}`)}
                              // {() => {
                              //   setOpened(institute);
                              //   onOpen();
                              // }}
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

                </Box>
              </Box>
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
