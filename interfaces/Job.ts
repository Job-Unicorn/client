export interface IJob {

    id: string
    title: string
    description: string
    company: string
    companyId: string
    logo: string
    postedBy: string
    salary: string
    applicants: IJobApplication[]

}

export interface IJobApplication {

    id : string
    accountId : string
    name : string
    description : string
    industry : string
    experience : string
    labels : string[]
    services : IJobApplicationService[]
    skills : string[]

}

export interface IJobApplicationService {
    id : string
    title : string
    jobType : string
    description : string
    salary : number
}

export type IJobs = IJob[]
