import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { logout, useAuthDispatch } from "../../context";
import Logo from "../Logo";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
}

const SidebarContent = () => {
  const dispatch = useAuthDispatch();
  const history = useHistory();

  return (
    <VStack>
      <Button onClick={() => history.push("/dashboard")} w="100%">
        Dashboard
      </Button>
      <Button onClick={() => history.push("/perfil")} w="100%">
        Meu perfil
      </Button>
      <Button onClick={() => history.push("/campanhas")} w="100%">
        Campanhas
      </Button>
      <Button onClick={() => history.push("/instituições")} w="100%">
        Instituições
      </Button>
      <Button
        color="red"
        onClick={() => logout(dispatch)}
        w="100%"
        variant="ghost"
      >
        Sair
      </Button>
    </VStack>
  );
};

const Sidebar = ({ isOpen, variant, onClose }: Props) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      borderRight="1px"
      borderColor="brand.300"
    >
      <Logo height="150px" mb={5} />
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
