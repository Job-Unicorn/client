import { IJob, IJobs } from "../../interfaces/Job";
import { JobActionType } from "../types/Jobs";


export interface IJobsAction {
    type: JobActionType;
    payload?: JobActionPayload;
}

export interface JobActionPayload {
    job? : IJob;
    jobs? : IJobs;
}

export const JobsReducer = ( state : IJobs, action : IJobsAction ) : IJobs => {
  switch (action.type) {
  case 'SET_JOBS':
    return [...state, ...action.payload.jobs];
  case 'ADD_JOB':
    return [...state, action.payload.job];
  default:
    return state;
  }
}