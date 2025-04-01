import AboutCandidateSection from "./aboutSection"
import CompanyPreferences from "./companyPreference"
import PersonalDetails from "./personalDetail"
import ProfileStrength from "./profileStrength"
import TechnicalSkills from "./technicalSkills"
import WorkExperience from "./workExperience"

export default  function Profile(){
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
  </div>
</div>

    </div>
        </>
    )
}

