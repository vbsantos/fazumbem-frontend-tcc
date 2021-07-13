import { PhoneIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import { InputControlledFieldProps } from "../../InputRegister";
import InputError from "../InputError";
import {
  isValidPhone,
  isValidMobilePhone,
} from "@brazilian-utils/brazilian-utils";

function formatPhone(phone: string) {
  phone = phone.replace(/\D/g, "");
  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
  return phone;
}

export default function InputPhone({
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
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              {...field}
              type="tel"
              placeholder="Telefone"
              autoComplete="tel"
              isInvalid={!!error}
              onChange={(e) => {
                field.onChange(formatPhone(e.target.value));
              }}
            />
          </InputGroup>
        )}
        control={control}
        rules={{
          required: "Campo obrigatório",
          validate: {
            validPhone: (x) =>
              isValidPhone(x) || isValidMobilePhone(x) || "Telefone inválido!",
          },
        }}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
