import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import { Link, Tooltip } from "@chakra-ui/react";
import { useState, ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../Home/HeadLogo";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function LayoutDesktop(): ReactElement {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <Box
        as="header"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
        backgroundColor="bluish.100"
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
            <HStack spacing={10} margin={{ lg: "initial" }} pt={2}>
              <Heading
                color="white"
                fontWeight="none"
                size="md"
                cursor="pointer"
                as={RouterLink}
                to="/login"
              >
                Login
              </Heading>
              <Heading
                color="white"
                fontWeight="none"
                size="md"
                cursor="pointer"
                as={RouterLink}
                to="/register"
              >
                Cadastro
              </Heading>
            </HStack>
          </Flex>
        </div>
      </Box>
      {showMenu ? (
        <Box
          as="header"
          boxShadow="5px 5px 10px rgba(0, 0, 0, 0.3)"
          backgroundColor="brownish.200"
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
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="/campaigns"
              as={Link}
            >
              Campanhas
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="/institutes"
              as={Link}
            >
              Instituições
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="/about"
              as={Link}
            >
              Sobre
            </Heading>
            <Heading
              color="bluish.100"
              fontWeight="none"
              size="md"
              cursor="pointer"
              href="/contact"
              as={Link}
            >
              Contatos
            </Heading>
          </Flex>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}
