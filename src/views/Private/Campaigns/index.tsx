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
  Image
  /* Divider */
} from "@chakra-ui/react";

import {
  FaExclamationTriangle,
  FaClipboardCheck,
  FaChevronDown
} from "react-icons/fa";

import Footer from "../../../components/Private/Footer";

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { httpClient } from "../../../services/httpClient";

 function textTruncate(text: String) {
   if (text.length > 80) {
     return text.substr(0, 80) + "...";
   }
 }

interface Props {}
const Campaigns = (props: Props) => {
  const [showApproved, setShowApproved] = useState(false);
  const [showPending, setShowPending] = useState(false);

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
            Conheça as campanhas que estão precisando de doações nesse momento,
            que já foram aprovadas pela sua equipe ou verifique as campanhas
            que ainda estão aguardando a sua confirmação para serem apresentadas
            ao público.
          </Text>
        </Box>
        <Box m={20} mt={20} pb={2} color="bluish.100">
          <HStack>
            <Box 
              width= "100%"
              height= "370px"
              borderRadius= "25px"
              overflow= "hidden"
              backgroundColor= "white"
              textAlign= "center"
              color= "bluish.100"
              boxShadow= "2px 4px 9px rgba(0, 0, 0, 0.25)"
              fontSize="1.8rem" 
              transition= "0.5s"
              border= "1px solid transparent"
              cursor="pointer"
              _hover={{ 
                borderColor: "#ED6A5A",
                transform: "translateY(-10px)",
                transition: "0.5s"
              }} 
              onClick={(event) => {
                setShowApproved(true); 
                setShowPending(false);
              }}
            >
              <Center m={5} fontSize="5rem">
                <FaClipboardCheck />
              </Center>
              <Text m={5} fontFamily="Comfortaa">
                Campanhas aprovadas
              </Text>
              <Text
                fontSize="26px"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa" 
                m={5}
              >
                Visualize as campanhas cadastradas pelas instituições 
                que já foram aprovadas
              </Text>
            </Box>
            <Box 
              width= "100%"
              height= "370px"
              borderRadius= "25px"
              overflow= "hidden"
              backgroundColor= "white"
              textAlign= "center"
              color= "bluish.100"
              boxShadow= "2px 4px 9px rgba(0, 0, 0, 0.25)"
              fontSize="1.8rem"
              transition= "0.5s"
              border= "1px solid transparent"
              cursor="pointer"
              _hover={{ 
                borderColor: "#ED6A5A",
                transform: "translateY(-10px)",
                transition: "0.5s"
              }} 
              onClick={(event) => {
                setShowApproved(false); 
                setShowPending(true);
              }}
            >
              <Center m={5} fontSize="5rem">
                <FaExclamationTriangle />
              </Center>
              <Text m={5} fontFamily="Comfortaa">
                Campanhas aguardando aprovação
              </Text>
              <Text
                fontSize="26px"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa" 
                m={5}
              >
                Aprove campanhas cadastradas pelas instituições para que
                 sejam visíveis ao público
              </Text>
            </Box>
          </HStack>
        </Box>
      
        {showApproved ? (
          <>
            <Box textAlign="center">
              <Text
                fontSize="2.5rem"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
                display="inline"
              > 
                &nbsp;Listagem de campanhas&nbsp;
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
                  Lista de campanhas já aprovadas no sistema
                </TableCaption>
                <Thead backgroundColor="#ED6A5A">
                  <Tr>
                    <Th color="white" font="Comfortaa">Título</Th>
                    <Th color="white" font="Comfortaa">Descrição</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {list.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.title}</Td>
                      <Td>
                        {textTruncate(item.description) || "--"}
                      </Td>
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
                      <Text fontSize="1rem" fontWeight="bold">Descrição da campanha</Text>
                      <Text fontSize="1rem">{opened?.description}</Text>
                    </Stack>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </>
        ) : (
          ""
        )}
        {showPending ? (
          <>
            <Box textAlign="center">
              <Text
                fontSize="2.5rem"
                textAlign="center"
                fontWeight={500}
                fontFamily="Comfortaa"
                color="white"
                backgroundColor="#ED6A5A"
                display="inline"
              > 
                &nbsp;Listagem de campanhas&nbsp;
              </Text>
            </Box>
            <Box 
              m="10" 
              borderRadius= "25px"
              overflow= "hidden"
              backgroundColor= "white"
              textAlign= "center"
              color= "bluish.100"
              boxShadow= "2px 4px 9px rgba(0, 0, 0, 0.25)"
            >
              <Table variant="striped">
                <TableCaption>
                  Lista de campanhas já aprovadas no sistema
                </TableCaption>
                <Thead backgroundColor="#ED6A5A">
                  <Tr>
                    <Th color="white" font="Comfortaa">Título</Th>
                    <Th color="white" font="Comfortaa">Descrição</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {list.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.title}</Td>
                      <Td>
                        {textTruncate(item.description) || "--"}
                      </Td>
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
                      <Text fontSize="1rem" fontWeight="bold">Descrição da campanha</Text>
                      <Text fontSize="1rem">{opened?.description}</Text>
                    </Stack>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </>
        ) : (
          ""
        )}
      <Footer />
    </Box>
    </>
  );
};

export default Campaigns;
