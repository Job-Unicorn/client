import { Flex, Box, Heading, Divider, Spacer, Input, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import OtherPersonChat from './OtherPersonChat'
import PersonalChat from './PersonalChat'

const ChatBody = () => {
    return (
        <Flex borderColor="gray.300" shadow="sm" h="85vh" borderWidth="thin" p="4" my="10" overflow="hidden" rounded="md" flexDir="column">

            <Flex w="100%" mt="2" flexDir="column" h="fit-content" p="6" borderWidth="thin" borderColor="gray.300" rounded="md" >

                <Flex mb="4">

                    <Image src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" objectFit="contain" w="10" />

                    <Box ml="4">
                        <Heading fontSize="2xl" >Facebook</Heading>

                        <Text color="gray.600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
                    </Box>
                </Flex>
                <Divider />
                <Flex align="center" mt="4">
                    <Heading fontSize="lg" color="gray.700">Lorem ipsum dolor sit amet consectetur adipisicing.</Heading> <Spacer />
                    <Text color="green.500" >$ 113K - 120k</Text>
                </Flex>

            </Flex>


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

    )
}

export default ChatBody
