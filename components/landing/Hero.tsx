import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import GridWrapper from '../../layouts/GridWrapper'

const Hero = () => {
  return (

    <GridWrapper columns={3}>
      <Flex alignItems="center" justifyContent="space-around" minH="93vh">

        <Flex flexDir="column">

          <Heading as="h1" fontSize="7xl" my="10" w="xl">
            You’ve come to the right place
          </Heading>

          <Heading as="h2" fontSize="2xl" fontWeight="normal" w="xl" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor debitis sint mollitia eos dolorum error rem iusto numquam vitae cupiditate!
          </Heading>

          <Flex mt="20" align="center">
            <Button size="lg" variant="outline" bg="blue.400" color="white" borderRadius="none" >
              Hire Talent
            </Button>
            <Button mx="8" size="lg" bg="white" variant="outline" borderWidth="2px" borderColor="blue.400" color="blue.400" borderRadius="none"  >
              Get Hired
            </Button>
          </Flex>

        </Flex>

        <Image src="https://cdni.iconscout.com/illustration/free/thumb/man-working-remotely-and-drinking-coffee-2814641-2343695.png" w="xl" mx="-32" />


      </Flex >
    </GridWrapper>
  )
}

export default Hero
