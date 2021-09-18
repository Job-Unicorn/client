import { IJob, IJobs } from "../../interfaces/Job";
import { JobActionType } from "../types/Jobs";


export interface IJobsAction {
    type: JobActionType;
    payload?: JobActionPayload;
}

export interface JobActionPayload {
    job? : IJob;
    jobs? : IJobs;
    filter? : string;
}

export interface IJobsState {
  jobs: IJobs;
  filter: string;
}

export const JobsReducer = ( state : IJobsState, action : IJobsAction ) : IJobsState => {
  switch (action.type) {
  case 'ADD_JOBS':
    return {...state, jobs : [...state.jobs, ...action.payload.jobs]};
  case 'ADD_JOB':
    return {...state, jobs : [...state.jobs, action.payload.job]};
  case 'SET_FILTER':
    return {...state, filter : action.payload.filter};

  default:
    return state;
  }
}