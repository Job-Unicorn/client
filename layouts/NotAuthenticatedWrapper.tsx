import React from 'react'
import Footer from './Footer'
import NotAuthenticatedNavBar from './NotAuthenticated'

const NotAuthenticatedWrapper = ({children}) => {
  return (
    <>
      <NotAuthenticatedNavBar/>
      {children}   
      <Footer /> 
    </>
  )
}

export default NotAuthenticatedWrapper
