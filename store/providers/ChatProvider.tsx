import React from 'react'
import { ChatContext } from '../contexts/ChatContext'
import { useChatState } from '../hooks/useChatState'

const ChatProvider = ({ children }) => {
  return (
    <ChatContext.Provider value={useChatState()} >{children}</ChatContext.Provider>
  )
}

export default ChatProvider
