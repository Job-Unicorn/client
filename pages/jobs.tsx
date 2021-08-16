import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Job from '../components/jobs/Job'
import GridWrapper from '../layouts/GridWrapper'
import MainWrapper from '../layouts/MainWrapper'

const jobs = () => {
    return (
        <>

            <Head>
                <title>Solanazilla | Jobs</title>
                <meta name="description" content="Earn in solana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GridWrapper columns={3} >

                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>
                <Job></Job>

            </GridWrapper>

        </>
    )
}

export default jobs
