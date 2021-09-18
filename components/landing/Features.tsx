/* eslint-disable react/no-unescaped-entities */
import { useColorModeValue, chakra } from "@chakra-ui/react";
import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { Button} from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { useRouter } from "next/router";

function Features() {
  
  const router  = useRouter();

  return (
    <>
      <SimpleGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        padding={{base: 10, md: "none"}}
        my={{base : 0, md: 44}}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box>
          <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            // letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color={useColorModeValue("gray.900", "gray.400")}
            lineHeight={{ md: "shorter" }}
            // textShadow="2px 0 currentcolor"
          >
              World's first Blockchain-based Job Platform 

          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={{ md: "lg" }}
          >
              Job Unicorn is the world's first and only job marketplace
              based on the NEAR-chain. This helps you establish trustful
              employer-employee relationships and also makes contract 
              payments easier.
          </chakra.p>
          <Button
            w={{ base: "full", sm: "auto" }}
            size="lg"
            bg={useColorModeValue("gray.900", "gray.700")}
            _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
            color={useColorModeValue("gray.100", "gray.200")}
            as="a"
            onClick={(e) => {
              e.preventDefault();
              router.push("https://docs.jobunicorn.tech");
            }}
              
          >
              Learn More
          </Button>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1630958234938-4f6a4a9dbf3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
          alt="something 1"
          objectFit="contain"
          w="full"
          h="full"
          rounded="md"
          // py={48}
        />
      </SimpleGrid>
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        padding={{base: 10, md: "none"}}
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box order={{ base: "unset", md: 2 }}>
          <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color={useColorModeValue("gray.900", "gray.400")}
            lineHeight={{ md: "shorter" }}
          >
            Large Pool of Specialized Talent
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={{ md: "lg" }}
          >
              We can help you find the best people for your
              organisation across a wide spectrum of fields
              so that you wouldn't have to go anywhere else
              at all. Your search ends at Job Unicorn.
          </chakra.p>
          <Button
            w={{ base: "full", sm: "auto" }}
            size="lg"
            bg={useColorModeValue("gray.900", "gray.700")}
            _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
            color={useColorModeValue("gray.100", "gray.200")}
            as="a"
            onClick={(e) => {
              e.preventDefault();
              router.push("https://docs.jobunicorn.tech");
            }}
          >
              Learn More
          </Button>
        </Box>
        {/* <Box
          
        ></Box> */}
        <Image 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          objectFit="contain"
          alt="something"
          w="full"
          h="full"
          rounded="md"
        />
      </SimpleGrid>
    </>
  );
}
export default Features;