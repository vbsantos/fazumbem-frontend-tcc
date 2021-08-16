
import "../../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import { ReactElement } from "react";
import {
  Image,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import ImgLogo from "../../Logo";
//import TopImage from "../../../../assets/images/Home/top.png";
import TopImage from "../../../../assets/images/Home/top-v2.png";
import "@fontsource/montserrat/500.css"

export default function LayoutDesktop(): ReactElement {

  return (
    <div>
      <Box
        width="100%"
        color="brand.300"
        p={1}
        pb={20}
        id="about"
      >
        <Grid
          mt={20}
          gap={1}
        >
          <GridItem colStart={5} colEnd={10}>
            <ImgLogo type="bluish" />
          </GridItem>
          <GridItem
            colStart={10}
            colEnd={10}
          >
            <Image
              height="30rem"
              src={TopImage}
              alt="decorative image"
              objectFit="contain"
              mt="5rem"
            />
            {/*<Heading color="bluish.100" size="2xl" textAlign="center">*/}
              <Box
                as="button"
                borderRadius="50px"
                bg="#ED6A5A"
                color="white"
                position="absolute"
                top="21.5%"
                left="65%"
                padding="5px 18px 7px"
                /*pt={4}
                pl={10}
                pr={10}*/
                mb={20}
                width="max-content"
                boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                _hover={{
                  background: "#F18C7E",
                  transition: ".5s",
                }}
              >
                <Text
                  fontSize="2xl"
                  fontFamily="Montserrat"
                  color="white"
                  fontWeight="500"
                  textAlign="center"
                >
                  Saiba mais
                </Text>
              </Box>
            {/*</Heading>*/}
          </GridItem>
          <GridItem colStart={11} colEnd={14}></GridItem>
        </Grid>
      </Box>
    </div>
  );
}
