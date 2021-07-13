import { Box, Switch, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
}

export const RegisterType = ({ setChecked, checked }: Props) => {
  return (
    <Box>
      <Text
        fontSize="md"
        display="inline"
        color="gray.600"
        fontWeight={checked ? "normal" : "bold"}
      >
        Instituição
      </Text>
      <Switch
        colorScheme="brand"
        size="lg"
        mx={2}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Text
        fontSize="md"
        display="inline"
        color="gray.600"
        fontWeight={checked ? "bold" : "normal"}
      >
        Usuário
      </Text>
    </Box>
  );
};

export default RegisterType;
