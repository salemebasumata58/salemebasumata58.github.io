import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Highlight,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <Stack
      boxShadow="xl"
      
      h={{ base: "120vh", sm: "150vh", md: "80vh", lg: "130vh" }}
      rounded="md"
      id="about"
      p={{ base: 8, sm: 8 }}
      w="full"
      margin={"auto"}
      bg="white"
    >
      {" "}
      // rgb(235, 248, 255) // FAF5FF // FFF5F5 // #FFF5F7
      <Stack 
        justifyContent={{ base: "space-evenly", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
        // h={{base:"85vh", sm:"80vh"  ,md:"90vh"}}
      >
        <Tilt  marginBottom={{base:"50px"}} >
          <Stack  marginBottom={{base:"20px", sm:"75px"}} data-aos="zoom-in" >
            <Text
            
              marginTop={1}
              fontSize={{ base: "3xl", sm: "3xl", md: "5xl" }}
              fontWeight="semibold"
            >
              <Highlight query="About" styles={{ color: "#e58c1f" }}>
                All About Me
              </Highlight>
            </Text>
          </Stack>
        </Tilt>
      
        
        <Stack
          justifyContent={{ base: "space-evenly", sm: "space-around" }}
          alignItems="center"
          spacing={5}
          // border={"1px solid red"}
          // alignSelf="center"
          // justify="center"
          w="full"
          maxW="1400px"
          h={{ base: "65vh", sm: "60vh", md: "40vh", lg: "80vh" }}
          flexFlow={{ base: "column", md: "row" }}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <VStack
            data-aos="zoom-in"
            marginTop={{ base: "100px", sm: "", md: 0 }}
          >
            <Tilt>
              <Image
                boxShadow="2xl"
                rounded="md"
                w={{ base: "400px", md: "300px", lg: "400px" }}
                h={{ base: 300, md: 300, lg: 420 }}
                src="https://inizsoft.com/wp-content/uploads/2021/02/webdev.gif"
              />
            </Tilt>{" "}
          </VStack>
          <br />
          
          <VStack
            boxShadow="2xl"
            rounded="md"
            data-aos="zoom-in"
            spacing={5}
            p={{ base: 2, sm: 5 }}
            w={{ base: "sm", md: "60%", lg: "40%" }}
          >
            <Text
              marginTop={{ base: "-10px" }}
              fontSize={{ base: "16px", lg: "xl" }}
              color={"gray.700"}
            >
              Hello! My name is Salem Basumata & I enjoy creating things that
              live on the internet. I'm a passionate Developer, with strong
              administrative & communication skills, good attention to detail &
              the ability to write efficient code.
            </Text>

            <Divider borderColor="gray.500" />

            <Text fontSize={{ base: "15px", lg: "xl" }} color={"gray.700"}>
              I'm open to Job opportunities. If you think my skills are relevant
              to your job requirements then do contact me.
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
