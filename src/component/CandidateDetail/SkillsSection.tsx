import { useLocation } from "react-router-dom";




const SkillsSection = () => {
    const location = useLocation();
    const candidate = location.state?.candidate;
    return (
        <div id="skill" className="mb-7">
            <h6 className="text-2xl max-sm:text-xl font-semibold mb-5">Skills and Experience</h6>
            <div className="job__tags job__details__tags flex items-center gap-2 flex-wrap">

                {candidate.skills && candidate.skills.length > 0 ? candidate.skills.map((skill: string) => (
                    <a key={skill} className="px-3 py-2 rounded-[4px] whitespace-nowrap bg-untitled-ui--primary600 flex leading-4 capitalize text-untitled-ui--primary100 text-[14px]">{skill}</a>))
                    : <span>No skills listed</span>
                }
                {/* <a href="#" className="job__tag py-[5px] px-[10px] bg-untitled-ui--primary600 rounded-md text-white">@skill</a> */}

            </div>
        </div>
    )
}

export default SkillsSection;