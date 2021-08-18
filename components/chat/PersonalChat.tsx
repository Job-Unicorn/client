import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const PersonalChat = () => {
    return (
        <Flex>
            <Spacer w="full" />
            <Box bg="blue.50" p="4" mb="4" w="96" borderColor="gray.300" shadow="sm" borderWidth="thin" rounded="lg" >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias cupiditate minima voluptate assumenda quaerat qui nam temporibus nisi similique.</Text>
            </Box>
        </Flex>
    )
}

export default PersonalChat
