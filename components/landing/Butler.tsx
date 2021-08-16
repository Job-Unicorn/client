import { Button, Flex, Heading, Spacer, Stat, StatLabel, StatNumber, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Butler = ({ title, stat }) => {
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('white', 'white')}
            rounded={'sm'}
            color="white"
        >
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    )
}

export default Butler
