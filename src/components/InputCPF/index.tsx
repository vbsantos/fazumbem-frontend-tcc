import { InfoIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputControlledFieldProps } from "../../InputRegister";
import InputError from "../InputError";
import { formatCPF, isValidCPF } from "@brazilian-utils/brazilian-utils";

export default function InputCPF({
  error,
  control,
  name,
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
              children={<InfoIcon color="gray.300" />}
            />
            <Input
              {...field}
              placeholder="CPF"
              isInvalid={!!error}
              onChange={(e) => {
                field.onChange(formatCPF(e.target.value));
              }}
            />
          </InputGroup>
        )}
        control={control}
        rules={{
          required: "Campo obrigatório",
          validate: {
            validCPF: (x) => (!!isValidCPF(x) ? true : "CPF inválido!"),
          },
        }}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
