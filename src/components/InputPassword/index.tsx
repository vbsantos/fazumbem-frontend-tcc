import { Button } from "@chakra-ui/button";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/input";
import React, { useState } from "react";

export default function InputPassword(props: InputProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
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
  );
}
