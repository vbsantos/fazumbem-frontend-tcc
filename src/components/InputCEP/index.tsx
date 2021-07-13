import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import { InputControlledFieldProps } from "../../InputRegister";
import InputError from "../InputError";
import { isValidCEP, formatCEP } from "@brazilian-utils/brazilian-utils";

export default function InputCEP({
  error,
  name,
  control,
  ...props
}: InputControlledFieldProps) {
  return (
    <Box w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="CEP"
            autoComplete="zipcode"
            isInvalid={!!error}
            onChange={(e) => {
              field.onChange(formatCEP(e.target.value));
            }}
          />
        )}
        control={control}
        rules={{
          required: "Campo obrigatório",
          validate: {
            validCEP: (x) => isValidCEP(x) || "CEP inválido!",
          },
        }}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
