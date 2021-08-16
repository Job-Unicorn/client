import Head from 'next/head'
import React from 'react'
import Talent from '../components/talent/Talent'
import GridWrapper from '../layouts/GridWrapper'
import MainWrapper from '../layouts/MainWrapper'

const talent = () => {
    return (
        <>

            <Head>
                <title>Solanazilla | Talent</title>
                <meta name="description" content="Earn in solana" />
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

export default talent
