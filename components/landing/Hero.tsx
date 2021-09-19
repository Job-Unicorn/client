/* eslint-disable react/no-unescaped-entities */
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import {useColorModeValue, Button} from "@chakra-ui/react"
import { useRouter } from 'next/router'

function Hero(){

  const router = useRouter()

  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={10}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          Making {" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.500 , blue.400)"
            fontWeight="extrabold"
          >
            Hiring Easier
          </Text>{" "}
           a little.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={8}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          Hiring is not easy, but with the right skillset it can be done.
          Our partner companies are in desperate need of your skills and 
          we've found the companies who can give you what you want. Don't
           search the web for jobs - we've made it easier than ever.

        </chakra.p>
        <Stack
          direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={10}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="blue"
            bg="blue.400"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            onClick={(e) => {
              e.preventDefault()
              router.push("/jobs")
            }}

          >
            Get Started
          </Button>
          <Button
            as="a"
            bg="white"
            color="brand.900"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            onClick={(e) => {
              e.preventDefault()
              router.push("/demo")
            }}
          >
            Watch Demo
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="/preview.png"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Box>
  );
};

export default Hero;