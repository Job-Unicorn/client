import React from 'react'
import { JobsContext } from '../contexts/JobsContext'
import { useJobsState } from '../hooks/useJobsState'

const JobsProvider = ({children}) => {
  return (
    <JobsContext.Provider value={useJobsState()}>
      {children}
    </JobsContext.Provider>
  )
}

export default JobsProvider
