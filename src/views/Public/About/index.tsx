/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import {
  Text,
  Link,
  Image,
  Grid,
  useMediaQuery
} from "@chakra-ui/react";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";
import AboutImage from "../../../assets/images/About/about.png";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  const [isGreater] = useMediaQuery("(min-width: 1200px)")
  return (
    <Box backgroundColor="gray.200" >
      <Header />
      <Box
        padding={!isDesktop ? "50px 5px" : "50px"}
        textAlign="center"
        id="about"
      >
        <Heading>
          <Text
            display="inline"
            fontSize={isMobile ? "35px" : "55px"}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
          >
            &nbsp;Sobre&nbsp;
          </Text>
        </Heading>
        <Box marginTop="50px;">
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
            padding={isGreater ? "0 20%" : "0 5px"}
          >
            Faz um bem! propõe-se, como uma plataforma virtual interativa, a
            <strong> interligar doadores e receptores de recursos</strong>, centralizando
            as necessidades de instituições e organizações sociais de Santa Maria. Traz,
            portanto, <strong>informações sobre campanhas que estão acontecendo </strong>
            na cidade e como doadores e voluntários podem colaborar.
          </Text>
        </Box>
        <Box
          marginTop="50px;"
        >
          <Text
            fontSize={isMobile ? "18px" : "26px"}
            color="bluish.100"
            lineHeight="31.69px"
            padding={isGreater ? "0 25%" : "0 5px"}
          >
            A ideia dessa plataforma surgiu em um contexto
            de emergência de saúde pública mundial
            com a pandemia de COVID-19 que intensificou a necessidade de
            ações sociais por parte da sociedade civil
            organizada e do Estado, especialmente através
            das políticas públicas e sociais.
          </Text>
        </Box>
        <Box
          padding={isGreater ? "0 25%" : "0 5px"}
        >
          <Grid
            marginTop="50px;"
            templateColumns={isMobile ? "" : "repeat(2, 50%)"}
          >
            <Box paddingTop={isMobile ? "" : "30%"}>
              <VStack spacing={isMobile ? "40px" : "80px"}>
                <Box
                  borderRadius="50px"
                  bg="#ED6A5A"
                  padding="5px 28px 7px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                  href="/about"
                  as={Link}
                  _hover={{
                    textDecoration: "none",
                    background: "#F18C7E",
                    transition: ".5s",
                  }}
                >
                  <Text
                    fontSize="20px"
                    fontFamily="Montserrat"
                    color="white"
                    fontWeight="500"
                    textAlign="center"
                  >
                    Entre em contato
                  </Text>
                </Box>
                <Box
                  borderRadius="50px"
                  bg="bluish.100"
                  padding="5px 28px 7px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                  href="/"
                  as={Link}
                  _hover={{
                    textDecoration: "none",
                    background: "bluish.200",
                    transition: ".5s",
                  }}
                >
                  <Text
                    fontSize="20px"
                    fontFamily="Montserrat"
                    color="white"
                    fontWeight="500"
                    textAlign="center"
                  >
                    Termos de uso
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box marginTop={isMobile ? "50px" : ""}>
              <Image
                src={AboutImage}
                alt="decorative image"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
