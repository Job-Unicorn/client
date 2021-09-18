import React from 'react'
import Footer from './Footer'
import LandingNavBar from './LandingPageNavbar'

const LandingPageWrapper = ({children}) => {
  return (
    <>
      <LandingNavBar />
      {children}   
      <Footer />
    </>
  )
}

export default LandingPageWrapper
