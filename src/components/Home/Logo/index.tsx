import { Image } from "@chakra-ui/image";
import React, { ReactElement } from "react";
import logo from "../../../assets/images/whiteFullLogo.svg";
import blueLogo from "../../../assets/images/logo.svg";

interface LogoProps {
  type: String;
}

export default function Logo(logoType: LogoProps): ReactElement {

  return (
    <Image
      boxSize="450px"
      height="25rem"
      objectFit="contain"
      mt={20}
      mb={20}
      src={logoType.type === 'white' ? logo : blueLogo}
      alt="brand logo"
    />
  );
}
