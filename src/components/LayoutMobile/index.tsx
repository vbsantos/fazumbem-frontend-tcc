import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import {
  Link,
  Tooltip,
  useDisclosure,
  Divider,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeadLogo from "../Home/HeadLogo";
import { HamburgerIcon } from "@chakra-ui/icons";

function scrollToElement(element: string) {
  (document.getElementById(element) as HTMLInputElement).scrollIntoView();
}

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
        <ModalContent background={"#ED6A5A"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody color="white" padding="20px 0">
            <VStack spacing="24px">
              <Heading
                fontSize="18px"
                fontWeight="400"
                fontFamily="Comfortaa"
                href="/campaigns"
                as={Link}
              >
                Campanhas
              </Heading>
              <Heading
                fontSize="18px"
                fontWeight="400"
                fontFamily="Comfortaa"
                as={Link}
                onClick={() => {
                  scrollToElement('institutes');
                  onClose();
                }}
              >
                Instituições
              </Heading>
              <Heading
                fontSize="18px"
                fontWeight="400"
                fontFamily="Comfortaa"
                href="/about"
                as={Link}
              >
                Sobre
              </Heading>
              <Heading
                fontSize="18px"
                fontWeight="400"
                fontFamily="Comfortaa"
                href="/contact"
                as={Link}
              >
                Contato
              </Heading>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={2}>
              <Heading
                color="white"
                fontWeight="none"
                fontSize="18px"
                backgroundColor="bluish.100"
                padding="12px 32px"
                borderRadius="50px"
                boxShadow="0px 4px 4px 0px #00000040"
                size="md"
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
                padding="12px 24px"
                borderRadius="50px"
                boxShadow="0px 4px 4px 0px #00000040"
                size="md"
                cursor="pointer"
                as={RouterLink}
                to="/register"
              >
                Cadastro
              </Heading>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
