import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { logout, useAuthDispatch } from "../../context";
import Logo from "../Logo";
import DefaultButton from "../DefaultButton";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
}

const SidebarContent = () => {
  const dispatch = useAuthDispatch();

  return (
    <VStack color="brand.300">
      <DefaultButton title="Meu perfil" type="sidebar" route="/perfil" />
      <DefaultButton title="Campanhas" type="sidebar" route="/campanhas" />
      <DefaultButton
        title="Nova Campanha"
        type="sidebar"
        route="/nova-campanha"
      />
      <DefaultButton
        title="Instituições"
        type="sidebar"
        route="/instituições"
      />
      <DefaultButton
        title="Nova Instituição"
        type="sidebar"
        route="/nova-instituição"
      />
      <Divider borderBottom="1px solid #034074" pt={2} mb={10} />
      {/* <Button 
        leftIcon={<FaUser />} 
        onClick={() => history.push("/perfil")} 
        variant="ghost"
        w="100%"
        fontSize="18px"
      >
        Meu perfil
      </Button>
      <Button 
        leftIcon={<FaBullhorn />} 
        onClick={() => history.push("/campanhas")} 
        variant="ghost"
        w="100%"
        fontSize="18px"
      >
        Campanhas
      </Button>
      <Button 
        leftIcon={<FaBuilding />} 
        onClick={() => history.push("/nova-instituição")} 
        variant="ghost"
        w="100%"
        fontSize="18px"
      >
        Nova Instituição
      </Button>
      <Button 
        onClick={() => history.push("/instituições")} 
        variant="ghost"
        w="100%"
        fontSize="18px"
      >
        Instituições
      </Button> */}
      <Button
        color="#ED6A5A"
        leftIcon={<FaSignOutAlt />}
        onClick={() => logout(dispatch)}
        w="100%"
        variant="ghost"
        fontSize="18px"
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
      boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
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
