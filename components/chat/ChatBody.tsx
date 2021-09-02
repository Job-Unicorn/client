import { Flex, Button, Spacer, Textarea, InputGroup, InputRightElement, } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { ChatContext } from '../../store/contexts/ChatContext'
import ChatProvider from '../../store/providers/ChatProvider'
import ChatHeader from './ChatHeader'
import OtherPersonChat from './OtherPersonChat'
import PersonalChat from './PersonalChat'
import { useForm } from "react-hook-form";

const ChatBody = () => {
  const user = "Aarush"
  const {
    register,
    // eslint-disable-next-line no-unused-vars
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line no-unused-vars
  const { chatState, chatDispatch } = useContext(ChatContext)

  return (
    <ChatProvider>

      <Flex borderColor="gray.300" shadow="sm" h="85vh" borderWidth="thin" p="4" my="10" overflow="hidden" rounded="md" flexDir="column">

        <ChatHeader />

        <Flex p="4" my="4" overflowY="scroll" minH="45vh" maxHeight="full" overscrollY="auto" flexDir="column" rounded="md">


          {chatState.messages.map((chat) => {
            if (chat.sender === user) {
              return (<PersonalChat key={chat.id} chat={chat} />)
            } else {
              return (<OtherPersonChat key={chat.id} chat={chat} />)
            }
          }
          )}


        </Flex>
        <Spacer />
        <form onSubmit={() => { }}>
          <Flex p="4" mb="2" rounded="md">


            <InputGroup>
              <Textarea size="sm" fontSize="md" resize="both" placeholder="Type your message over here..." {...register("message", { required: true })} />
              <InputRightElement width="4.5rem">
                <Button color="blue.500" mt="3.5rem" mr="4" type="submit" >Send</Button>
              </InputRightElement>

            </InputGroup>
          </Flex>
        </form>
      </Flex>

    </ChatProvider>

  )
}

export default ChatBody
