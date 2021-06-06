import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/input";
import React from "react";

export default function InputAddress(props: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input placeholder="Endereço" autoComplete="street-address" {...props} />
    </InputGroup>
  );
}
