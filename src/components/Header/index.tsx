import { Box, Center, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

interface Props {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  const location = useLocation();

  return (
    <Flex bg="brand.300" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
            aria-label="show menu"
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl" textTransform="capitalize">
          {location.pathname?.split("/")[1]?.replace("/", "").replace("-", " ")}
        </Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};

export default Header;
