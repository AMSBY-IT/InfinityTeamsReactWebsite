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
    radioSelect:number|null,
    isLogin: boolean;
    errorMessage: string;
    token: string;
    selectedType: string;
    selectedSkills:Selected[];
    selectedLocation:Selected[];
    selectedExperience:string[];
    selectedNoticeperiod:number | null;
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

export interface EducationType {
    instituteName: string;
    courseName: string;
    startYear: number;
    endYear: number;
    finalScore: string;
}

export interface ExperienceType {
    isCurrent: boolean;
    companyName: string;
    designation: { id: string, name: string };
    startDate: string | null;
    endDate: string | null;
    jobDetail: string;
}

export interface professionalData {
    education: EducationType[];
    professional: ExperienceType[];
    experienceLevel?: string;
    noticePeriod?: number;
    ctc?: number;
    ectc?: number
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
        finalScore: string;
        id: string
    }[];
    experiences: {
        isCurrent: boolean;
        companyName: string;
        designation: { id: string, name: string };
        startDate: string | null;
        endDate: string | null;
        jobDetail: string;
        id: string
    }[];
    skills: {
        id: string;
        name: string
    }[];
    candidate: {
        name: string;
        email: string;
        phone: string | null;
        noticePeriod: number;
        lastContacted: string | null;
        isEmailVerified:boolean;
        about:string
    }
}

export interface UpdateProfileType {
    name: string;
    phone: string;
    jobTypePreference: string;
    jobSearchStatus: string;
    noticePeriod: number;
    location: string
}

export interface Candidates {
    id:string;
    name:string;
    profileDescription:string;
    skills:{
        name:string;
        isMain:boolean
    }[];
    totalExperience:string;
    jobTitle:string
}