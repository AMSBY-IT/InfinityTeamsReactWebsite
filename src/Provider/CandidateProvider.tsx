import React, { useReducer } from "react";
import {
  commonType,
  Candidates,
  CandidateProviderProps,
  candidateProfile,
} from "../Types/types";
import { CandidateContext, initialState } from "./CandidateContext";

export type Action =
  | { type: "SET_LOGIN"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_TOKEN"; payload: string }
  | { type: "SET_TITLE"; payload: commonType[] }
  | { type: "SET_SKILLS"; payload: commonType[] }
  | { type: "SET_COUNTRY"; payload: commonType[] }
  | { type: "SET_LEVEL"; payload: commonType[] }
  | { type: "SET_DESIGNATION"; payload: commonType[] }
  | { type: "SET_DEGREE"; payload: commonType[] }
  | { type: "SET_LANGUAGES"; payload: commonType[] }
  | { type: "SET_CANDIDATES"; payload: Candidates[] }
  | { type: "SET_CHECKED"; payload: { id: string; checked: boolean } }
  | { type: "SET_SELECTEDTYPE"; payload: string }
  | { type: "SET_CANDIDATEPROFILE"; payload: candidateProfile }
  | { type: "UPDATE_EDUCATION"; payload: candidateProfile["educations"] }
  | { type: "UPDATE_EXPERIENCE"; payload: candidateProfile["experiences"] }
  | { type: "UPDATE_CANDIDATEINFO"; payload: candidateProfile["candidate"] };

const Reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLogin: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_SKILLS":
      return { ...state, skills: action.payload };
    case "SET_COUNTRY":
      return { ...state, countries: action.payload };
    case "SET_LEVEL":
      return { ...state, levels: action.payload };
    case "SET_LANGUAGES":
      return { ...state, languages: action.payload };
    case "SET_DESIGNATION":
      return { ...state, designation: action.payload };
    case "SET_DEGREE":
      return { ...state, degree: action.payload };
    case "SET_CANDIDATES":
      return { ...state, candidates: action.payload };
    case "SET_CHECKED":
      return {
        ...state,
        isChecked: {
          ...state.isChecked,
          [action.payload.id]: action.payload.checked,
        },
      };
    case "SET_SELECTEDTYPE":
      return { ...state, selectedType: action.payload };
    case "SET_CANDIDATEPROFILE":
      return { ...state, profile: action.payload };
    case "UPDATE_EDUCATION":
      return {
        ...state,
        profile: {
          ...state.profile,
          educations: action.payload,
        },
      };
      case "UPDATE_EXPERIENCE":
      return {
        ...state,
        profile: {
          ...state.profile,
          experiences: action.payload,
        },
      };
      case "UPDATE_CANDIDATEINFO":
      return {
        ...state,
        profile: {
          ...state.profile,
          candidate: action.payload,
        },
      };
      
    default:
      return state;
  }
};

export const CandidateProvider: React.FC<CandidateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CandidateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CandidateContext.Provider>
  );
};
