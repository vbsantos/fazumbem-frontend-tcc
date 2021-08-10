import { Box, Flex, Heading } from "@chakra-ui/layout";
import { 
  Link, 
  Tooltip, 
  useDisclosure, 
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../Home/HeadLogo";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function LayoutMobile(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              label={!isOpen ? "Exibir menu" : "Ocultar menu"} 
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
                onClick={onOpen}
              >
                <HamburgerIcon marginRight={3} marginBottom={1} />
                  Menu
              </Heading>
            </Tooltip>
            <HeadLogo height="7rem" width="7rem" />
          </Flex>
        </div>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} onEsc={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent background={"brownish.200"}>
          <ModalHeader color={"bluish.100"} fontWeight="none">Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul style={{ listStyle : "none" }}>
              <li>
                <Box 
                  color="bluish.100"
                  width="100%" 
                  _hover={{ 
                    textDecoration: "none", 
                    color: "white",
                    transition: ".1s" 
                  }}
                >
                  <Heading
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    href="/campaigns"
                    _hover={{ 
                      textDecoration: "none"
                    }}
                    as={Link}
                  >
                    Campanhas
                  </Heading>
                </Box>
              </li>
              <li>
                <Box 
                  color="bluish.100"
                  width="100%" 
                  _hover={{ 
                    textDecoration: "none", 
                    color: "white",
                    transition: ".1s" 
                  }}
                >
                  <Heading
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    href="/institutes"
                    _hover={{ 
                      textDecoration: "none"
                    }}
                    as={Link}
                  >
                    Instituições
                  </Heading>
                </Box>
              </li>
              <li>
                <Box 
                  color="bluish.100"
                  width="100%" 
                  _hover={{ 
                    textDecoration: "none", 
                    color: "white",
                    transition: ".1s" 
                  }}
                >
                  <Heading
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    href="/about"
                    _hover={{ 
                      textDecoration: "none"
                    }}
                    as={Link}
                  >
                    Sobre
                  </Heading>
                </Box>
              </li>
              <li>
                <Box 
                  color="bluish.100"
                  width="100%" 
                  _hover={{ 
                    textDecoration: "none", 
                    color: "white",
                    transition: ".1s" 
                  }}
                >
                  <Heading
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    href="/contact"
                    _hover={{ 
                      textDecoration: "none"
                    }}
                    as={Link}
                  >
                    Contatos
                  </Heading>
                </Box>
              </li>
              <Divider borderBottom="1px solid #034074" pt={4} mb={4} />
              <li>
                <Flex
                  maxW="1400px"
                  padding={0}
                  justify="space-between"
                  align="center"
                  wrap="wrap"
                  margin="0 auto"
                  mb={2}
                >
                  <Heading
                    color="#034074"
                    border="2px solid #034074"
                    borderRadius="15px"
                    padding={1}
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    _hover={{ 
                      color: "white",
                      textDecoration: "none", 
                      background: "bluish.100", 
                      borderColor: "bluish.100",
                      transition: ".1s" 
                    }}
                    as={RouterLink}
                    to="/login"
                  >
                    Login
                  </Heading>
                  <Heading
                    color="#034074"
                    border="2px solid #034074"
                    borderRadius="15px"
                    padding={1}
                    fontWeight={500}
                    size="md"
                    cursor="pointer"
                    _hover={{ 
                      color: "white",
                      textDecoration: "none", 
                      borderColor: "bluish.100",
                      background: "bluish.100",
                      transition: ".1s" 
                    }}
                    as={RouterLink}
                    to="/register"
                  >
                    Cadastro
                  </Heading>
                </Flex>
              </li>
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
