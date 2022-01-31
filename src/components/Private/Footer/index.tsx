import { Box } from "@chakra-ui/layout";
import { Link, Text } from "@chakra-ui/react";
//import React from "react";
import { ReactElement } from "react";
export default function Footer(): ReactElement {

  return (
    <Box
      backgroundColor="bluish.100"
      color="white"
      padding="15px 0"
    >
      <Text fontSize="sm" textAlign="center">
        Desenvolvido por{" "}
        <Text as={Link} href="" fontWeight={500}>
          Rafael de Lima
        </Text>
        ,{" "}
        <Text as={Link} href="" fontWeight={500}>
          Raíssa Arantes
        </Text>
        ,{" "}
        <Text as={Link} href="" fontWeight={500}>
          Vitória Pizzutti
        </Text>
        ,{" "}
        <Text as={Link} href="" fontWeight={500}>
          Yuri Becker
        </Text>{" "}
        e{" "}
        <Text as={Link} href="" fontWeight={500}>
          Tayná Mai
        </Text>
        .
      </Text>
    </Box>
  );
}
