import carouselStyle from "../../../css/Carousel.module.css";
import "../../../css/carousel-arrows.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/image";
import { FaLandmark } from "react-icons/fa";
import { HStack, IconButton, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/layout";

function showCampaignDetails(camp: Props) {
  console.log(camp.campanhas[0]);
}

interface Props {
  campanhas: {
    images:string[]
  }[];
}
export default function Carousel(listaCampanhas: Props) {

  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  let slides;
  if (isMobile) slides = 1;
  else if (listaCampanhas.campanhas.length < 3) slides = listaCampanhas.campanhas.length;
  else if (isDesktop) slides = 3;
  else slides = 2;
  let settings = {
    dot: true,
    infinite: true,
    speed: 400,
    slidesToShow: slides,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  let imageMore = listaCampanhas.campanhas[0];
  console.log(imageMore);
  return (
    <>
      <Slider {...settings} className={carouselStyle["carousel"]}>
        {listaCampanhas.campanhas.map((campanha: any = {}) => (
          <Box className={carouselStyle["card-wrapper"]} key={campanha.idCampaign}
            maxWidth={(slides === 1) ? "40%" : ((slides === 2) ? "80%" : "100%")}>
            <Box
              className={carouselStyle["card"]}
              onClick={(e) => showCampaignDetails(listaCampanhas)}
            >
              <Box className={carouselStyle["card-image"]}>
                <Image
                  src={campanha.images[0]}
                />
              </Box>
              <Box className={carouselStyle["icons"]}>
                <HStack spacing={8}>
                  <Tooltip
                    hasArrow
                    label="Ver informações"
                    bg="bluish.100"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.4s"
                    ml={2}
                  >
                    <IconButton
                      aria-label="info"
                      borderRadius="10px"
                      bgColor="white"
                      color="bluish.100"
                      icon={<InfoIcon />}
                      _hover={{
                        bgColor: "#ED6A5A",
                        color: "white"
                      }}
                      as={RouterLink}
                      to={`/campaign/${campanha.idCampaign}`}
                    />
                  </Tooltip>
                  <Tooltip
                    hasArrow
                    label="Ver Instituição"
                    bg="bluish.100"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.4s"
                    ml={2}
                  >
                    <IconButton
                      aria-label="info"
                      borderRadius="10px"
                      bgColor="white"
                      color="bluish.100"
                      icon={<FaLandmark />}
                      _hover={{
                        bgColor: "#ED6A5A",
                        color: "white"
                      }}
                      as={RouterLink}
                      to={`/institute/${campanha?.user?.idCampaign}`}
                      // onClick={() => history.push(`/institute/${campanha.user.idUser}`)}
                    />
                  </Tooltip>
                </HStack>
              </Box>
            <Box className={carouselStyle["details"]}>
              {campanha.title}
            </Box>
            </Box>
          </Box>
        ))}

        <Box className={carouselStyle["card-wrapper"]} id="moreCampaigns" key="more"
          maxWidth={(slides === 1) ? "40%" : ((slides === 2) ? "80%" : "100%")}>
          <Box
            className={carouselStyle["card"]}
            onClick={(e) => showCampaignDetails(listaCampanhas)}
          >
            <Box className={carouselStyle["card-image-more"]}>
              <Image
                filter="blur(4px) brightness(40%);"
                src={(listaCampanhas.campanhas[0]) ? listaCampanhas.campanhas[0].images[0] : ""}
              />
              <Box className={carouselStyle["more-details"]}>
                <Heading
                  color="bluish.100"
                  fontSize="24px"
                  fontWeight="700"
                  // size="md"
                  cursor="pointer"
                  as={RouterLink}
                  to="/campaigns"
                >
                  Ver todas as campanhas
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>
       </Slider>
    </>
  );
}
