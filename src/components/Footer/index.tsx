import { Box, Heading } from "@chakra-ui/layout";
import {
  Image,
  Link,
  Text,
  Tooltip,
  Grid,
  GridItem,
  HStack,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import blueLogo from "../../assets/images/logo.svg";
import { FaFacebookSquare, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { ReactElement } from "react";

function scrollToElement(element: string) {
  (document.getElementById(element) as HTMLInputElement).scrollIntoView();
}

export default function Footer(): ReactElement {
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isDesktop] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      <Box
        backgroundColor="#F5F5F5"
        width="99%"
        color="brand.300"
        padding={isDesktop ? "20px 10%" : "20px 25px"}
        id="footer"
      >
        {isMobile ? (
          <>
            <Box padding="0 20%">
              <HStack spacing="24px">
                <Box>
                  <Tooltip
                    hasArrow
                    label="E-mail"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box as={"a"} href="mailto: fazumbem@inf.ufsm.br">
                      <FaRegEnvelope size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Instagram"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box as={Link} href="/">
                      <FaInstagram size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Facebook"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box as={Link} href="/">
                      <FaFacebookSquare size={48} />
                    </Box>
                  </Tooltip>
                </Box>
              </HStack>
            </Box>
            <Box marginTop="25px" padding="25px 0" borderTop="2px solid">
              <VStack spacing="24px">
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/campaigns"
                  as={Link}
                >
                  Campanhas
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/institutes"
                  as={Link}
                  // onClick={() => scrollToElement('institutes')}
                >
                  Instituições
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  onClick={() => scrollToElement("about")}
                  as={Link}
                >
                  Sobre
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/contact"
                  as={Link}
                >
                  Contato
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                >
                  <Link href="/login">Login</Link> |{" "}
                  <Link href="/register">Cadastro</Link>
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href={process.env.PUBLIC_URL + "termo.html"}
                  as={Link}
                >
                  Termos de uso
                </Heading>
              </VStack>
            </Box>
            <Box>
              <Image
                // boxSize="450px"
                height="15rem"
                margin="0 auto"
                objectFit="contain"
                src={blueLogo}
                alt="brand logo"
                onClick={() => window.scrollTo(0, 0)}
                cursor="pointer"
              />
            </Box>
          </>
        ) : (
          <Grid
            minHeight="200px"
            templateRows="repeat(3, 33%)"
            templateColumns={isDesktop ? "repeat(7, 14.2%)" : "repeat(4, 25%)"}
          >
            <GridItem rowSpan={1} colSpan={isDesktop ? 6 : 3}>
              <HStack spacing="24px">
                <Box>
                  <Tooltip
                    hasArrow
                    label="E-mail"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box //m={2}
                      as={"a"}
                      href="mailto: fazumbem@inf.ufsm.br"
                    >
                      <FaRegEnvelope size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Instagram"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box //m={2}
                      as={Link}
                      href="/"
                    >
                      <FaInstagram size={50} />
                    </Box>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip
                    hasArrow
                    label="Facebook"
                    bg="bluish.200"
                    color="white"
                    placement="top"
                    borderRadius="8px"
                    transition="0.2s"
                  >
                    <Box
                      // m={2}
                      as={Link}
                      href="/"
                    >
                      <FaFacebookSquare size={48} />
                    </Box>
                  </Tooltip>
                </Box>
              </HStack>
              {/*}
            <Flex flex-direction="row">

              <Text
                height= "250px"
                borderLeft= "3px solid"
                marginLeft="auto"
                mt={-5}
              />
            </Flex>
            */}
            </GridItem>
            <GridItem rowSpan={3} colSpan={1}>
              <Box>
                <Image
                  boxSize="450px"
                  height="15rem"
                  objectFit="contain"
                  src={blueLogo}
                  alt="brand logo"
                  onClick={() => window.scrollTo(0, 0)}
                  cursor="pointer"
                />
              </Box>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              borderTop="2px solid"
              padding="32px 0"
              color="bluish.100"
            >
              <VStack spacing="32px" alignItems="left">
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/campaigns"
                  as={Link}
                >
                  Campanhas
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  // onClick={() => scrollToElement('institutes')}
                  href="/institutes"
                  as={Link}
                >
                  Instituições
                </Heading>
              </VStack>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={isDesktop ? "" : "none"}
            />
            <GridItem
              rowSpan={2}
              colSpan={1}
              padding="32px 0"
              color="bluish.100"
            >
              <VStack spacing="32px" alignItems="left">
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/about"
                  as={Link}
                >
                  Sobre
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href="/contact"
                  as={Link}
                >
                  Contato
                </Heading>
              </VStack>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={isDesktop ? "" : "none"}
            />
            <GridItem
              rowSpan={2}
              colSpan={1}
              padding="32px 0"
              color="bluish.100"
            >
              <VStack spacing="32px" alignItems="left">
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                >
                  <Link href="/login">Login</Link>
                </Heading>
                <Heading
                  color="bluish.100"
                  fontSize={isDesktop ? "18px" : "16px"}
                  fontWeight="400"
                  href={process.env.PUBLIC_URL + "termo.html"}
                  as={Link}
                >
                  Termos de uso
                </Heading>
              </VStack>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              display={isDesktop ? "" : "none"}
            />
          </Grid>
        )}
      </Box>
      <Box backgroundColor="bluish.100" color="white" padding="15px 0">
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
    </>
  );
}
