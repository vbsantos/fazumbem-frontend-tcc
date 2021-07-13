import { Box } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { TextAreaFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputProjectDescription({
  error,
  register,
  ...props
}: TextAreaFieldProps) {
  return (
    <Box w="full">
      <Textarea
        placeholder="Digite aqui uma descrição detalhada do projeto..."
        {...register}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
