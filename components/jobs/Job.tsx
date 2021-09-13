import { Box, Button, Divider, Flex, Heading, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spacer, Tag, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaUserTie } from 'react-icons/fa'
import { IoIosDoneAll } from 'react-icons/io'
import { AiOutlineRise } from 'react-icons/ai'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IJob } from '../../interfaces/Job'

const Job = ({job} : {job : IJob}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()

  return (
    <Box borderColor="gray.300" shadow="sm" borderWidth="thin" p="4" my="10" overflow="hidden" rounded="md">

      <Flex>

        <Image src={job.logo} alt="" objectFit="contain" w="10" />
        <Box ml="4">
          <Heading fontSize="2xl" >{job.company}</Heading>
          {/* company description */}
          <Text color="gray.600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
        </Box>
        <Spacer />
        {/* Modal Opener Button */}
        <Button onClick={onOpen} variant="ghost" _hover={{ backgroundColor: "none" }} _active={{ backgroundColor: "none"}}>
          <ChevronRightIcon w={6} h={6} />
        </Button>
      </Flex>
      {/* Company Employee Strength */}
      <Flex ml="14" mt="2" color="gray.500" align="center">
        <FaUserTie /> <Text ml="2">Employee 1k-10k</Text>
      </Flex>
      {/* Labels of company */}
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
      {/* Job Overview */}
      <Flex w="100%" mt="6" flexDir="column" p="6" borderWidth="thin" borderColor="gray.300" rounded="md" >
        <Flex align="center">
          <Heading fontSize="lg" color="gray.700">{job.title}</Heading> <Spacer />
          <Text color="green.500" >{job.salary} NEAR</Text>
          <Button size="sm" ml="4" rounded="md" variant="outline" bg="blue.400" color="white" borderRadius="none" >
            Apply
          </Button>

        </Flex>
      </Flex>

      {/* MODAL */}
      <Modal size="4xl" finalFocusRef={finalRef} scrollBehavior="inside" isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent maxH="3xl" overflow="hidden" >
          {/* <ModalHeader></ModalHeader>
                    <ModalCloseButton /> */}
          <ModalBody p="6" >
            <Flex>
              {/* Company logo in Modal */}
              <Image src={job.logo} alt="" objectFit="contain" w="10" />
              <Box ml="4">

                {/* Company Name in Modal */}
                <Heading fontSize="2xl" >{job.company}</Heading>
                {/* Company description in Modal */}
                <Text color="gray.600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, porro!</Text>
              </Box>
            </Flex>
            <Flex ml="14" mt="2" color="gray.500" align="center">
              {/* Company employee strength in Modal */}
              <FaUserTie /> <Text ml="2">Employee 1k-10k</Text>
            </Flex>
            {/* Company Labels in Modal */}
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

              <Flex w="60%" pr="6" flexDir="column">
                {/* Job Title in Modal */}
                <Heading fontSize="2xl" color="gray.700" mb="2" >{job.title}</Heading>
                <Divider />
                {/* Job Description in Modal */}
                <Text mt="2" color="gray.500" fontSize="sm">{job.description}</Text>

                <Spacer />
                    
                <Button size="md" w="fit-content" rounded="md" variant="outline" bg="blue.400" color="white" borderRadius="none" >
                  Apply
                </Button>
              </Flex>


              {/* ------------------------------------------------------------------------------------------ */}

              <Box w="40%" borderColor="gray.300" borderWidth="thin" p="3" rounded="md" >

                <Box mb="3">
                  {/* Job type in Modal */}
                  <Text fontWeight="black" >Job Type</Text>
                  <Text>{job.type}</Text>
                </Box>
                <Box mb="3">
                  <Text fontWeight="black" mb="2" >Skills Required</Text>
                  {/* Job skills required / labels */}
                  < >

                    {job.skillsRequired.map((skill, index) => (
                      <Tag key={index}size="sm" mr="1" mb="2" px="2" py="1" colorScheme="blue" borderRadius="full">
                        <TagLabel>{skill}</TagLabel>
                      </Tag>
                    ))}
                    
                  </>
                </Box>
                <Box mb="3">
                  <Text fontWeight="black" >Experience</Text>
                  <Text>{job.experienceRequired}+ years</Text>
                </Box>


              </Box>


              {/* ------------------------------------------------------------------------------------------ */}

            </Flex>
           
          </ModalBody>

          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>

    </Box>
  )
}

export default Job
