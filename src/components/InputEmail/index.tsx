import { EmailIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/input";
import React from "react";

export default function InputEmail(props: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<EmailIcon color="gray.300" />}
      />
      <Input placeholder="Email" type="email" autoComplete="email" {...props} />
    </InputGroup>
  );
}
