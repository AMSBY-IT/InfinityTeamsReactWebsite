import AboutCandidateSection from "@/Components/CandidateProfile/aboutSection"
import CompanyPreferences from "@/Components/CandidateProfile/companyPreference"
import PersonalDetails from "@/Components/CandidateProfile/personalDetail"
import ProfileStrength from "@/Components/CandidateProfile/profileStrength"
import TechnicalSkills from "@/Components/CandidateProfile/technicalSkills"
import WorkExperience from "@/Components/CandidateProfile/workExperience"



export const Profile =()=>{
    return (
        <>
        <div className="max-w-6xl mx-auto p-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Left Column - Smaller */}
  <div className="md:col-span-1 space-y-6">
    <PersonalDetails />
    <ProfileStrength />
    <CompanyPreferences />
  </div>

  {/* Right Column - Larger */}
  <div className="md:col-span-2 space-y-6">
    <TechnicalSkills />
    <AboutCandidateSection />
    <WorkExperience />
  </div>
</div>

    </div>
        </>
    )
}