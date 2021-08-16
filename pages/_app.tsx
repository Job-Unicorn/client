import { ChakraProvider } from '@chakra-ui/react'
import MainWrapper from '../layouts/MainWrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider><MainWrapper ><Component {...pageProps} /></MainWrapper></ChakraProvider>
}

export default MyApp
