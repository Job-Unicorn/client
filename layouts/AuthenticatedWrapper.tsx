import React from 'react'
import AuthenticatedNavBar from './AuthenticatedNavbar'
import Footer from './Footer'

const AuthenticatedWrapper = ({children}) => {
  return (
    <>
      <AuthenticatedNavBar />
      {children}
      <Footer/>
    </>
  )
}

export default AuthenticatedWrapper
