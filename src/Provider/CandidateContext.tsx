import { createContext } from 'react';
import {
  commonType,
  Candidates,
  CandidateContextProps,
  candidateProfile
} from '../Types/types';


export const initialState = {
  isLogin: false,
  loading: false,
  errorMessage: '',
  token: '',
  title: [] as commonType[],
  skills: [] as commonType[],
  countries: [] as commonType[],
  levels: [] as commonType[],
  languages: [] as commonType[],
  designation: [] as commonType[],
  degree: [] as commonType[],
  candidates: [] as Candidates[],
  isChecked: {} as Record<string, boolean>,
  selectedType: localStorage.getItem("etype") ?? "Fresher",
  profile: {
    candidate: {
      name: '',
      email: '',
      phone: null,
      noticePeriod: '',
      lastContacted: null
    },
    educations: [],
    experiences: [],
    skills: [],
  } as candidateProfile,
  dispatch: () => { }
};

export const CandidateContext = createContext<
  CandidateContextProps
>(initialState);
