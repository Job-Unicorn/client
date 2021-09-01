import { Flex, Box, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

const OtherPersonChat = ({ chat }) => {
  return (
    <Flex>
      <Box p="4" mb="4" w="96" borderColor="gray.300" shadow="sm" borderWidth="thin" rounded="lg" >
        <Flex flexDir="column">
          <Text>{chat.message}</Text>
          <Flex>
            <Spacer />
            <Text fontSize="xs" color="gray" >{(chat.time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default OtherPersonChat
