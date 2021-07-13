import { EmailIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputEmail({
  register,
  error,
  ...props
}: InputFieldProps) {
  return (
    <Box w="full">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input
          placeholder="Email"
          type="email"
          autoComplete="email"
          isInvalid={!!error}
          {...register}
          {...props}
        />
      </InputGroup>

      <InputError error={error} />
    </Box>
  );
}
