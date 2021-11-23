
import React, { ReactElement } from "react";
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Box
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean,
  onOpen: any,
  onClose: any,
  opened: any
}


export default function InstituteModal(props: Props): ReactElement {

  return (
    <Modal isOpen={props.isOpen && props.opened} onClose={props.onClose} size={"lg"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.opened?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={2}>
                <Text fontSize="md">Informações</Text>
                <Text fontSize="sm">Contato: {props.opened?.username}</Text>
                <Text fontSize="sm">Telefone: {props.opened?.telephone}</Text>
                <Divider />
                <Text fontSize="md">Descrição</Text>
                <Text fontSize="sm">{props.opened?.description}</Text>
                <Divider />
                <Box>
                  <Text fontSize="md">Endereço</Text>
                  <Text fontSize="sm">
                    {props.opened?.address?.street} - {props.opened?.address?.number} -{" "}
                    {props.opened?.address?.complement}
                  </Text>
                  <Text fontSize="sm">{props.opened?.address?.city}, {props.opened?.address?.state}</Text>
                  <Text fontSize="xs">CEP: {props.opened?.address?.cep}</Text>
                </Box>
              </Stack>
              <br />  
            </ModalBody>
          </ModalContent>
        </Modal>
  );
}
