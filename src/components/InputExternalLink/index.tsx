import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/input";
import React from "react";

export default function InputExternalLink(props: InputProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<ExternalLinkIcon color="gray.300" />}
      />
      <Input
        placeholder="Site / Facebook / Instagram"
        autoComplete="url"
        {...props}
      />
    </InputGroup>
  );
}
