import { PhoneIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/input";
import React from "react";

export default function InputPhone(props: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<PhoneIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Telefone" autoComplete="tel" {...props} />
    </InputGroup>
  );
}
