import {
  Text,
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
  Image,
  /* Divider */
} from "@chakra-ui/react";

import { FaChevronDown } from "react-icons/fa";

import Footer from "../../../components/Private/Footer";

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { httpClient } from "../../../services/httpClient";
import { useAuthState } from "../../../context";

function textTruncate(text: String) {
  if (text.length > 80) {
    return text.substr(0, 80) + "...";
  }
}

interface Props {}
const Campaigns = (props: Props) => {
  const [list, setList] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened] = useState<any>();
  const history = useHistory();

  const userDetails = useAuthState();
  const isSuperUser = userDetails?.user?.group === "Curador";

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
            paddingX="1rem"
          >
            {isSuperUser ? "Campanhas" : "Minhas Campanhas"}
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
            Conheça as campanhas que estão precisando de doações nesse momento.
          </Text>
        </Box>

        <>
          <Box
            m="10"
            borderRadius="25px"
            overflow="hidden"
            backgroundColor="white"
            textAlign="center"
            color="bluish.100"
            boxShadow="2px 4px 9px rgba(0, 0, 0, 0.25)"
          >
            <Table variant="striped">
              <TableCaption>
                {isSuperUser
                  ? "Lista de todas campanhas do sistema"
                  : "Lista de campanhas desta instituição"}
              </TableCaption>
              <Thead backgroundColor="#ED6A5A">
                <Tr>
                  <Th color="white" font="Comfortaa">
                    Título
                  </Th>
                  <Th color="white" font="Comfortaa">
                    Descrição
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {list.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.title}</Td>
                    <Td>{textTruncate(item.description) || "--"}</Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton
                          as={Button}
                          colorScheme="brand"
                          rightIcon={<FaChevronDown />}
                          borderRadius="50px"
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
                <ModalHeader>Ver detalhes da campanha</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Text
                      fontSize="1.5rem"
                      textAlign="center"
                      fontWeight={500}
                      fontFamily="Comfortaa"
                      color="white"
                      backgroundColor="#ED6A5A"
                      display="inline"
                      mb={5}
                    >
                      &nbsp;{opened?.title}&nbsp;
                    </Text>
                  </Center>
                  <Stack spacing={2} pb={5}>
                    <Image
                      borderRadius="16px"
                      src={`https://fazumbem.inf.ufsm.br/images/entidades/1.png`}
                      mb={4}
                    />
                    <Text fontSize="1rem" fontWeight="bold">
                      Descrição da campanha
                    </Text>
                    <Text fontSize="1rem">{opened?.description}</Text>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </>

        <Footer />
      </Box>
    </>
  );
};

export default Campaigns;
