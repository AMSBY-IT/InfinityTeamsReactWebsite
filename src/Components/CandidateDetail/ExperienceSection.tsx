import { useLocation } from "react-router-dom";




const ExperienceSection = () => {
    const location = useLocation();
    const candidate = location.state?.candidate;
    return (
        <div id="experience" className="mb-7">
            <h6 className="text-2xl max-sm:text-xl font-semibold mb-5 capitalize">experience</h6>
            <ul className="timeline">
                <li className="mb-7 pl-7 relative">
                    <div className="w-3 h-3 bg-untitled-ui--primary600 rounded-full absolute left-0 top-2 z-10"></div>
                    <span className="timeline__title block mb-1 text-untitled-ui--primary600 text-lg font-medium">{candidate.currentMostRecentJobTitle}</span>
                    <span className="timeline__subtitle block text-[#7D8087] italic text-base">Reactheme   (2016- Present)</span>
                    <p className="mt-2 fw-medium text-lg text-[#7D8087]">Software engineers&nbsp;apply engineering principles and knowledge of programming languages to build software solutions for end users.</p>
                    <div className="vertical-line absolute h-[110%] w-[1px] bg-black opacity-20 top-3 left-[5px] z-0"></div>
                </li>
            </ul>
        </div>
    )
}

export default ExperienceSection;