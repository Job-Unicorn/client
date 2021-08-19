import { Flex, Box, Heading, Divider, Spacer, Input, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChatProvider from '../../store/providers/ChatProvider'
import ChatHeader from './ChatHeader'
import OtherPersonChat from './OtherPersonChat'
import PersonalChat from './PersonalChat'

const ChatBody = () => {

    return (
        <ChatProvider>
            <Flex borderColor="gray.300" shadow="sm" h="85vh" borderWidth="thin" p="4" my="10" overflow="hidden" rounded="md" flexDir="column">


                <ChatHeader />


                <Flex p="4" my="4" overflowY="scroll" minH="55vh" maxHeight="full" overscrollY="auto" flexDir="column" rounded="md">


                    <PersonalChat />

                    <OtherPersonChat />

                    <PersonalChat />

                    <OtherPersonChat />

                </Flex>

                <Flex p="4" mb="2" rounded="md">

                    <Input placeholder="Type your message over here..." />


                    <Button color="blue.500" ml="4" >Send</Button>

                </Flex>



            </Flex>

        </ChatProvider>

    )
}

export default ChatBody
