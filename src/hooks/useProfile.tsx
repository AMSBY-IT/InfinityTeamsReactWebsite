/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useAtom } from 'jotai';
import {
  candidateDataAtom,
  Education,
  Experience,
  Skill,
  Candidate,
} from '../atoms/profile';
import { getCandidateProfile } from '@/api/services';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export function useProfile() {
  const [candidateData, setCandidateData] = useAtom(candidateDataAtom);

  const { data: profileData } = useQuery({
    queryKey: ['profile'],
    queryFn: getCandidateProfile,
  });

  React.useEffect(() => {
    if (profileData) {
      setCandidateData(profileData?.data!);
    }
  }, [profileData, setCandidateData]);

  const setEducations = (educations: Education[]) => {
    setCandidateData((prev) => ({ ...prev, educations }));
  };

  const setExperiences = (experiences: Experience[]) => {
    setCandidateData((prev) => ({ ...prev, experiences }));
  };

  const setSkills = (skills: Skill[]) => {
    setCandidateData((prev) => ({ ...prev, skills }));
  };

  const setCandidate = (candidate: Candidate) => {
    console.log(candidate, 'CANDAISAIS');
    setCandidateData((prev) => ({ ...prev, candidate }));
  };

  return {
    candidateData,
    setEducations,
    setExperiences,
    setSkills,
    setCandidate,
  };
}
