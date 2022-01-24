/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../../../css/Campaigns.module.css";
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack } from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  Tooltip,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FaLandmark } from "react-icons/fa";
import { httpClient } from "../../../services/httpClient";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import "@fontsource/montserrat/700.css";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");
  const [isGreater] = useMediaQuery("(min-width: 1200px)");
  const history = useHistory();

  const [list, setList] = useState<any[]>([]);
  const [empty, setEmptyness] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/campaign/all",
      });

      setList(req.data);
      if (!req.data.length) setEmptyness(true);
      else setEmptyness(false);
    };

    getList();
  }, [list.length, setEmptyness]);

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
            Campanhas em
            <br />
            andamento
          </Text>
        </Heading>
        <Box marginTop="50px">
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
            padding={isGreater ? "0 20%" : "0 5px"}
          >
            Conheça as campanhas que estão precisando de doações nesse momento!
          </Text>
        </Box>
        <Box marginTop="50px" padding={isGreater ? "0 20%" : "0 5px"}>
          <SimpleGrid
            minChildWidth="260px" //{{ base: "40%", sm: "20%", lg: "150px" }}
            spacing={10}
            paddingX={{ base: 4, md: 6, lg: 10 }}
            paddingY={4}
            pb="5rem"
            maxW="1600px"
            margin="0 auto"
            justify="center"
          >
            {list.map((campanha: any = []) => (
              <div className={styles["card-wrapper"]} key={campanha.idCampaign}>
                <div className={styles["card"]}>
                  <div className={styles["card-image"]}>
                    <Image
                      src={campanha.images.length > 0 && campanha.images[0]}
                    />
                  </div>
                  <div className={styles["card-title"]}>{campanha.title}</div>
                  <div className={styles["card-description"]}>
                    {campanha.description}
                  </div>
                  <Box className={styles["campaign-icons"]}>
                    <HStack spacing={10} justify="center">
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
                          onClick={() =>
                            history.push(`/campaign/${campanha.idCampaign}`)
                          }
                          _hover={{
                            bgColor: "#ED6A5A",
                            color: "white",
                          }}
                        />
                      </Tooltip>
                      <Tooltip
                        hasArrow
                        label="Instituição responsável"
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
                          icon={<FaLandmark />}
                          onClick={() =>
                            history.push(`/institute/${campanha?.user?.idUser}`)
                          }
                          _hover={{
                            bgColor: "#ED6A5A",
                            color: "white",
                          }}
                        />
                      </Tooltip>
                    </HStack>
                  </Box>
                </div>
              </div>
            ))}
            {empty ? (
              <Text
                display="inline"
                fontSize={isMobile ? "15px" : "20px"}
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
              >
                Não foram encontradas campanhas cadastradas até o momento
              </Text>
            ) : (
              ""
            )}
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
