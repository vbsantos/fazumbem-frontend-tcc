import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

const InputError = ({ error }: Props) => {
  return error ? (
    <Alert status="error" variant="left-accent" marginTop={3}>
      <AlertIcon />
      <AlertTitle fontSize="sm">{error.message}</AlertTitle>
    </Alert>
  ) : null;
};

export default InputError;
