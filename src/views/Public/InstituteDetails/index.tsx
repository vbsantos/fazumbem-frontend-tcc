import detailsStyle from "../../../css/InstituteDetails.module.css";
import campaignStyles from "../../../css/Campaigns.module.css";
// import "../../../css/campaign-images-slider.css";
import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Image,
  Tooltip,
  Grid,
  GridItem,
  Link,
  Text,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { httpClient } from "../../../services/httpClient";
import {
  FaRegEnvelope,
  FaInstagram,
  FaFacebookSquare,
  FaGlobe,
} from "react-icons/fa";
import Slider from "react-slick";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import ReturnButton from "../../../components/ReturnButton";
import "@fontsource/montserrat/700.css";

export default function Home() {
  let { id }: any = {};
  id = useParams();
  id = id.id;
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");
  const [isGreater] = useMediaQuery("(min-width: 1200px)");
  const history = useHistory();
  const [institute, setInstitute] = useState<any>([]);
  const [campaigns, setCampaigns] = useState<any>([]);
  useEffect(() => {
    const getInstitute = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: `/user/id/${id}`,
      });

      setInstitute(req.data);
      setCampaigns(req.data.campaigns);
    };

    getInstitute();
  }, [id]);

  let slides;
  if (isMobile) slides = 1;
  else if (campaigns.length < 3) slides = campaigns.length;
  else if (isDesktop) slides = 3;
  else slides = 2;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  };
  window.scrollTo(0, 0);
  return (
    <Box backgroundColor="gray.200">
      <Header />
      <ReturnButton
        title="Voltar para lista de instituições"
        route="/institutes"
      />
      <Box padding={!isDesktop ? "50px 5px" : "50px"} textAlign="center">
        <Box padding={isGreater ? "0 20%" : "0 5px"}>
          <Grid
            templateColumns={isMobile ? "" : "repeat(3, 1fr)"}
            templateRows={isMobile ? "repeat(2, 1fr)" : ""}
            columnGap={12}
            rowGap={6}
          >
            <GridItem colSpan={1} rowSpan={1}>
                  <Box className={detailsStyle["institute-image"]}>
                    <Image
                      src={institute.image}
                    />
                  </Box>
            </GridItem>
            <GridItem
              colSpan={isMobile ? 1 : 2}
              rowSpan={1}
              textAlign={isMobile ? "center" : "left"}
            >
              <Heading margin={"6% 0"}>
                <Text
                  display="inline"
                  fontSize={isMobile ? "35px" : "55px"}
                  fontFamily="Comfortaa"
                  color="white"
                  backgroundColor="#ED6A5A"
                >
                  {institute.name}
                </Text>
              </Heading>
            </GridItem>
            <GridItem
              colSpan={isMobile ? 1 : 3}
              rowSpan={1}
              textAlign={isMobile ? "center" : "left"}
            >
              <Box>
                <Text
                  id="insituteDescription"
                  fontSize={isMobile ? "18px" : "24px"}
                  color="bluish.100"
                  lineHeight="31.69px"
                  // padding={isGreater ? "0 20%" : "0 5px"}
                  // html={(institute.description) ? institute.description.replace(/\\n/g, '<br>') : ""}
                >
                  {institute.description}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box
          hidden={!institute.campaigns}
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <Heading color="bluish.100">Campanhas desta instituição</Heading>
          <Box margin="70px 0" textAlign="center">
            <Slider {...settings}>
              {campaigns.map((campanha: any = []) => (
                <Box className={campaignStyles["card-wrapper"]} key={campanha.id} transform="scale(0.8)">
                  <Box className={campaignStyles["card"]}>
                    <Box className={campaignStyles["card-image"]}>
                      <Image
                        src={campanha.images[0]}
                      />
                    </Box>
                    <Box className={campaignStyles["card-title"]} title={campanha.title}>
                      {campanha.title}
                    </Box>
                    <Box className={campaignStyles["card-description"]}>
                      {campanha.description}
                    </Box>
                    <Box className={campaignStyles["campaign-icons"]} textAlign="center">
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
                            transform="translateY(-3px)"
                            bgColor="white"
                            icon={<InfoIcon />}
                            onClick={() => history.push(`/campaign/${campanha.idCampaign}`)}
                            _hover={{
                              bgColor: "#ED6A5A",
                              color: "white"
                            }}
                          />
                        </Tooltip>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Box
          marginTop="100px"
          padding={isGreater ? "0 20%" : "0 5px"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack align={isMobile ? "center" : "left"} spacing={10}>
            <Heading color="bluish.100">Contato</Heading>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Telefone: {institute.telephone}
            </Text>
            <Text fontSize={isMobile ? "22px" : "24px"} color="bluish.100">
              Email: {institute.username}
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
                      href={`mailto:${institute.username}`}
                    >
                      <FaRegEnvelope size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box hidden={!institute.instagram}>
                  <Tooltip
                    hasArrow
                    label="Instagram da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      color="bluish.100"
                      as={Link}
                      href={institute.instagram}
                    >
                      <FaInstagram size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box hidden={!institute.facebook}>
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
                </Box>
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
                      href={`http://api.whatsapp.com/send/?phone=55${institute.telephone}`}
                    >
                      <FaWhatsapp size={48} />
                    </Box>
                  </Tooltip>
                </Box>
                */}
                <Box hidden={!institute.url}>
                  <Tooltip
                    hasArrow
                    label="Site da instituição"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box color="bluish.100" as={Link} href={institute.url}>
                      <FaGlobe size={48} />
                    </Box>
                  </Tooltip>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
