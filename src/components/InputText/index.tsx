import { Input } from "@chakra-ui/input";
import { Box, InputProps } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { InputControlledFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputText({
  error,
  name,
  control,
  required = true,
  ...props
}: InputControlledFieldProps & InputProps & { urlMode?: boolean }) {
  return (
    <Box w="full">
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} isInvalid={!!error} {...props} />
        )}
        control={control}
        rules={
          required
            ? {
                required: "Campo obrigatório",
              }
            : undefined
        }
      />

      <InputError error={error} />
    </Box>
  );
}
