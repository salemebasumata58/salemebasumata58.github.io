import {
  Box,
  Button,
  Container,
  Flex,
  Highlight,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
import resume from "../images/Salem-Basumata-Resume.pdf";

import hero from "../images/sufiPic.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <Stack
      border={"1px solid yellow"}
      boxShadow="2xl"
      rounded="md"
      position="relative"
      id="home"
      p={{ base: 10, sm: 10, lg: 20 }}
      w="full"
      bg="white"
    >
      <Stack
        data-aos="zoom-in"
        justifyContent={{ base: "space-between", sm: "space-between" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
        // h={{ base: "90vh", sm: "80vh", md: "90vh" }}
        flexFlow={{ base: "column-reverse", md: "row" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          marginTop={{ base: "50px", sm: "50px" }}
          // border={"1px solid red"}
          w={{ base: "97%", sm: "500px", md: "550px" }}
          flexDirection="column"
          h="fit-content"
          alignItems={{ base: "center", md: "flex-start" }}
          p={5}
          boxShadow="2xl"
          rounded="md"
          spacing={{ base: 1, md: 5 }}
        >
          <Text fontSize={{ base: "18px", sm: "2xl" }} fontWeight="m">
            Hey👋...I'm
          </Text>
          <Tilt>
            <Text
              fontWeight="semibold"
              color="#302E4C"
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "5xl" }}
            >
              Salem Basumata
            </Text>
          </Tilt>
          <Text
            fontSize={{ base: "18px", sm: "2xl", md: "xl", lg: "3xl" }}
            fontWeight="semibold"
          >
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Problem Solver",
                  "Quick Learner",
                  "Coding Enthusiastic",
                  "Team Player",
                ]}
                loop={500000}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </Text>
          <br />
          <Text fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "xl" }}>
            An aspiring Full Stack Web Developer. Capable of writing production
            ready code using MERN stacks to build single page applications.
          </Text>

          <HStack alignItems="center">
            <a href={resume} download>
              <IconButton
                marginTop="3"
                _hover={{ fontSize: "4xl" }}
                size="lg"
                borderRadius="5px"
                fontSize="3xl"
                colorScheme="gray"
                icon={<IoMdDownload />}
              />
            </a>
            <a
              href={
                "https://drive.google.com/file/d/1yt7Ph3-ebAV_nM1HgRhNtAEkhCEbBbxi/view?usp=sharing"
              }
              target="_blank"
              download
            >
              <Button
                fontWeight="medium"
                marginTop="3"
                size="lg"
                colorScheme={"gray"}
              >
                {" "}
                See My Resume
              </Button>
            </a>
          </HStack>
        </Flex>

        <VStack
          boxSize={{ base: "350px", sm: "400px", md: "450px" }}
          // border={"1px solid red"}
          // h="fit-content"
          alignItems={{ base: "center", md: "flex-start" }}
          marginTop={{ base: "35px", sm: "50px", lg: "60px" }}
          py={{ base: 2, md: 12, lg: 8 }}
          px={{ base: 2, md: 2, lg: 1 }}
        >
          <Tilt>
            <Image
              data-aos="zoom-in"
              marginTop={{ base: 5, md: 0, lg: 0 }}
              // border={"1px solid gray"}
              boxShadow="2xl"
              rounded="md"
              borderRadius={"full"}
              w={{ base: "300px", md: "300px", lg: "400px" }}
              h={{ base: "300px", md: "300px", lg: "420px" }}
              src="https://avatars.githubusercontent.com/u/97457740?v=4"
            />
          </Tilt>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default Hero;
