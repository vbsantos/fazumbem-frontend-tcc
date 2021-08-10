/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/layout";
import { 
  IconButton, 
  Image, 
  SimpleGrid,
  Tooltip,
  Text
} from "@chakra-ui/react";
import "../../../css/instituicoes.css";
import Header from "../../../components/PublicHeader";
import Footer from "../../../components/Footer";

function truncateName(name: String) {
  if (name.length > 12) {
    return name.substr(0, 12);
  }
}
/*function showCampaignDetails(){
  console.log("show details");
}*/

// function truncateName(name: String) {
//   if (name.length > 12) {
//     return name.substr(0, 12);
//   }
// }


export default function Home() {
  /* const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)") */
  
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
    <Box backgroundColor="gray.200">
      <Header />
      <Heading
        color="bluish.100"
        size="2xl"
        textAlign="center"
        mt="5rem"
        mb="2rem"
      >
        INSTITUIÇÕES PARTICIPANTES
      </Heading>
      <Text color="bluish.100" fontSize="1.4rem" m={10} textAlign="center">
        O projeto Faz um Bem! é a união de instituições e organizações sociais 
        de Santa Maria para promover um meio de comunicação entre doadores e 
        receptores de recuros. Confira a seguir as instituições que estão 
        participando do projeto atualmente e conheça um pouco mais sobre seu
        trabalho.
      </Text>
      <SimpleGrid
        minChildWidth={{ base: "40%", sm: "20%", lg: "150px" }}
        spacing={10}
        paddingX={{ base: 4, md: 6, lg: 10 }}
        paddingY={4}
        pb="5rem"
        maxW="1600px"
        margin="0 auto"
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
    <Footer />
  </Box>
  );
}
