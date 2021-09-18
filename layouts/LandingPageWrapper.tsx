import { chakra } from '@chakra-ui/system'
import React from 'react'
import Footer from './Footer'
import LandingNavBar from './LandingPageNavbar'

const LandingPageWrapper = ({children}) => {
  return (
    < chakra.div bgGradient="linear(to-bl,  #b5c6e0, #ebf4f5, #ebf4f5 ,#ebf4f5, #ebf4f5, #b5c6e0)" >
      <LandingNavBar />
      {children}   
      <Footer />
    </chakra.div>
  )
}

export default LandingPageWrapper
