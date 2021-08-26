import { ChevronDownIcon } from "@chakra-ui/icons";
import {
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
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { httpClient } from "../../../services/httpClient";
import Footer from "../../../components/Private/Footer";

interface Props {}

const Institutions = (props: Props) => {
  const [list, setList] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened] = useState<any>();
  const history = useHistory();
  useEffect(() => {
    document.body.style.backgroundColor = "#EDF2F7";
  }, []);
  useEffect(() => {
    const getList = async () => {
      const req = await httpClient<any>({
        method: "GET",
        url: "/institution",
      });

      setList(req.data);
    };

    getList();
  }, []);

  return (
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
          &nbsp;Instituições&nbsp;
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
          Verifique as instituições que estão cadastradas no sistema e o número de usuários cadastrados para cada uma.
        </Text>
      </Box>
      <Box m="10" 
        borderRadius= "25px"
        overflow= "hidden"
        backgroundColor= "white"
        textAlign= "center"
        color= "bluish.100"
        boxShadow= "2px 4px 9px rgba(0, 0, 0, 0.25)"
      >
        <Table variant="striped">
          <TableCaption>
            Lista de instituições cadastradas no sistema
          </TableCaption>
          <Thead backgroundColor="#ED6A5A">
            <Tr>
              <Th color="white" font="Comfortaa">Nome</Th>
              <Th color="white" font="Comfortaa">Email</Th>
              <Th color="white" font="Comfortaa">CNPJ</Th>
              <Th color="white" font="Comfortaa">Nº de usuários</Th>
              <Th color="white" font="Comfortaa"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.cnpj}</Td>
                <Td>{item?.users?.length}</Td>
                <Td isNumeric>
                  <Menu>
                    <MenuButton
                      as={Button}
                      colorScheme="brand"
                      rightIcon={<ChevronDownIcon />}
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
                            "/instituição/:id".replace(":id", item.idInstitution)
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
            <ModalHeader>{opened?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={2}>
                <Text fontSize="md">Informações</Text>
                <Text fontSize="sm">{opened?.cnpj}</Text>
                <Text fontSize="sm">{opened?.email}</Text>
                <Text fontSize="sm">{opened?.telephone}</Text>
                <Divider />
                <Text fontSize="md">Descrição</Text>
                <Text fontSize="sm">{opened?.description}</Text>
                <Divider />
                <Box>
                  <Text fontSize="md">Endereço</Text>
                  <Text fontSize="sm">
                    {opened?.address?.street} - {opened?.address?.number} -{" "}
                    {opened?.address?.complement}
                  </Text>
                  <Text fontSize="sm">{opened?.address?.city}</Text>
                  <Text fontSize="sm">{opened?.address?.state}</Text>
                  <Text fontSize="xs">{opened?.address?.cep}</Text>
                </Box>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      <Box h={150}></Box>
      <Footer />
    </Box>
  );
};

export default Institutions;
