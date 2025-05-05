// src/atoms/candidateData.ts
import { atom } from 'jotai'

export type Education = {
  id: string
  instituteName: string
  courseName: string
  startYear: number
  endYear: number
  finalScore: string
}

export type Skill = {
  id: string
  name: string
}

export type Experience = {
    id: string
  isCurrent: boolean
  companyName: string
  designation: { id: string; name: string }
  startDate: string
  endDate: string
  jobDetail: string
	
}

export type Candidate = {
  name: string
  email: string
  phone: string | null
  noticePeriod: number | null
  lastContacted: string | null
  isEmailVerified: boolean
  ctc: number | null
  ectc: number | null
  experienceLevel: string | null
  about:string 
}

export type CandidateResponse = {
  educations: Education[]
  experiences: Experience[]
  skills: Skill[]
  candidate: Candidate
}

export const candidateDataAtom = atom<CandidateResponse>({
  educations: [
    
  ],
  experiences: [],
  skills: [
    
  ],
  candidate: {
    name: "",
    email: "",
    phone: null,
    noticePeriod: null,
    lastContacted: null,
    isEmailVerified: true,
    ctc: null,
    ectc: null,
    experienceLevel: null,
	about:""
  },
})