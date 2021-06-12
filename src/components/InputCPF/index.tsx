import { InfoIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputAddress({
  error,
  register,
  ...props
}: InputFieldProps) {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<InfoIcon color="gray.300" />}
        />
        <Input placeholder="CPF" isInvalid={!!error} {...register} {...props} />
      </InputGroup>

      <InputError error={error} />
    </>
  );
}
