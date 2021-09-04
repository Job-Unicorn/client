import { Flex, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

const NotAuthorized = () => {
  return (
    <Flex h="87.5vh" w="100%" align="center" justify="center" flexDir="column" >
      <Heading mb="10vh">You are not authorized to view this page</Heading>
      <Image src="/401.gif" h="lg" alt="" />
    </Flex>
  )
}

export default NotAuthorized
