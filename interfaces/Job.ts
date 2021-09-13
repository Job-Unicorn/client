export interface IJob {

    id: string
    title: string
    description: string
    company: string
    companyId: string
    logo: string
    type: string
    postedBy: string
    salary: string
    skillsRequired: string[]
    experienceRequired: number
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
