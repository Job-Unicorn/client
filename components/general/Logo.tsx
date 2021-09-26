import { Image } from '@chakra-ui/image'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import React from 'react'

/**
 * 
 * # Logo
 * 
 * Gives a flex box with the logo 
 * and the name of the app and the
 * link to the home page
 * 
 */

export const Logo = (props) => {
  return (
    <Box {...props}>
      
      <Flex align="center">
        <Image alt="logo" src="/logo.svg" w="10" />
        <Link href="/" >
          <Text fontSize="2xl" ml="4" cursor="pointer" fontWeight="bold" color="#000F30" >
                      Job Unicorn
          </Text>
        </Link>
      </Flex>
      
    </Box>
  )
}