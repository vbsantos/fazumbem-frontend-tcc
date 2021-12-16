import {
  Text,
  HStack,
  Center,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  ModalOverlay,
  Stack,
  /* Divider */
} from "@chakra-ui/react";

import { FaBullhorn, FaBuilding, FaChevronDown } from "react-icons/fa";

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { httpClient } from "../../../../services/httpClient";
import Footer from "../../../../components/Private/Footer";

interface Props {}
const Campaigns = (props: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [showSelf, setShowSelf] = useState(false);

  const [list, setList] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened] = useState<any>();
  const history = useHistory();
  useEffect(() => {
    const getList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/campaign",
      });

      setList(req.data);
    };

    getList();
  }, []);
  return (
    <>
      <Box backgroundColor="gray.100" m={0} p={0}>
        <Box
          backgroundColor="#ED6A5A"
          width="100%"
          color="brand.300"
          p={2}
        ></Box>
        <Box pt={10} textAlign="center">
          <Text
            fontSize="2.5rem"
            textAlign="center"
            fontWeight={500}
            fontFamily="Comfortaa"
            color="white"
            backgroundColor="#ED6A5A"
            display="inline"
          >
            &nbsp;Campanhas&nbsp;
          </Text>
        </Box>
        <Box>
          <Text
            color="bluish.100"
            fontSize="26px"
            textAlign="center"
            fontWeight={500}
            fontFamily="Comfortaa"
            m={5}
          >
            Conheça as campanhas que estão precisando de doações nesse momento
            ou verifique as campanhas cadastradas pela sua instituição.
            Selecione abaixo quais campanhas você deseja verificar.
          </Text>
        </Box>
        <Box m={20} mt={20} pb={10} color="bluish.100">
          <HStack>
            <Box
              width="100%"
              height="370px"
              borderRadius="25px"
              overflow="hidden"
              backgroundColor="white"
              textAlign="center"
              color="bluish.100"
              boxShadow="2px 4px 9px rgba(0, 0, 0, 0.25)"
              fontSize="1.8rem"
              transition="0.5s"
              border="1px solid transparent"
              cursor="pointer"
              _hover={{
                borderColor: "#ED6A5A",
                transform: "translateY(-10px)",
                transition: "0.5s",
              }}
              onClick={(event) => {
                setShowAll(true);
                setShowSelf(false);
              }}
            >
              <Center m={5} fontSize="5rem">
                <FaBuilding />
              </Center>
              <Text m={5} fontFamily="Comfortaa">
                Campanhas de outras instituições
              </Text>
              <Text
                fontSize="26px"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa"
                m={5}
              >
                Visualize as campanhas cadastradas por outras insituições
              </Text>
            </Box>
            <Box
              width="100%"
              height="370px"
              borderRadius="25px"
              overflow="hidden"
              backgroundColor="white"
              textAlign="center"
              color="bluish.100"
              boxShadow="2px 4px 9px rgba(0, 0, 0, 0.25)"
              fontSize="1.8rem"
              transition="0.5s"
              border="1px solid transparent"
              cursor="pointer"
              _hover={{
                borderColor: "#ED6A5A",
                transform: "translateY(-10px)",
                transition: "0.5s",
              }}
              onClick={(event) => {
                setShowAll(true);
                setShowSelf(false);
              }}
            >
              <Center m={5} fontSize="5rem">
                <FaBullhorn />
              </Center>
              <Text m={5} fontFamily="Comfortaa">
                Minhas campanhas
              </Text>
              <Text
                fontSize="26px"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa"
                m={5}
              >
                Visualize e edite as campanhas que foram cadastradas pela sua
                instituição
              </Text>
            </Box>
          </HStack>
        </Box>
        {showAll ? (
          <Box m="10">
            <Table variant="striped">
              <TableCaption>
                Lista de campanhas cadastradas pela sua instituição no sistema
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Título</Th>
                  <Th>Descrição</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {list.map((item) => (
                  <Tr>
                    <Td>{item.title}</Td>
                    <Td>{item.description}</Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton
                          as={Button}
                          colorScheme="brand"
                          rightIcon={<FaChevronDown />}
                        >
                          Ações
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              setOpened(item);
                              onOpen();
                            }}
                          >
                            Mais informações
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              history.push(
                                "/campanha/:id".replace(":id", item.idCampaign)
                              )
                            }
                          >
                            Editar
                          </MenuItem>
                          <MenuItem>Excluir</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Modal isOpen={isOpen && opened} onClose={onClose} size={"lg"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{opened?.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={2}>
                    <Text fontSize="md">Descrição</Text>
                    <Text fontSize="sm">{opened?.description}</Text>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        ) : (
          ""
        )}
        {showSelf ? (
          <Box m="10">
            <Table variant="striped">
              <TableCaption>
                Lista de campanhas cadastradas pela sua instituição no sistema
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Título</Th>
                  <Th>Descrição</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {list.map((item) => (
                  <Tr>
                    <Td>{item.title}</Td>
                    <Td>{item.description}</Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton
                          as={Button}
                          colorScheme="brand"
                          rightIcon={<FaChevronDown />}
                        >
                          Ações
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              setOpened(item);
                              onOpen();
                            }}
                          >
                            Mais informações
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              history.push(
                                "/campanha/:id".replace(":id", item.idCampaign)
                              )
                            }
                          >
                            Editar
                          </MenuItem>
                          <MenuItem>Excluir</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Modal isOpen={isOpen && opened} onClose={onClose} size={"lg"}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{opened?.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={2}>
                    <Text fontSize="md">Descrição</Text>
                    <Text fontSize="sm">{opened?.description}</Text>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        ) : (
          ""
        )}
        <Footer />
      </Box>
    </>
  );
};

export default Campaigns;
