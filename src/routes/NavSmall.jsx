import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiFillFire,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects} from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

import { Link } from "react-scroll";
import { FcAbout } from "react-icons/fc";

const NavSmall = () => {
  const Links = [
    {
      name: AiFillHome,
      link: "home",
    },
    {
      name: SiAboutdotme,
      link: "about",
    },
    {
      name: AiOutlineFundProjectionScreen,
      link: "projects",
    },
    {
      name: AiFillFire,
      link: "skills",
    },
    {
      name: MdContactMail,
      link: "contact",
    },
  ];

  return (
    <HStack
      display={{ base: "-webkit-inline-flex", md: "none" }}
      bg="rgb(102,0,174)" // FAF5FF // FFF5F5 // #FFF5F7 #EBF8FF
      style={{ position: "fixed", bottom: 20, left: 10, right: 10 }}
      alignSelf="center"
      p="6px 5%"
      borderRadius={50}
      w="95%"
      h="54px"
      spacing="7"
      justifyContent="space-between"
    >
      {Links.map((el) => (
        <Link
          key={el.name}
          to={el.link}
          smooth={true}
          offset={-50}
          duration={400}
          end
        >
          <IconButton fontSize="2xl" colorScheme="lightGray" icon={<el.name />} />
        </Link>
      ))}
    </HStack>
  );
};

export default NavSmall;
