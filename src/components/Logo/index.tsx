import { Image, ImageProps } from "@chakra-ui/image";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import logo from "../../assets/images/logo.svg";

export default function Logo(props: ImageProps): ReactElement {
  const history = useHistory();

  return (
    <Image
      boxSize="250px"
      height="300px"
      objectFit="contain"
      src={logo}
      alt="brand logo"
      onClick={() => history.push("/")}
      cursor="pointer"
      {...props}
    />
  );
}
