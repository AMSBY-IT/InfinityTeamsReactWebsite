import { useContext, useEffect } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import { Candidates } from "../../Types/types";
import { useMutation } from "@tanstack/react-query";
import { getCandidates } from "../../api/services";
import { toast } from "react-toastify";

const CandidateCard = () => {
  const {
    candidates,
    dispatch,
    selectedSkills,
    selectedLocation,
    selectedNoticeperiod,
    selectedExperience,
  } = useContext(CandidateContext);
  console.log("selectedExperience", selectedExperience);
  const {
    mutate: fetchCandidates,
  } = useMutation({
    mutationFn: getCandidates,
    onSuccess: (data) => {
      dispatch({ type: "SET_CANDIDATES", payload: data.data });
      dispatch({ type: "SET_LOADING", payload: false });
    },
    onError: () => {
      toast.error("Failed to fetch candidates");
      dispatch({ type: "SET_LOADING", payload: false });
    },
  });

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    let min = Infinity;
    let max = -Infinity;

    for (const range of selectedExperience) {
      const [start, end] = range.split("-").map(Number);
      if (start < min) min = start;
      if (end > max) max = end;
    }

    const parsedExperience = [min.toString(), max.toString()];

    fetchCandidates({
      skills: selectedSkills.map((skill) => skill.guid),
      location: selectedLocation.map((loc) => loc.guid),
      experience: parsedExperience,
      noticePeriod:selectedNoticeperiod
    });
  }, [selectedSkills, selectedLocation, selectedExperience,selectedNoticeperiod]);

  return (
    <div className="" role="tabpanel" id="grid">
      <div
        className="grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-3 gap-3"
        id="candidateContainer"
      >
        {candidates.map((candidate: Candidates) => (
          <div className="flex" key={candidate.id}>
            <div className="flex flex-col rts__job__card p-4 border-[1px] bg-white border-[#dcdddf] rounded-md cursor-pointer hover:bg-hover-gradient">
              <div className="flex gap-4">
                <div className="flex">
                  <img
                    src={`https://ui-avatars.com/api/?name=${candidate.name}`}
                    alt=""
                    className="w-[60px] h-[60px] rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="leading-5 text-[18px] text-untitled-ui--gray900 m-0 font-medium">
                    {candidate.name}
                  </h2>
                  <span className="text-[11px] font-medium text-untitled-ui--gray800">
                    {candidate.jobTitle}
                  </span>
                  {/* <span className="text-[12px] text-untitled-ui--gray900 flex gap-1 items-center">{candidate.currentAddress ? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" /></svg> : ""}{candidate.currentAddress}</span> */}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-[14px] text-untitled-ui--gray800 m-0 font-medium">
                  Student Entry
                </p>
                <p className="text-[14px] text-untitled-ui--gray800 m-0 font-medium">
                  Remote Job
                </p>
                <p className="text-[14px] text-untitled-ui--gray800 m-0 font-medium">
                  $ 10520 PA
                </p>
              </div>
              <p className="candi-desc mt-4 text-sm text-black line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                blanditiis iure in provident, nulla veniam dolores reprehenderit
                cumque vitae eos mollitia explicabo cum nesciunt ut!
              </p>

              <div className="job__tags flex gap-2 mt-4 flex-wrap">
                {candidate.skills && candidate.skills.length > 0 ? (
                  candidate.skills
                    .slice(0, 3)
                    .map((skill) => (
                      <a key={skill.name} className="px-3 py-2 rounded-[4px] bg-blue-400 whitespace-nowrap bg-untitled-ui--primary600 flex leading-4 capitalize text-untitled-ui--primary100 text-[14px]">
                        {skill.name}
                      </a>
                    ))
                ) : (
                  <span></span>
                )}
              </div>
              <div className="flex items-center justify-end date-div mt-auto">
                <div className="flex gap-3">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="heart-icon w-7"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="none"
                        stroke="#7f56d9"
                        d="M31.885 13.764a7.66 7.66 0 0 0-7.66-7.661A7.65 7.65 0 0 0 18 9.309a7.65 7.65 0 0 0-6.224-3.206a7.66 7.66 0 0 0-7.661 7.661c0 .6.076 1.18.206 1.74C5.385 22.113 12.733 29.085 18 31c5.266-1.915 12.614-8.887 13.678-15.496c.131-.56.207-1.14.207-1.74"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
