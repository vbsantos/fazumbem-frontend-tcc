import { Box } from "@chakra-ui/layout";
import { Text, Center, HStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { ReactElement } from "react";
import { useHistory } from "react-router-dom";

import { FaBullhorn, FaBuilding } from "react-icons/fa";

interface ButtonProps {
  title: string;
  route: string;
  type: string;
  icon?: ReactNode;
}

export default function DefaultButton(button: ButtonProps): ReactElement {
  const history = useHistory();
  let icon = null;
  if (button.type === "sidebar") {
    if (button.icon) icon = button.icon;
    else if (button.route === "/campanhas" || button.route === "/nova-campanha")
      icon = <FaBullhorn fontSize="12 px" />;
    else if (
      button.route === "/nova-instituição" ||
      button.route === "/instituições"
    )
      icon = <FaBuilding fontSize="12 px" />;
    else icon = null;
  }
  return (
    <>
      {button.type === "sidebar" ? (
        <>
          <Box
            borderRadius="8px"
            bg="none"
            w="100%"
            color="brand.300"
            padding="5px 0px 12px"
            fontSize="18px"
            cursor="pointer"
            _hover={{
              background: "gray.100",
              transition: ".5s",
            }}
            onClick={() => history.push(button.route || "/")}
          >
            <HStack>
              <Center ml={1}>{icon}</Center>
              <Center>
                <Text color="brand.300" fontWeight="600" textAlign="left">
                  {button.title}
                </Text>
              </Center>
            </HStack>
          </Box>
        </>
      ) : (
        <>
          <Box
            borderRadius="50px"
            bg="#ED6A5A"
            color="white"
            padding="5px 18px 7px"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.3)"
            _hover={{
              textDecoration: "none",
              background: "#F18C7E",
              transition: ".5s",
            }}
            onClick={() => history.push(button.route || "")}
            cursor="pointer"
            fontSize="25px"
          >
            <Text color="white" fontWeight="500" textAlign="center">
              {button.title}
            </Text>
          </Box>
        </>
      )}
    </>
  );
}
