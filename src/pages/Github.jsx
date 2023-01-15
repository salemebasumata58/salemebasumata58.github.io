import { Highlight, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tilt from 'react-parallax-tilt';
import SGithub from "./smallGithub";


const selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(day => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};


function Github() {
  return (
    <VStack h="50vh"  justifyContent="center" spacing={5} margin="auto" alignSelf="center"
     w={{base:"90%"}}>
      <Stack textAlign="center" alignContent="center" data-aos="fade-up" > 
         <Text 
           
            fontSize={{base:"xl",sm:"4xl" ,md:"5xl"}}
            fontWeight="semibold" ><Highlight query='CALENDER' 
            styles={{ color: '#e58c1f' }}>
            GITHUB CONTRIBUTION CALENDER


           </Highlight>
           </Text>
           <Text fontSize={"lg"}>Here find my github contribution over last months</Text>
      </Stack>
      <Tilt>
      <Stack display={{base:"none", md:"block"}} data-aos="fade-up" mixW={"100px"}>
    

        <GitHubCalendar
       
       username="salemebasumata58"
       blockSize={25}
       blockRadius={5}
       blockMargin={15}
       color="#1700ac" //#c084f5
       fontSize={16}
       
      />
       
      </Stack> 

      <Stack display={{base:"block", md:"none"}} data-aos="fade-up">
    

      <GitHubCalendar
       
       username="salemebasumata58"
       blockSize={25}
       blockRadius={5}
       blockMargin={15}
       color="#60066a" //#c084f5
       fontSize={10}
       transformData={selectLastHalfYear} 
     />

      </Stack>

    


      </Tilt>
    </VStack>
  );
}

export default Github;
