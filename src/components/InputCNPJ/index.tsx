import { InfoIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputControlledFieldProps } from "../../InputRegister";
import InputError from "../InputError";
import { formatCNPJ, isValidCNPJ } from "@brazilian-utils/brazilian-utils";

export default function InputCNPJ({
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
              placeholder="CNPJ"
              isInvalid={!!error}
              onChange={(e) => {
                field.onChange(formatCNPJ(e.target.value));
              }}
            />
          </InputGroup>
        )}
        control={control}
        rules={{
          validate: {
            validCNPJ: (x) => (!!isValidCNPJ(x) ? true : "CNPJ inválido!"),
          },
        }}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
