import { useQuery } from "@tanstack/react-query";
import AboutCandidateSection from "./aboutSection";
import CompanyPreferences from "./companyPreference";
import PersonalDetails from "./personalDetail";
import ProfileStrength from "./profileStrength";
import TechnicalSkills from "./technicalSkills";
import WorkExperience from "./workExperience";
import { getCandidateProfile } from "@/api/services";
import { useContext, useEffect } from "react";
import { CandidateContext } from "@/Provider/CandidateContext";
import Education from "./education";

export default function Profile() {

  const { dispatch } =useContext(CandidateContext);

  const { data: profileData } = useQuery({
    queryKey: ["profile"],
    queryFn: getCandidateProfile,
  });
  useEffect(() => {
      if (profileData) {
        dispatch({ type: "SET_CANDIDATEPROFILE", payload: profileData });
      }
    }, [profileData,dispatch]);
  return (
    <>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Column - Smaller  */}
          <div className="lg:col-span-1 space-y-6">
            <PersonalDetails />
            <ProfileStrength />
            <CompanyPreferences />
          </div>

          {/* Right Column - Larger */}
          <div className="lg:col-span-2 space-y-6">
            <TechnicalSkills />
            <AboutCandidateSection />
            <WorkExperience />
            <Education/>
          </div>
        </div>
      </div>
    </>
  );
}
