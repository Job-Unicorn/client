import React from 'react'
import { IJobs } from '../../interfaces/Job'
import { IJobsAction } from '../reducers/JobsReducer'


export interface JobsContextInterface {
    jobsState: IJobs
    jobsDispatch: React.Dispatch<IJobsAction>
}

export const JobsContext = React.createContext<JobsContextInterface | null>(null)
