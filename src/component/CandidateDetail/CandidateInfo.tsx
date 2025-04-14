import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import CandidateOverview from "./CandidateOverview";

const CandidateInfo = () => {

    return (
        <>
            <div className="">
                <div className="max-w-7xl mx-auto max-xl:max-w-5xl">
                    <div className="mx-auto max-sm:w-11/12 max-lg:w-11/12 pb-10">
                        <div className="flex gap-5 max-lg:flex-col">
                            <div className="lg:w-3/5 xl:w-4/6">
                                <div className="rts__job__details">
                                    <AboutSection />
                                    <EducationSection />
                                    <ExperienceSection />
                                    <SkillsSection />
                                </div>
                            </div>

                            <div className="lg:w-2/5 xl:w-2/6 d-flex flex-column gap-40">
                                <CandidateOverview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateInfo;