import { Highlight, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function SGithub() {
  return (
    <VStack
      justifyContent="center"
      spacing={5}
      margin="auto"
      alignSelf="center"
      w={{ base: "80%" }}
    >
      <Stack textAlign="center" alignContent="center" data-aos="fade-up">
        <Text
          fontSize={{ base: "xl", sm: "4xl", md: "4xl" }}
          fontWeight="semibold"
        >
          <Highlight query="CALENDER" styles={{ color: "#e53e3e" }}>
            GITHUB CONTRIBUTION CALENDER
          </Highlight>
        </Text>
        <Text>Here find my github contribution over last months</Text>
      </Stack>
      <Tilt>
        <Stack data-aos="fade-up">
          <GitHubCalendar
            username="suFi7867"
            blockSize={25}
            blockRadius={5}
            blockMargin={15}
            color="#e53e3e" //#c084f5
            fontSize={16}
            transformData={selectLastHalfYear}
          />
        </Stack>
      </Tilt>
    </VStack>
  );
}

export default SGithub;
