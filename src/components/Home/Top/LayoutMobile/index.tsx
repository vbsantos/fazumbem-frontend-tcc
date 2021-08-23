
import "../../../../css/instituicoes.css";
import { Box, Heading } from "@chakra-ui/layout";
import { ReactElement } from "react";
import {
  Image,
  Text
} from "@chakra-ui/react";
import blueLogo from "../../../../assets/images/logo.svg";

export default function LayoutDesktop(): ReactElement {

  return (
    <div>
      <Box
        width="100%"
        color="brand.300"
        p={10}
        id="about"
      >
        <Image
          boxSize="450px"
          height="20rem"
          objectFit="contain"
          mt={0}
          mb={10}
          src={blueLogo}
          alt="brand logo"
        />
        <Heading color="bluish.100" size="2xl" textAlign="center">
          <Box
            as="button"
            // TODO: href="/about"
            borderRadius={16}
            bg="bluish.100"
            color="white"
            p={4}
            pl={10}
            pr={10}
            mb={20}
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
      </Box>
    </div>
  );
}
