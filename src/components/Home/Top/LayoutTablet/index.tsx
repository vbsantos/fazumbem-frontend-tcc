
import "../../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { 
  Image, 
  Text,
  Grid, 
  GridItem
} from "@chakra-ui/react";
import TopImage from "../../../../assets/images/Home/top.png";
import blueLogo from "../../../../assets/images/logo.svg";

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
          mt={10}
          gap={1}
        >
          <GridItem colStart={3} colEnd={9}> 
            <Image
              boxSize="450px"
              height="20rem"
              objectFit="contain"
              mt={0}
              mb={10}
              src={blueLogo}
              alt="brand logo"
            />
          </GridItem>
          <GridItem 
            colStart={9} 
            colEnd={12}
          >
            <Image 
              boxSize="450px"
              height="20rem"
              objectFit="contain"
              mt={0}
              mb="-4rem"
              src={TopImage}
              alt="decarative image"
            />
            <Heading color="bluish.100" size="2xl" textAlign="center">
              <Box
                as="button"
                borderRadius={16}
                bg="bluish.100"
                color="white"
                p={4}
                pl={10}
                pr={10}
                width="max-content"
                boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
                _hover={{
                  background: "bluish.200",
                  transition: ".5s",
                }}
              >
                <Text
                  fontSize="2xl"
                  color="white"
                  fontWeight="medium"
                  textAlign="center"
                >
                  Saiba mais
                </Text>
              </Box>
            </Heading>
          </GridItem>
          <GridItem colStart={11} colEnd={16}></GridItem>
        </Grid>
      </Box>
    </div>
  );
}
