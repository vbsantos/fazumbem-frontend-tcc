import detailsStyle from "../../../css/CampaignDetails.module.css";
// import "../../../css/campaign-images-slider.css";
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import {
  Image,
  Tooltip,
  Grid,
  GridItem,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { httpClient } from "../../../services/httpClient";
import {
  FaRegEnvelope,
  /* FaInstagram,
  FaFacebookSquare, */
  /*FaWhatsapp,*/
  /* FaGlobe */
} from "react-icons/fa";
import Slider from "react-slick";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import "@fontsource/montserrat/700.css";
import ReturnButton from "../../../components/ReturnButton";

export default function Home() {
  let { id }: any = {};
  id = useParams();
  id = id.id;
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");
  const [isGreater] = useMediaQuery("(min-width: 1200px)");

  const [campaign, setCampaign] = useState<any>([]);
  const [institute, setInstitute] = useState<any>([]);
  useEffect(() => {
    const getCampaign = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: `/campaign/id/${id}`,
      });

      setCampaign(req.data);
      setInstitute(req.data.user);
    };

    getCampaign();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  window.scrollTo(0,0);
  return (
    <Box backgroundColor="gray.200">
      <Header />
      <ReturnButton
        title="Voltar para lista de campanhas"
        route="/campaigns"
      />
      <Box padding={!isDesktop ? "50px 5px" : "50px"} textAlign="center">
        <Box padding={isGreater ? "0 20%" : "0 5px"}>
          <Grid
            templateColumns={isMobile ? "" : "repeat(3, 1fr)"}
            templateRows={isMobile ? "repeat(2, 1fr)" : ""}
          >
            <GridItem
              colSpan={isMobile ? 1 : 2}
              textAlign={isMobile ? "center" : "left"}
            >
              <Heading>
                <Text
                  display="inline"
                  fontSize={isMobile ? "35px" : "55px"}
                  fontFamily="Comfortaa"
                  color="white"
                  backgroundColor="#ED6A5A"
                >
                  {campaign ? campaign.title : ""}
                </Text>
              </Heading>
              <Box marginTop="50px">
                <Text
                  fontSize={isMobile ? "18px" : "24px"}
                  color="bluish.100"
                  lineHeight="31.69px"
                  // padding={isGreater ? "0 20%" : "0 5px"}
                >
                  {campaign ? campaign.description : ""}
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box className={detailsStyle["card-wrapper"]}>
                <Box className={detailsStyle["card"]}>
                  <Box className={detailsStyle["card-text"]}>
                    Campanha promovida por:
                  </Box>
                  <Box className={detailsStyle["card-image"]}>
                    <Image
                      src={institute?.image}
                    />
                  </Box>
                  <Box className={detailsStyle["card-title"]} title={institute?.name}>
                    {institute?.name}
                  </Box>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box
          marginTop="50px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Como doar?</Heading>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Para fazer uma doação, entre em contato com a instituição através
              dos contatos abaixo
            </Text>
            <Box>
              <Box
                fontSize="22px"
                borderRadius="50px"
                bg="bluish.100"
                color="white"
                padding="12px 50px"
                boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                href="#contacts"
                as={Link}
                _hover={{
                  textDecoration: "none",
                  background: "bluish.200",
                  transition: ".5s",
                }}
              >
                Doar
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <Heading color="bluish.100">Veja fotos da campanha</Heading>
          <Box margin="70px 0" textAlign="center">
            <Slider {...settings}>
              {campaign?.images?.map((image: any = []) => (
                <Box className={detailsStyle["image-slide"]}>
                  <Image
                    objectFit="cover"
                    src={image}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
          id="contacts"
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Contato</Heading>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Telefone: {institute?.telephone}
            </Text>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Email: {institute?.username}
            </Text>
            <Box>
              <HStack spacing="24px">
                <Box>
                  <Tooltip
                    hasArrow
                    label="E-mail da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={`mailto:${institute?.username}`}
                    >
                      <FaRegEnvelope size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                {/* <Box hidden={!institute.instagram}>
                  <Tooltip
                    hasArrow
                    label="Instagram da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box color="bluish.100" as={Link} href={institute.instagram}>
                      <FaInstagram size={50} />
                    </Box>
                  </Tooltip>
                </Box> */}
                {/* <Box hidden={!institute.facebook}>
                  <Tooltip
                    hasArrow
                    label="Facebook da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box color="bluish.100" as={Link} href={institute.facebook}>
                      <FaFacebookSquare size={48} />
                    </Box>
                  </Tooltip>
                </Box> */}
                {/*
                <Box>
                  <Tooltip
                    hasArrow
                    label="WhatsApp da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={`http://api.whatsapp.com/send/?phone=55${institute?.telephone}`}
                    >
                      <FaWhatsapp size={48} />
                    </Box>
                  </Tooltip>
                </Box>
                */}
                {/* <Box hidden={!institute.url}>
                  <Tooltip
                    hasArrow
                    label="Site da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={institute.url}
                    >
                      <FaGlobe size={48} />
                    </Box>
                  </Tooltip>
                </Box> */}
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
