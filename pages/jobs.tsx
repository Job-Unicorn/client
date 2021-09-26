/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import GridWrapper from '../layouts/GridWrapper'
import { withNearWallet } from '../components/near/withNearWallet'
import Jobs from '../mock_data/jobs.json'
import { IJobs } from '../interfaces/Job'
import { useJobsState } from '../store/hooks/useJobsState'
import dynamic from 'next/dynamic'
import useInView from 'react-cool-inview'
import { Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import JobsProvider from '../store/providers/JobsProvider'
import SEO from '../components/general/SEO'
const Job = dynamic(() => import('../components/jobs/Job'))
const NoResultsFound = dynamic(() => import('../components/jobs/NoResultsFound'))


const JobsPage = () => {

  const {jobsState, jobsDispatch} = useJobsState()
  const [jobs, setJobs] = React.useState<IJobs>([])
  const [moreJobsAvailable, setMoreJobsAvailable] = React.useState<boolean>(true)
  const { observe, inView } = useInView({
    // onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  // ON PAGE LOAD
  useEffect( () => {
    jobsDispatch({ type : 'ADD_JOBS', payload : {jobs : (Jobs as unknown as IJobs)}})
  }, [])

  // ON PAGE SCROLL DOWN
  useEffect( () => {
    
    jobsDispatch({ type : 'ADD_JOBS', payload : {jobs : (Jobs as unknown as IJobs)}})
    

  } , [inView])

  // ON JOBS STATE UPDATE
  useEffect( () => {
    if (jobsState.filter == '') {
      setJobs(jobsState.jobs)
    } else {
      setJobs(jobsState.jobs.filter(job => job.title.toLowerCase().includes(jobsState.filter.toLowerCase())))
      
      if (jobs.length == 0) { setMoreJobsAvailable(false) } else { setMoreJobsAvailable(true) }

    }
  }, [jobsState])

  return (
    
    <JobsProvider>
      
      <SEO title={"Find the best jobs."} />

      <Box  py="8" borderBottomColor="gray.200" borderBottomWidth="thin">
        <GridWrapper columns={3} >
          <Input placeholder="Search" onChange={e => {


            jobsDispatch({
              type: 'SET_FILTER',
              payload:{ filter : e.target.value}
            })

            
          }} size={'lg'} />
        </GridWrapper>
      </Box>

      <GridWrapper columns={3} >

        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}

        <div ref={observe}>
          {!moreJobsAvailable && <NoResultsFound />}
        </div>

      </GridWrapper>
      
     

    </ JobsProvider> 
  )
}

const Page = withNearWallet(JobsPage, "DOES_NOT_NEED_AUTHENTICATION")

export default Page
