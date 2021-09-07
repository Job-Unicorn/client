import { Box, Button, Divider, Flex, Heading, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spacer, Tag, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaUserTie } from 'react-icons/fa'
import { IoIosDoneAll } from 'react-icons/io'
import { AiOutlineRise } from 'react-icons/ai'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Talent = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()

  return (
    <Box borderColor="gray.300" shadow="sm" borderWidth="thin" p="4" my="10" overflow="hidden" rounded="md">

      <Flex>

        <Image rounded="lg" src="https://media-exp1.licdn.com/dms/image/C4E03AQHZdJ_kK6G4YQ/profile-displayphoto-shrink_200_200/0/1624437156870?e=1632960000&v=beta&t=UObUAs-T_aT4l8wgAXDLUDRM3x_NwElh3AJZFX691TU" alt="" objectFit="contain" w="10" />
        <Box ml="4">
          <Heading fontSize="2xl" >Aditya Agarwal</Heading>
          <Text color="gray.600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
        </Box>
        <Spacer />
        <Button onClick={onOpen} variant="ghost" _hover={{ backgroundColor: "none" }} _active={{ backgroundColor: "none" }}>
          <ChevronRightIcon w={6} h={6} />
        </Button>
      </Flex>
      <Flex ml="14" mt="2" color="gray.500" align="center">
        <FaUserTie /> <Text ml="2">Investment Banking </Text>
      </Flex>
      <Flex ml="14" mt="2" color="gray.500" align="center">
        <Tag size="sm" colorScheme="blue" borderRadius="full">
          <AiOutlineRise size="18px" />
          <TagLabel ml="1">Looking for opportunities</TagLabel>
        </Tag>
        <Tag size="sm" ml="3" colorScheme="blue" borderRadius="full">
          <AiOutlineRise size="18px" />
          <TagLabel ml="1">Long term contracts</TagLabel>
        </Tag>
        <Tag size="sm" ml="3" colorScheme="green" borderRadius="full">
          <IoIosDoneAll size="20px" />
          <TagLabel>Verified</TagLabel>
        </Tag>
      </Flex>
      <Flex w="100%" mt="6" flexDir="column" p="6" borderWidth="thin" borderColor="gray.300" rounded="md" >
        <Flex align="center">
          <Heading fontSize="lg" color="gray.700">Investment Banking Associate
          </Heading> <Spacer />
          <Text color="green.500" >$ 113K - 120k</Text>
          <Button size="sm" ml="3" rounded="md" variant="outline" bg="blue.400" color="white" borderRadius="none" >
            Offer a Job
          </Button>

        </Flex>
      </Flex>


      <Modal size="4xl" finalFocusRef={finalRef} scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent maxH="3xl" overflow="hidden" >
          {/* <ModalHeader></ModalHeader>
                    <ModalCloseButton /> */}
          <ModalBody p="6" >
            <Flex>

              <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQHZdJ_kK6G4YQ/profile-displayphoto-shrink_200_200/0/1624437156870?e=1632960000&v=beta&t=UObUAs-T_aT4l8wgAXDLUDRM3x_NwElh3AJZFX691TU" alt="" objectFit="contain" w="10" />
              <Box ml="4">
                <Heading fontSize="2xl" >Aditya Agarwal</Heading>

                <Text color="gray.600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
              </Box>
            </Flex>
            <Flex ml="14" mt="2" color="gray.500" align="center">
              <FaUserTie /> <Text ml="2">Employee</Text>
            </Flex>
            <Flex ml="14" mt="2" color="gray.500" align="center">
              <Tag size="sm" colorScheme="blue" borderRadius="full">
                <AiOutlineRise size="18px" />
                <TagLabel ml="1">High Growth</TagLabel>
              </Tag>
              <Tag size="sm" ml="3" colorScheme="green" borderRadius="full">
                <IoIosDoneAll size="20px" />
                <TagLabel>Verified</TagLabel>
              </Tag>
            </Flex>
            <Flex w="100%" mt="6" flexDir="row" p="6" borderWidth="thin" borderColor="gray.300" rounded="md" >

              {/* ------------------------------------------------------------------------------------------ */}

              <Box w="60%" pr="6">
                <Heading fontSize="2xl" color="gray.700" mb="2" >Lorem ipsum dolor sit amet consectetur adipisicing.</Heading>
                <Divider />
                <Text mt="2" color="gray.500" fontSize="sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nulla laboriosam sequi iste veniam assumenda animi, mollitia, in vero, temporibus aliquam minima architecto doloribus voluptates repellendus necessitatibus atque eum quae? Consequatur nulla laboriosam sequi iste veniam assumenda animi, mollitia, in vero, temporibus aliquam minima architecto doloribus voluptates repellendus necessitatibus atque eum quae?</Text>
              </Box>


              {/* ------------------------------------------------------------------------------------------ */}

              <Box w="40%" borderColor="gray.300" borderWidth="thin" p="3" rounded="md" >

                <Box mb="3">
                  <Text fontWeight="black" >Job Type</Text>
                  <Text>Full Time</Text>
                </Box>
                <Box mb="3">
                  <Text fontWeight="black" mb="2" >Skills</Text>
                  < >
                    <Tag size="sm" m="1" colorScheme="blue" borderRadius="full">
                      <AiOutlineRise size="18px" />
                      <TagLabel ml="1">Risk Analysis</TagLabel>
                    </Tag>
                    <Tag size="sm" m="1" colorScheme="green" borderRadius="full">
                      <IoIosDoneAll size="20px" />
                      <TagLabel>Verified</TagLabel>
                    </Tag>
                    <Tag size="sm" m="1" colorScheme="green" borderRadius="full">
                      <IoIosDoneAll size="20px" />
                      <TagLabel>Verified</TagLabel>
                    </Tag>
                    <Tag size="sm" m="1" colorScheme="green" borderRadius="full">
                      <IoIosDoneAll size="20px" />
                      <TagLabel>Verified</TagLabel>
                    </Tag>
                    <Tag size="sm" m="1" colorScheme="green" borderRadius="full">
                      <IoIosDoneAll size="20px" />
                      <TagLabel>Verified</TagLabel>
                    </Tag>
                  </>
                </Box>
                <Box mb="3">
                  <Text fontWeight="black" >Experience</Text>
                  <Text>2+ years</Text>
                </Box>


              </Box>


              {/* ------------------------------------------------------------------------------------------ */}

            </Flex>
            <Flex w="100%" mt="6" flexDir="column" p="6" borderWidth="thin" borderColor="gray.300" rounded="md" >
              <Flex align="center">

                <Heading fontSize="lg" color="gray.700">Lorem ipsum dolor sit amet consectetur adipisicing.</Heading> <Spacer />
                <Text color="green.500" >$ 113K - 120k</Text>
                <Button size="sm" ml="3" rounded="md" variant="outline" bg="blue.400" color="white" borderRadius="none" >
                  Offer a Job
                </Button>

              </Flex>
              {/* <Divider my="4" />
                            <Flex align="center">
                                <Heading fontSize="lg" color="gray.700">Lorem ipsum dolor sit amet consectetur adipisicing.</Heading> <Spacer />
                                <Text color="green.500" >$ 113K - 120k</Text>
                                <Button size="sm" ml="3" rounded="md" variant="outline" bg="blue.400" color="white" borderRadius="none" >
                                    Apply
                                </Button>

                            </Flex> */}
            </Flex>
          </ModalBody>

          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>

    </Box>
  )
}

export default Talent
