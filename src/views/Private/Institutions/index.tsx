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
import { httpClient } from "../../../services/httpClient";

interface Props {}

const Institutions = (props: Props) => {
  const [list, setList] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [opened, setOpened] = useState<any>();

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
    <Box mt="10">
      <Table variant="striped">
        <TableCaption>
          Lista de instituições cadastradas no sistema
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>CNPJ</Th>
            <Th>Nº de usuários</Th>
            <Th></Th>
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
                    <MenuItem>Editar</MenuItem>
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
  );
};

export default Institutions;
