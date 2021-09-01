import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'

const MainWrapper = (props) => {
  return (
    <>

      <NavBar />

      {props.children}

      <Footer />

    </>
  )
}

export default MainWrapper
