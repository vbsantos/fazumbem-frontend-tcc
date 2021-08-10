/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import "../../../css/instituicoes.css";
import { Box } from "@chakra-ui/layout";
import { 
  Text, 
  SimpleGrid, 
  useMediaQuery
} from "@chakra-ui/react";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  return (
    <Box backgroundColor="gray.200" >
      <Header />
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
                color="bluish.200"
              >
                O projeto Faz um Bem! tem por objetivo impulsionar uma plataforma 
                virtual interativa que centralize necessidades de instituições e 
                organizações sociais de Santa Maria para promover maior visibilidade 
                para as campanhas e parcerias. Faz um bem! propõe-se como uma 
                plataforma virtual interativa, incentivadora e mediadora entre doadores 
                e receptores de recursos.
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
                SOBRE O FAZ UM BEM!
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
                SOBRE O FAZ UM BEM!
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
                color="bluish.200"
              >
              O projeto Faz um Bem! tem por objetivo impulsionar uma plataforma 
              virtual interativa que centralize necessidades de instituições e 
              organizações sociais de Santa Maria para promover maior visibilidade 
              para as campanhas e parcerias. Faz um bem! propõe-se como uma 
              plataforma virtual interativa, incentivadora e mediadora entre doadores 
              e receptores de recursos.
              </Text>
            </Box>
          </SimpleGrid>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
