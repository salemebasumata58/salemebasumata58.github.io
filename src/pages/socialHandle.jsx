import { HStack, IconButton, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

import {AiFillGithub, AiFillInstagram} from "react-icons/ai"
import {ImLinkedin2} from "react-icons/im"
import {FiGithub} from "react-icons/fi"

import { Link, NavLink } from 'react-router-dom'

const SocialHandle = () => {
  return (
        <VStack position="fixed"
     
         bottom={{base:"none",sm:5}}
         left={{base:"none",sm:5}} >
     
          <a  href="https://github.com/salemebasumata58" target="_blank" >
             <IconButton 
             display={{base:"none", md:"-webkit-inline-flex"}}  
             size="md"
             borderRadius="20px"
               fontSize="4xl"
               colorScheme="purple"
               
               icon={<AiFillGithub />}
             />
          </a>
          <a  href="https://www.linkedin.com/in/salem-basumata/" target="_blank" >
             <IconButton 
             display={{base:"none", md:"-webkit-inline-flex"}}  size="md"
             borderRadius="20px"
               fontSize="xl"
            
               colorScheme="purple"
               icon={<ImLinkedin2 />}
             />
          </a>
          <a  href="https://www.instagram.com/salem_basumata/" target="_blank" >
             <IconButton 
             display={{base:"none", md:"-webkit-inline-flex"}}  size="md"
             borderRadius="20px"
               fontSize="xl"
            
               colorScheme="purple"
               icon={<AiFillInstagram />}
             />
          </a>
     
     </VStack>
  )
}

export default SocialHandle
