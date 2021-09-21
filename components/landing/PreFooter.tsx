import React from "react"
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  Button
} from "@chakra-ui/react"
import { useRouter } from 'next/router'


export default function PreFooter() {

  const router = useRouter()

  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      // p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        // bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.900", "gray.500")}
            >
              Apply to your dream job today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={10}
            mt={10}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Button
                w="full"
                h="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                colorScheme={useColorModeValue("blue","blue")}
                color="white"
                bg="blue.400"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/jobs")
                }}
              >
                Get started
              </Button>
            </Box>
            <Box  display="inline-flex" rounded="md" shadow="md" >
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="blue.400"
                bg="white"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("https://docs.jobunicorn.tech")
                }}
              >
                Learn more
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  )
}