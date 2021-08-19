import { Box, Flex, Heading, VStack } from "@chakra-ui/layout";
import { Link, Tooltip } from "@chakra-ui/react";
import { useState, ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../Home/HeadLogo";
import { HamburgerIcon } from "@chakra-ui/icons";

function scrollToElement(element: string) {
  (document.getElementById(element) as HTMLInputElement).scrollIntoView();
}

export default function LayoutDesktop(): ReactElement {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <Box
        as="header"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
        backgroundColor="bluish.100"
        padding="0 50px"
      >
        <div>
          <Flex
            maxW="1400px"
            padding={0}
            justify="space-between"
            align="center"
            wrap="wrap"
            margin="0 auto"
          >
            <Tooltip
              hasArrow
              label={!showMenu ? "Exibir menu" : "Ocultar menu"}
              bg="brownish.200"
              color="bluish.100"
              placement="right"
              borderRadius="8px"
              transition="0.4s"
              ml={2}
            >
              <Heading
                color="white"
                fontWeight="none"
                size="md"
                cursor="pointer"
                onClick={(event) => setShowMenu(!showMenu)}
              >
                <HamburgerIcon marginRight={3} marginBottom={1} />
                  Menu
              </Heading>
            </Tooltip>
            <HeadLogo height="7rem" width="7rem" />
            <VStack spacing={2} margin={{ lg: "initial" }} pt={2}>
              <Heading
                color="white"
                fontWeight="none"
                fontSize="18px"
                backgroundColor="#ED6A5A"
                padding="8px 35px"
                borderRadius="50px"
                boxShadow="0px 4px 4px 0px #00000040"
                cursor="pointer"
                as={RouterLink}
                to="/login"
              >
                Login
              </Heading>
              <Heading
                color="bluish.100"
                fontWeight="none"
                fontSize="18px"
                backgroundColor="white"
                padding="8px 20px"
                borderRadius="50px"
                boxShadow="0px 4px 4px 0px #00000040"
                cursor="pointer"
                as={RouterLink}
                to="/register"
              >
                Cadastro
              </Heading>
            </VStack>
          </Flex>
        </div>
      </Box>
      {showMenu ? (
        <Box
          as="header"
          // boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
          backgroundColor="#ED6A5A"
          id="menu"
        >
          <Flex
            maxW="1400px"
            paddingX={{ base: "35px", sm: "50px" }}
            justify="space-between"
            align="center"
            wrap="wrap"
            margin="0 auto"
            p="0.7rem"
          >
            <Heading
              color="white"
              fontWeight="none"
              fontSize="18px"
              fontFamily="Comfortaa"
              cursor="pointer"
              href="/campaigns"
              as={Link}
            >
              Campanhas
            </Heading>
            <Heading
              color="white"
              fontWeight="none"
              fontSize="18px"
              fontFamily="Comfortaa"
              cursor="pointer"
              href="#instituicoes"
              as={Link}
              onClick={() => scrollToElement('institutes')}
            >
              Instituições
            </Heading>
            <Heading
              color="white"
              fontWeight="none"
              fontSize="18px"
              fontFamily="Comfortaa"
              cursor="pointer"
              href="#sobre"
              as={Link}
              onClick={() => scrollToElement('about')}
            >
              Sobre
            </Heading>
            <Heading
              color="white"
              fontWeight="none"
              fontSize="18px"
              fontFamily="Comfortaa"
              cursor="pointer"
              href="#contacts"
              as={Link}
              onClick={() => scrollToElement('footer')}
            >
              Contato
            </Heading>
          </Flex>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
