import {
  Box,
  Button,
  Center,
  CircularProgress,
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ConfirmModal from "../../../components/ConfirmModal";
import Footer from "../../../components/Private/Footer";
import { useAuthState } from "../../../context";
import { httpClient } from "../../../services/httpClient";

function textTruncate(text: String) {
  if (text && text?.length > 80) {
    return text.substr(0, 80) + "...";
  }

  return text;
}

interface Props {}
const Campaigns = (props: Props) => {
  const [list, setList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState<string | null>();

  const history = useHistory();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userDetails = useAuthState();
  const isSuperUser = userDetails?.user?.group === "Curator";

  const getList = async () => {
    setIsLoading(true);

    const req = await httpClient<any>({
      method: "GET",
      url: isSuperUser
        ? "/campaign/all"
        : `/campaign/by/${userDetails?.user?.username}`,
    });

    setList(
      req?.data?.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    );
  };

  useEffect(() => {
    getList().finally(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        backgroundColor="gray.100"
        m={0}
        p={0}
        minH="100vh"
        position={"relative"}
        overflow="auto"
      >
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

        {isLoading ? (
          <Center h="300px">
            <CircularProgress
              isIndeterminate
              color="brand.400"
              marginX="auto"
            />
          </Center>
        ) : (
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
                                history.push(
                                  "/campanha/:id?viewInfo".replace(
                                    ":id",
                                    item.idCampaign
                                  )
                                );
                              }}
                            >
                              Mais informações
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                history.push(
                                  "/campanha/:id".replace(
                                    ":id",
                                    item.idCampaign
                                  )
                                )
                              }
                            >
                              Editar
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                setIdToDelete(item.idCampaign);
                                onOpen();
                              }}
                            >
                              Deletar
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </>
        )}

        <ConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={() => {
            httpClient({
              url: `/campaign/${idToDelete}`,
              method: "DELETE",
            })
              .then(() => {
                getList().finally(() => {
                  setIsLoading(false);
                });

                toast({
                  title: "Deletado com sucesso!",

                  status: "success",
                  duration: 3000,
                  position: "top",
                  isClosable: true,
                });

                setIdToDelete(null);
                onClose();
              })
              .catch(() => {
                toast({
                  title: "Houve um erro!",
                  status: "error",
                  duration: 3000,
                  position: "top",
                  isClosable: true,
                });

                setIdToDelete(null);
                onClose();
              });
          }}
        />
        <Box h={150}></Box>
        <Box position={"absolute"} bottom={0} width={"100%"}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Campaigns;
