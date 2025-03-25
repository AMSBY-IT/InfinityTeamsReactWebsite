import { Dispatch, ReactNode } from "react";
import { Action } from "../Provider/CandidateProvider";
import { MultiValue, SingleValue } from "react-select";


export type OptionTypeParameter<T>=SingleValue<T> | MultiValue<T>

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
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string,
    ConfirmPassword: string,
}

export interface usercredentials {
    Email: string;
    Password: string
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

export interface professionalData {
    education: [
        {
            instituteName: string;
            courseName: string;
            startYear: number;
            endYear: number
        }
    ];
    professional: [
        {
            isCurrent: boolean;
            companyName: string;
            designation: { id: string, name: string };
            startDate: string | null;
            endDate: string | null;
            jobDetail: string;
        }
    ];
    experienceLevel: string;
}