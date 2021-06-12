import { Button } from "@chakra-ui/button";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import React, { useState } from "react";
import { InputFieldProps } from "../../InputRegister";
import InputError from "../InputError";

export default function InputPassword({
  error,
  register,
  ...props
}: InputFieldProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Senha"
            autoComplete="password"
            isInvalid={!!error}
            {...register}
            {...props}
          />
        </InputGroup>

        <InputRightElement width="4.5rem">
          <Button
            variant="ghost"
            colorScheme="brand"
            h="1.75rem"
            size="md"
            onClick={handleClick}
          >
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <InputError error={error} />
    </>
  );
}
