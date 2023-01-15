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
import Github from "./Github";
import SGithub from "./smallGithub";

const GithubComp = () => {
  return (
    <Stack marginTop={{ base: "20px", sm: "none" }} p={{ base: 8, sm: 8 }}>
      <Stack
        justifyContent={{ base: "space-evenly", sm: "space-around" }}
        alignItems="center"
        p={{ base: 0, sm: 8 }}
        alignSelf="center"
        justify="center"
        w="full"
        maxW="1400px"
      >
        <Github />
        <br />
        <br />
        <VStack gap={5}>
          <Tilt>
            <Stack textAlign="center" alignContent="center" data-aos="zoom-in">
              <Text
                fontSize={{ base: "xl", sm: "4xl", md: "4xl" }}
                fontWeight="semibold"
              >
                <Highlight query="STATISTICS" styles={{ color: "#e58c1f" }}>
                  GITHUB STATISTICS
                </Highlight>
              </Text>
              <Text>My overall statistics and contribution</Text>
            </Stack>
          </Tilt>

          <Stack
            spacing={5}
            h={"50vh"}
            // p={2}
            // border={"1px solid purple"}
            alignItems={"center"}
            gap={5}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box
              marginTop={{ base: "-80px", lg: "5px" }}
              h={{ base: "20vh", lg: "50vh" }}
            >
              <Image
                h={"40vh"}
                // align="center"
                src="https://github-readme-stats.vercel.app/api?username=salemebasumata58&show_icons=true&locale=en"
                alt="salemebasumata58"
              />
            </Box>
            <Box h={{ base: "25vh", lg: "50vh" }}>
              <Image
                h={"40vh"}
                marginTop="-10px"
                // align=""
                src="https://github-readme-streak-stats.herokuapp.com/?user=salemebasumata58&"
                alt="salemebasumata58"
              />
            </Box>
          </Stack>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default GithubComp;
