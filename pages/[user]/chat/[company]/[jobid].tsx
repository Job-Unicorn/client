import Head from 'next/head'
import React from 'react'
import ChatBody from '../../../../components/chat/ChatBody'
import { withNearWallet } from '../../../../components/near/withNearWallet'
import GridWrapper from '../../../../layouts/GridWrapper'

const Company = () => {
  return (
    <>
      <Head>
        <title>Messages | Company Name</title>
        <meta name="description" content="Earn in solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GridWrapper columns={3} >

        <ChatBody />

      </GridWrapper>
    </>
  )
}

const Page = withNearWallet(Company, "NEEDS_AUTHENTICATION")

export default Page
