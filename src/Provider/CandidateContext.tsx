import { createContext } from 'react';
import {
  commonType,
  Candidates,
  CandidateContextProps,
  candidateProfile,
  Selected
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
  isChecked: {} as Record<string, boolean>,
  selectedType: 'Fresher',
  profile: {
    candidate: {
      name: '',
      email: '',
      phone: null,
      noticePeriod: '',
      lastContacted: null,
      isEmailVerified: false
    },
    educations: [],
    experiences: [],
    skills: [],
  } as candidateProfile,
  candidates: [{
    id: '',
    name: '',
    profileDescription: '',
    skills: [],
    totalExperience: '',
    jobTitle: ''
  }] as Candidates[],
  selectedSkills:[] as Selected[],
  selectedLocation:[] as Selected[],
  selectedExperience:[] as string[],
  selectedNoticeperiod:null as number|null,
  dispatch: () => { }
};

export const CandidateContext = createContext<
  CandidateContextProps
>(initialState);
