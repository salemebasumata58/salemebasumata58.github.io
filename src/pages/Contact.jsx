import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Highlight,
    Textarea,
    
  } from '@chakra-ui/react';
  import Tilt from 'react-parallax-tilt';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
  
  import React from 'react'
import AvatarWithRipple from './Profile';
import { Stack } from 'react-bootstrap';
  // 
  const Contact = () => {

    return (

        <Container  boxShadow='2xl' rounded='lg' p={{base:"5", sm:"none"}} bg="linear-gradient(3deg, #4c005f 0%, rgba(175,188,255,0) 100%)"
        marginBottom={{base:"10px", md:"10px"}} id="contact"  maxW="full" mt={0} centerContent overflow="hidden">
          {/* <Heading w={"200px"} margin={"auto"}>Contact</Heading> */}
          <Tilt>
      <Stack data-aos="zoom-in"  > 
         <Text 
         marginTop={1}
            fontSize={{base:"3xl",sm:"4xl" ,md:"5xl"}}
            fontWeight="semibold" ><Highlight query='Me' 
            styles={{ color: '#e58c1f' }}>
            Contact Me
           </Highlight>
           </Text>
      </Stack>
      </Tilt>
        <Flex >
        
          <Box
          // boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
          boxShadow='2xl' rounded='md'
            bg="#003f76"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
           
            <Box  p={{base:"5", sm:"10"}}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                        
                          variant="ghost"
                          fontWeight="medium"
                          _hover={{ border: '2px solid white' }}
                          leftIcon={<MdPhone size="20px" />}>
                          +91-7908292815
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                        
                          variant="ghost"
                          fontWeight="medium"
                          _hover={{ border: '2px solid white' }}
                          leftIcon={<MdEmail  size="20px" />}>
                          sbasumatas58@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                        
                          variant="ghost"
                         fontWeight="medium"
                          _hover={{ border: '2px solid white' }}
                          leftIcon={<MdLocationOn size="20px" />}>
                          Siliguri, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">

                       <a  
                       href="https://github.com/salemebasumata58" target="_blank" >
                          <IconButton 
                           size="md"      
                            fontSize="4xl"
                            colorScheme='purple' variant='solid'
                            _hover={{  fontSize:"5xl"  }}
                            icon={<AiFillGithub />}
                          />
                       </a>

                       <a  href="https://www.linkedin.com/in/salem-basumata/" target="_blank" >
                          <IconButton 
                         size="md"
                       
                          fontSize="3xl"
                           colorScheme='purple' variant='solid'
                           _hover={{  fontSize:"4xl"  }}
                       
                            icon={<BsLinkedin />}
                          />
                       </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box margin={"auto"}  bg="white" borderRadius="lg" w={{base:"400px",sm:"450px", md:"600px"}}>
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="email" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                           fontWeight="medium"
                            color="white"
                            colorScheme="red"
                            _hover={{  }}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
            
          </Box>
          
        </Flex>
        <Text fontSize={{base:"sm", md:"18px"}} color={'white'} >© 2022 Made with <span style={{ color: "red" }}>❤ </span>By Salem-Basumata</Text>
      </Container>
    )
  }
  
  export default Contact
  

