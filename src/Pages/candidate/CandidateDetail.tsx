import NameSection from "@/component/CandidateDetail/NameSection";
import { useEffect } from "react";

import AboutSection from "@/component/CandidateDetail/AboutSection";
import SkillsSection from "@/component/CandidateDetail/SkillsSection";
import CandidateOverview from "@/component/CandidateDetail/CandidateOverview";
import ExperienceSection from "@/component/CandidateDetail/ExperienceSection";
import EducationSection from "@/component/CandidateDetail/EducationSection";



const CandidateDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="max-w-6xl mx-auto p-4">
        <NameSection/>
        </div>
            
            <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* About the candidate */}
          <AboutSection/>
          {/* Skills */}
          <SkillsSection/>
        </div>

        {/* Right Column */}
        <div className="md:w-80 space-y-6">
          {/* Salary */}
          <CandidateOverview/>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4">
    <div className="bg-white rounded-lg border p-6">
        <ExperienceSection/>
        <EducationSection/>
    </div>
    </div>
        </>
    )
}

export default CandidateDetail;