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
      height={logoType.type === 'white' ? "15rem" : "40rem"}
      objectFit="contain"
      mt={logoType.type === 'white' ? -10 : 0}
      ml={logoType.type === 'white' ? 0 : "5rem"}
      mb={20}
      src={logoType.type === 'white' ? logo : blueLogo}
      alt="brand logo"
    />
  );
}
