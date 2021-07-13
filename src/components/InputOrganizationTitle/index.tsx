import { AtSignIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import React from "react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputOrganizationTitle({
  register,
  error,
  ...props
}: InputFieldProps) {
  return (
    <Box w="full">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AtSignIcon color="gray.300" />}
        />
        <Input
          placeholder="Nome da organização"
          width="full"
          autoComplete="organization-title"
          isInvalid={!!error}
          {...register}
          {...props}
        />
      </InputGroup>

      <InputError error={error} />
    </Box>
  );
}
