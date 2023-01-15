import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  HStack,
  IconButton,
  Progress,
  Spacer,
  Stack,
  // Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/salemes-logo.png";
import resume from "../images/Salem-Basumata-Resume.pdf";

import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

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
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={children}>
//     {children}
//   </Link>
// );

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleLink = () => {
  //   navigate(
  //     "https://drive.google.com/file/d/1yt7Ph3-ebAV_nM1HgRhNtAEkhCEbBbxi/view"
  //   );
  // };
  const handlepath = () => {
    window.open("https://drive.google.com/file/d/1yt7Ph3-ebAV_nM1HgRhNtAEkhCEbBbxi/view");
      // window.location.target="_blank"
    // return null;
  };
  return (
    <>
      <HStack
        // bg="#EBF8FF" // FAF5FF // FFF5F5 // #FFF5F7 #EBF8FF
        bg="#6600ae"
        style={{ position: "fixed", top: 0 }}
        p="0px 5%"
        justify="center"
        w="100%"
        boxShadow= "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        position={"sticky"}
        h="64px"
        color={"gray.100"}
        borderBottom="1px solid #bebebe"
      >
        //#302E4C
        <Stack w="120px" h={"100%"} alignItems="center" p={1}>
          {/* <Image w="100%" h={"30px"} src={logo} alt="su-Fi-logo" border={"1px solid red"} /> */}
          <Heading color={"gray.200"}>
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="logoLink"
            >
              SB
            </Link>
          </Heading>
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
           
              <a target="_blank" onClick={handlepath} href={resume} download>
              <Button fontWeight="medium" size="md" colorScheme="blue">
                {" "}
                Resume
                </Button>
              </a>

          </HStack>
        </Box>
        {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
      </HStack>
      {/* <br/>
    <Box>{isOpen ? (
        <Box  pb={4} display={{ md: 'none' }} border={"1px solid red"} w={"400px"}>
            <Stack as={'nav'} spacing={4}  bg={"purple"} p={10} w={"200px"}marginTop={"300px"}>
              {Links.map((link) => (
                <NavLink key={link.name}>{link.link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}</Box> */}
    </>
  );
};

export default Navbar;
