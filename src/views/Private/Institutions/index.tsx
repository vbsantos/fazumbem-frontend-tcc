import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  CircularProgress,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Private/Footer";
import { httpClient } from "../../../services/httpClient";

interface Props {}

const Institutions = (props: Props) => {
  const [list, setList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = "#EDF2F7";
  }, []);

  useEffect(() => {
    const getList = async () => {
      try {
        const req = await httpClient<any>({
          method: "GET",
          url: "/user/institution",
        });

        setList(req.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getList();
  }, []);

  return (
    <Box backgroundColor="gray.100" m={0} p={0}>
      <Box backgroundColor="#ED6A5A" width="100%" color="brand.300" p={2}></Box>
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
          Verifique as instituições que estão cadastradas no sistema e o número
          de usuários cadastrados para cada uma.
        </Text>
      </Box>

      {isLoading ? (
        <Center h="300px">
          <CircularProgress isIndeterminate color="brand.400" marginX="auto" />
        </Center>
      ) : (
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
              Lista de instituições cadastradas no sistema
            </TableCaption>
            <Thead backgroundColor="#ED6A5A">
              <Tr>
                <Th color="white" font="Comfortaa">
                  Nome
                </Th>
                <Th color="white" font="Comfortaa">
                  Email
                </Th>
                <Th color="white" font="Comfortaa">
                  CNPJ
                </Th>
                <Th color="white" font="Comfortaa"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {list.map((item) => (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.username}</Td>
                  <Td>{item.identifier}</Td>
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
                            history.push(
                              "/instituição/:id?viewInfo".replace(
                                ":id",
                                item.idUser
                              )
                            );
                          }}
                        >
                          Mais informações
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            history.push(
                              "/instituição/:id".replace(":id", item.idUser)
                            )
                          }
                        >
                          Editar
                        </MenuItem>
                        {/* <MenuItem>Excluir</MenuItem> */}
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}

      <Box h={150}></Box>
      <Footer />
    </Box>
  );
};

export default Institutions;
