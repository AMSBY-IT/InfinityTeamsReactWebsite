import { Dispatch, ReactNode } from "react";
import { Action } from "../Provider/CandidateContext";


export interface CandidateContextProps {
    title: Title[];
    skills: Skill[];
    countries: Countries[];
    levels: Levels[];
    candidates: Candidates[];
    loading: boolean;
    isChecked: Record<string, boolean>;
    isLogin: boolean;
    errorMessage:string;
    token:string;
    dispatch: Dispatch<Action>;
}

export interface CandidateProviderProps {
    children: ReactNode;
}

export interface FetchCandidatesParams {
    page?: number;
    limit?: number;
    skillGuids?: string[];
    developerTagGuids?: string[];
    levelGuids?: string[];
    countryGuid?: string;
}

export interface Title {
    id: string;
    name: string
}

export interface Skill {
    id: string;
    name: string
}

export interface Countries {
    id: string;
    name: string
}

export interface Levels {
    id: string;
    name: string
}

export interface Candidates {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string
    email: string;
    phone: number;
    dateOfBirth: null;
    currentAddress: string;
    permanentAddress: string;
    gender: string;
    currentJobTitle: string;
    currentEmployer: string;
    yearsOfExperience: number;
    yearsOfRelevantExperience: number;
    previousJobTitle: string;
    previousEmployer: string;
    currentCTC: number;
    expectedCTC: number;
    dateOfAppointment: string;
    dateOfJoining: string;
    lastContactedDate: string;
    resumeFileName: string;
    // cctc:number;
    // communicationSkills:string;
    // contactNumber:string;
    // country:string;
    // currentCompanyName:string;
    // currentMostRecentJobTitle:string;
    // cvUrl:string;
    // ectc:number;
    // emailAddress:string;
    // firstName:string;
    // gender:string;
    // id:number;
    // lastCompanyName:string;
    // lastContactedDate:string;
    // lastName:string;
    // locationCity:string;
    // sector:string;
    // skills:string[];
    // totalYearsOfExperience:string
}



export interface Selected {
    guid: string;
    id: number;
    label: string;
    value: string;
}

export interface Ischecked {
    id: string; 
    checked: boolean
}

export interface User {
    username: string;
    password: string
}

