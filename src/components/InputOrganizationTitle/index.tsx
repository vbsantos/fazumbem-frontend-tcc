import { AtSignIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/input";
import React from "react";

export default function InputOrganizationTitle(props: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<AtSignIcon color="gray.300" />}
      />
      <Input
        placeholder="Nome da organização"
        width="full"
        autoComplete="organization-title"
        {...props}
      />
    </InputGroup>
  );
}
