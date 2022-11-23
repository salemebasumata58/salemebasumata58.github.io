import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  HStack,
  Progress,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/salemes-logo.png";
import resume from "../images/Salem-Basumata-Resume.pdf";

import { Link } from "react-scroll";

const Links = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  return (
    <HStack
      // bg="#EBF8FF" // FAF5FF // FFF5F5 // #FFF5F7 #EBF8FF
      bg="#6600ae"
      style={{ position: "fixed", top: 0 }}
      p="0px 5%"
      justify="center"
      w="100%"
      h="64px"
      color={"gray.100"}
      // borderBottom="3px solid #e53e3e"
    >
      //#302E4C
      <Stack w="120px" h={"100%"} alignItems="center" p={1}>
        {/* <Image w="100%" h={"30px"} src={logo} alt="su-Fi-logo" border={"1px solid red"} /> */}
        <Heading color={"gray.200"}>Salemes</Heading>
      </Stack>
      <Spacer />
      <Box display={{ base: "none", md: "block", lg: "block" }}>
        <HStack>
          {Links.map((el) => (
            <Link
              className="text"
              to={el.link}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Text fontSize="18px" color={"gray.100"}>
                {el.name}
              </Text>
            </Link>
          ))}

          <a
            href={resume} download
          >
            <Button fontWeight="medium" size="md" colorScheme="blue">
              Resume
            </Button>
          </a>
        </HStack>
      </Box>
      <HStack></HStack>
    </HStack>
  );
};

export default Navbar;
