import { Box } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { TextAreaFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputProjectDescription({
  error,
  register,
  noPlaceholder,
  ...props
}: TextAreaFieldProps & { noPlaceholder?: boolean }) {
  return (
    <Box w="full">
      <Textarea
        placeholder={
          noPlaceholder
            ? undefined
            : "Digite aqui uma descrição detalhada da campanha..."
        }
        {...register}
        {...props}
      />

      <InputError error={error} />
    </Box>
  );
}
