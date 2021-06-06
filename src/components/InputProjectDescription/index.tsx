import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import React from "react";

export default function InputProjectDescription(props: TextareaProps) {
  return (
    <Textarea
      placeholder="Digite aqui uma descrição detalhada do projeto..."
      {...props}
    />
  );
}
