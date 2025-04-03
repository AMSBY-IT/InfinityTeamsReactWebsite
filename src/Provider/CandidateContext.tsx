import  { createContext } from 'react';
import {
  commonType,
  Candidates,
  CandidateContextProps,
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
  languages:[] as commonType[],
  designation:[] as commonType[],
  degree:[] as commonType[],
  candidates: [] as Candidates[],
  isChecked: {} as Record<string, boolean>,
  selectedType:'Fresher',
  dispatch: ()=>{}
};

export const CandidateContext = createContext<
  CandidateContextProps
>(initialState);
