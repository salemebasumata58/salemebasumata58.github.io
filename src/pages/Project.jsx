import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Highlight,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { GoDeviceCameraVideo } from "react-icons/go";
import { ViewIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

import bewakoof from "../images/bewakoof.gif";
import hotjar from "../images/hotjar.gif";
import portfolio from "../images/portfolio.gif";
import naukri from "../images/naukri.gif";
import uborik from "../images/uborik.gif";

const projects = [
  // {
  //   category:"React",
  //   name:"Bewakoof.com",
  //   image:bewakoof,
  //   description :"It's my major project Bewakoof is an online shopping site for men and women clothing. implemented all the features of an e-commerce website , fully responsive, smooth UI",
  //   tech:" HTML , CSS , JavaScript , ReactJS, ChakraUI",
  //   video:"https://www.linkedin.com/feed/update/urn:li:activity:6983691453747073024/",
  //   view:"https://bewakoof-clone-sufi.vercel.app/",
  //   git:"https://github.com/suFi7867/Bewakoof.com-Clone"
  // },
  /*{
    category:"React",
    name:"Employee Management",
    image:"https://i.im.ge/2022/10/18/20FIya.bloggif-634e5a001c1f6.gif",
    description :`It's my major project for a HIGH SCHOOL in our Town
    they asked me for a Sample Project and I Made This as Front-End-Developer, smooth UI, sorting, pagination, crud operation, filter, dark theme`,
    tech:"ReactJS, Redux, JavaScript , ChakraUI, CSS, NodeJS, Express, MongoDB",
    video:"https://www.linkedin.com/posts/sufiyan-shaikh-9bb808183_freelancing-studentmanagementsystem-axiosabrcrud-activity-6978627487182270464-uOxm?utm_source=share&utm_medium=member_desktop",
    view:"https://bewakoof-clone-sufi.vercel.app/",
    git:"https://github.com/suFi7867/Employee-management-system"
  },*/
  {
    category: "React",
    name: "Idaekart.com Clone",
    image: hotjar,
    description:
      "Ideakart is a site that gives you an idea about the book you want to buy. We offer a huge collection of books in diverse categories",
    tech: " HTML , CSS , JavaScript , ReactJS,Redux, ChakraUI, NodeJs, ExpressJs, MongoDB",
    video:
      "https://camo.githubusercontent.com/681b073821a3fd8e5625546f6a6fd93db020af8d2fa19f924704789f891f2d6c/68747470733a2f2f692e706f7374696d672e63632f624e30794c674c502f53637265656e73686f742d313037352e706e67",
    view: "https://playful-hummingbird-6d8d46.netlify.app/",
    git: "https://github.com/Anukriti-Nawani/IdeaKart-hilarious-flame-4763",
  },
  {
    category: "React",
    name: "Optimizely App Clone",
    image: portfolio,
    description:
      "Optimizely is known for content, commerce and optimization with the Digital Experience Platform (DXP). Millions of experiences are served with their platform every single day, helping organizations grow exponentially online.",
    tech: "HTML,CSS , JavaScript , ReactJS, ChakraUI, Redux",
    video:
      "https://camo.githubusercontent.com/dd206bb3be9d4d243e4966848f9e81c161330f59fe66eea8b037567ddd860119/68747470733a2f2f692e6962622e636f2f674478485259742f4f7074696d697a656c792d6c616e64696e672d706167652d6f7074696d697a6174696f6e2d746f6f6c2d6d696e2e706e67",
    view: "https://inquisitive-tartufo-cd6e83.netlify.app/",
    git: "https://github.com/salemebasumata58/Optimizely_app-Clone",
  },
  {
    category: "React",
    name: "Mytheresa-Clone",
    image: uborik,
    description: `About This is a clone of "mytheresa.com". "mytheresa.com" is a E-Commerce website for Clothes and Accessories`,
    tech: " HTML , CSS , JavaScript , ReactJS,Redux, ChakraUI, NodeJs, ExpressJs, MongoDB",
    video:
      "https://raw.githubusercontent.com/AmbujKrAK/mytheresa.com/ScreenShots/Homepage.png",
    view: "https://cloneofmytheresa-com.vercel.app/",
    git: "https://github.com/salemebasumata58/Mytheresa-Clone",
  },
  {
    category: "React",
    name: "Zee5 App Clone",
    image: naukri,
    description: ` A web application which used to watch online shows.A collaborative project built by a team of 6 executed in 6 days.`,
    tech: "HTML , CSS , JavaScript , ReactJS,Redux, ChakraUI",
    video:
      "https://user-images.githubusercontent.com/97448777/165456898-d7dcb9fa-01c3-4a67-9270-59c488e24e4b.png",
    view: "https://zee5-clone-23cc72.netlify.app/",
    git: "https://github.com/mayank8887/Construct_Zee5",
  },

  /*
   { category:"HTML",
    name:"Youtube.com",
    image:"https://i.im.ge/2022/10/18/20FIya.bloggif-634e5a001c1f6.gif",
    description :"It's my major project Bewakoof is an online shopping site for men and women clothing. try to implement all the features of an e-commerce website.",
    tech:" HTML , CSS , JavaScript , ReactJS, ChakraUI",
    video:"https://www.linkedin.com/posts/sufiyan-shaikh-9bb808183_youtube-youtube-masaischool-activity-6951419073243025408-d8vk?utm_source=share&utm_medium=member_desktop",
    view:"https://naukri-com-sufi-8ba69b.netlify.app/",
    git:"https://github.com/suFi7867/safe-table-3122"
}
*/
];

const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <Stack
    boxShadow="xl"
    // p="6"
    rounded="md"
      position="relative"
      id="projects"
      p={{ base: 0, sm: 8 }}
      w="full"
      bg="linear-gradient(3deg, #009999 0%, rgba(175,188,255,0) 100%)"
    >
      // #EBF8FF // FAF5FF // FFF5F5 // #FFF5F7 h="90vh"
      <Stack
        data-aos="fade-right"
        justifyContent={{ base: "space-around", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
        flexFlow={"column"}
      >
        <Tilt>
          <Stack data-aos="fade-up">
            <Text
              marginTop={50}
              textAlign={"center"}
              fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
              fontWeight="semibold"
            >
              <Highlight query="Projects" styles={{ color: "#e58c1f" }}>
                My Creative Projects
              </Highlight>
            </Text>
          </Stack>
        </Tilt>

        {/* <HStack data-aos="zoom-in"  justifyContent="center" w="full" spacing={{base:2, sm:5}} p={5} >

          <Button 
          borderRadius={5}
        
          bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontWeight="medium"
           _hover={{bg:"#e53e3e", color:"white"}} >
             ALL
          </Button>
          <Button 
          borderRadius={5}

          bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontWeight="medium"
           _hover={{bg:"#e53e3e", color:"white"}} >
             React
          </Button>
          <Button 
          borderRadius={5}

          bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontWeight="medium"
           _hover={{bg:"#e53e3e", color:"white"}} >
             Mern
          </Button>
          <Button 
          borderRadius={5}

          bg="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" fontWeight="medium"
           _hover={{bg:"#e53e3e", color:"white"}} >
             HTML
          </Button>

         
      </HStack> */}

        <SimpleGrid
          p={5}
          spacing={10}
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        >
          {projects.map((el) => (
            <VStack
              data-aos="zoom-in"
              boxShadow="dark-lg"
              // p="6"
              // border={"1px solid red"}
              rounded="md"
              maxW={{base:"320px", sm:"320px",  md:"340px"}}
              borderRadius={5}
              bg="white"
              p={4}
              spacing={4}
            >
              <VStack>
                <Image borderRadius={5} src={el.video} alt="sufi" />
              </VStack>

              <Text fontSize="2xl" fontWeight="semibold">
                {el.name}
              </Text>

              <VStack>
                <Text
                  display={{ base: "none", sm: "inline-flex" }}
                  fontSize={{ base: "13px", md: "sm" }}
                  color="gray.500"
                >
                  {el.description}
                </Text>

                <Text
                  fontSize={{ base: "13px", md: "sm" }}
                  marginTop={50}
                  fontWeight="medium"
                >
                  <Highlight
                    query="Teck Stack"
                    styles={{
                      fontSize: "md",
                      color: "#e53e3e",
                      fontWeight: "semibold",
                    }}
                  >
                    {`Teck Stack - ${el.tech}`}
                  </Highlight>
                </Text>

                <Spacer />

                <HStack spacing={5}>
                  {/* <a  href={el.video} target="_blank" >
                   <Text  className='projectButton'  >
                       <GoDeviceCameraVideo />
                   </Text>
                 </a> */}

                  <a href={el.view} target="_blank">
                    <Text className="projectButton">
                      <ViewIcon />
                    </Text>
                  </a>

                  <a href={el.git} target="_blank">
                    <Text className="projectButton">
                      <BsGithub />
                    </Text>
                  </a>
                </HStack>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Project;

/*{
    category:"React",
    name:"Employee Management",
    image:"https://i.im.ge/2022/10/18/20FIya.bloggif-634e5a001c1f6.gif",
    description :`It's my major project for a HIGH SCHOOL in our Town
    they asked me for a Sample Project and I Made This as Front-End-Developer, smooth UI, sorting, pagination, crud operation, filter, dark theme`,
    tech:"ReactJS, Redux, JavaScript , ChakraUI, CSS, NodeJS, Express, MongoDB",
    video:"https://www.linkedin.com/posts/sufiyan-shaikh-9bb808183_freelancing-studentmanagementsystem-axiosabrcrud-activity-6978627487182270464-uOxm?utm_source=share&utm_medium=member_desktop",
    view:"https://bewakoof-clone-sufi.vercel.app/",
    git:"https://github.com/suFi7867/Employee-management-system"
  },*/
