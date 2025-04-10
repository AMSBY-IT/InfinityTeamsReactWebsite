import { Dispatch, ReactNode } from "react";
import { Action } from "../Provider/CandidateProvider";
import { MultiValue, SingleValue } from "react-select";



export interface CandidateContextProps {
    title: commonType[];
    skills: commonType[];
    countries: commonType[];
    levels: commonType[];
    languages: commonType[];
    designation: commonType[];
    degree: commonType[];
    candidates: Candidates[];
    loading: boolean;
    isChecked: Record<string, boolean>;
    isLogin: boolean;
    errorMessage: string;
    token: string;
    selectedType: string;
    profile: candidateProfile;
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

export interface commonType {
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

export interface userdata {
    firstName: string;
    lastName: string;
    email: string;
    password: string,
    confirmPassword: string,
}

export interface usercredentials {
    email: string;
    password: string
}

export interface personalData {
    country: string;
    city: string;
    language: { id: string }[];
    isFresher: boolean
}

export interface OptionType {
    value: string;
    label: string;
};

export interface Education {
    instituteName: string;
    courseName: string;
    startYear: number;
    endYear: number;
    finalScore: string
}

export interface Experience {
    isCurrent: boolean;
    companyName: string;
    designation: { id: string, name: string };
    startDate: string | null;
    endDate: string | null;
    jobDetail: string;
}

export interface professionalData {
    education: Education[];
    professional: Experience[];
    experienceLevel: string;
    noticePeriod: number;
    ctc: number;
    ectc: number
}

export interface skillsData {
    skills: { id: string }[]
}

export type OptionTypeParameter<T> = SingleValue<T> | MultiValue<T>


export interface candidateProfile {
    educations: {
        instituteName: string;
        courseName: string;
        startYear: number;
        endYear: number;
        finalScore: string
    }[];
    experiences: {
        isCurrent: boolean;
        companyName: string;
        designation: { id: string, name: string };
        startDate: string | null;
        endDate: string | null;
        jobDetail: string;
    }[];
    skills: {
        id: string;
        name: string
    }[];
    candidate: {
        name: string;
        email: string;
        phone: string | null;
        noticePeriod: string;
        lastContacted: string | null
    }
}
