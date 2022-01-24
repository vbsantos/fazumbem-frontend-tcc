import { FaArrowLeft } from "react-icons/fa";
import { ReactElement } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  route: string;
}

export default function ReturnButton(button: ButtonProps): ReactElement {
  return (
    <Box
      transition={".5s"}
      _hover={{
        color: "#F18C7E",
        transition: ".5s",
      }}
    >
      <Link to={ button.route }>
        <HStack spacing="10px" m={5} p={0} fontSize={"20px"}>
          <Box>
            <FaArrowLeft />
          </Box>
          <Box>{ button.title }</Box>
        </HStack>
      </Link>
    </Box>
  );
}
