import { useMediaQuery } from "@chakra-ui/react";
import { ReactElement } from "react";
import LayoutDesktop from "../LayoutDesktop";
import LayoutMobile from "../LayoutMobile";
import LayoutTablet from "../LayoutTablet";
export default function Header(): ReactElement {
  const [isMobile] = useMediaQuery("(max-width: 576px)")
  const [isDesktop] = useMediaQuery("(min-width: 769px)")
  let isTablet = false;
  if (!isMobile && !isDesktop) isTablet = true; 
  return (
    <div>
      {isDesktop ? (
        <div>
          <LayoutDesktop />
        </div>
      ) : (
        ""
      )}
      {isMobile ? (
        <div>
          <LayoutMobile />
        </div>
      ) : (
        ""
      )}
      {isTablet ? (
        <div>
          <LayoutTablet />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
