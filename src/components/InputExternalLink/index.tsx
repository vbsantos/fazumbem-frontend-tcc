import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import React from "react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputExternalLink({
  error,
  register,
  ...props
}: InputFieldProps) {
  return (
    <Box w="full">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<ExternalLinkIcon color="gray.300" />}
        />
        <Input
          placeholder="Site / Facebook / Instagram"
          autoComplete="url"
          isInvalid={!!error}
          {...register}
          {...props}
        />
      </InputGroup>

      <InputError error={error} />
    </Box>
  );
}
