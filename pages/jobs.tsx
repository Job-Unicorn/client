import Head from 'next/head'
import React, { useEffect } from 'react'
import GridWrapper from '../layouts/GridWrapper'
import { withNearWallet } from '../components/near/withNearWallet'
import Jobs from '../mock_data/jobs.json'
import { IJobs } from '../interfaces/Job'
import SearchBar from '../components/jobs/search/SearchBar'
import JobsProvider from '../store/providers/JobsProvider'
import { useJobsState } from '../store/hooks/useJobsState'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'

const Job = dynamic(() => import('../components/jobs/Job'))


const JobsPage = () => {

  const {jobsState, jobsDispatch} = useJobsState()

  const { observe, inView } = useInView({
    // onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  useEffect( () => {
    jobsDispatch({ type : 'SET_JOBS', payload : {jobs : (Jobs as unknown as IJobs)}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect( () => {
    jobsDispatch({ type : 'SET_JOBS', payload : {jobs : (Jobs as unknown as IJobs)}})
    console.log(inView)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [inView])

  return (
    <JobsProvider>

      <Head>
        <title>Job Unicorn | Jobs</title>
        <meta name="description" content="Earn in NEAR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar  />

      <GridWrapper columns={3} >

        {(jobsState.map(job => (
          <Job key={job.id}  />
        )
        ))}

      </GridWrapper>
      
      <div ref={observe}>
      </div>

    </JobsProvider>
  )
}

const Page = withNearWallet(JobsPage, "DOES_NOT_NEED_AUTHENTICATION")

export default Page
