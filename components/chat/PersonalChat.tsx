import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Chat } from '../../store/contexts/ChatContext'

const PersonalChat = ({ chat }) => {
    return (
        <Flex>
            <Spacer w="full" />
            <Box bg="blue.50" p="4" mb="4" w="96" borderColor="gray.300" shadow="sm" borderWidth="thin" rounded="lg" >
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

export default PersonalChat
