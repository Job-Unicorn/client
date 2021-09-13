import { useReducer } from "react";
import { JobsContextInterface } from "../contexts/JobsContext";
import { JobsReducer } from "../reducers/JobsReducer";
import { JobsInitialState } from "../state/jobs";

  

export const useJobsState = () : JobsContextInterface => {
  const [jobsState, jobsDispatch] = useReducer(JobsReducer, JobsInitialState);
  return { jobsState, jobsDispatch };
}
