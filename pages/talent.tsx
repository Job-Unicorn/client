import Head from 'next/head'
import React from 'react'
import { withNearWallet } from '../components/near/withNearWallet'
import Talent from '../components/talent/Talent'
import GridWrapper from '../layouts/GridWrapper'

const talent = () => {
  return (
    <>

      <Head>
        <title>Job Unicorn | Talent</title>
        <meta name="description" content="Earn in NEAR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridWrapper columns={3}>

        <Talent />
        <Talent />
        <Talent />

      </GridWrapper>

    </>
  )
}

const Page = withNearWallet(talent, "DOES_NOT_NEED_AUTHENTICATION")

export default Page