import { useContext, useEffect } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import {Candidates} from "../../Types/types"
import { useQuery } from "@tanstack/react-query";
import { candidateFetch } from "../../api/services";


const CandidateCard = () => {

   
    const {candidates ,dispatch} = useContext(CandidateContext);


    const { data:candidateData,isFetched} = useQuery({queryKey:['candidate'], queryFn:()=>candidateFetch()});

    useEffect(()=>{
        if(isFetched){
            dispatch({ type: "SET_LOADING", payload: false })
        }
    },[isFetched,dispatch])
  
  useEffect(()=>{
    if (candidateData){
      dispatch({ type: "SET_CANDIDATES", payload: candidateData });
    }
  },[candidateData,dispatch])
    
    return (
        <div className="" role="tabpanel" id="grid">
            <div className="tw-grid max-lg:tw-grid-cols-3 max-md:tw-grid-cols-2 max-sm:tw-grid-cols-1 max-xl:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3" id="candidateContainer">
                {candidates.map((candidate:Candidates) => (

                    <div className="tw-flex" key={candidate.id}>
                        <div className="tw-flex tw-flex-col rts__job__card tw-p-4 tw-border-[1px] tw-bg-white tw-border-[#dcdddf] tw-rounded-md tw-cursor-pointer hover:tw-bg-hover-gradient">
                            <div className="tw-flex tw-gap-4">
                                <div className="tw-flex">
                                    <img src={`https://ui-avatars.com/api/?name=${candidate.firstName}+${candidate.lastName}`} alt="" className="tw-w-[60px] tw-h-[60px] tw-rounded-sm" />
                                </div>
                                <div className="tw-flex tw-flex-col">
                                    <h2 className="tw-leading-5 tw-text-[18px] tw-text-untitled-ui--gray900 tw-m-0 tw-font-medium">{candidate.firstName}</h2>
                                    <span className="tw-text-[11px] tw-font-medium tw-text-untitled-ui--gray800">{candidate.currentJobTitle}</span>
                                    <span className="tw-text-[12px] tw-text-untitled-ui--gray900 tw-flex tw-gap-1 tw-items-center">{candidate.currentAddress ? <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-4 tw-fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg> : ""}{candidate.currentAddress}</span>
                                </div>
                            </div>
                            <div className="tw-flex tw-items-center tw-justify-between tw-mt-6">
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">Student Entry</p>
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">Remote Job</p>
                                <p className="tw-text-[14px] tw-text-untitled-ui--gray800 tw-m-0 tw-font-medium">$ 10520 PA</p>
                            </div>
                            <p className="candi-desc tw-mt-4 tw-text-sm tw-text-black tw-line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis iure in provident,
                                nulla veniam dolores reprehenderit cumque vitae eos mollitia explicabo cum nesciunt ut!
                            </p>

                            {/* <div className="job__tags tw-flex tw-gap-2 tw-mt-4 tw-flex-wrap">

                                {candidate.skills && candidate.skills.length > 0 ? candidate.skills.slice(0, 3).map((skill) => (
                                    <a className="tw-px-3 tw-py-2 tw-rounded-[4px] tw-whitespace-nowrap tw-bg-untitled-ui--primary600 tw-flex tw-leading-4 tw-capitalize tw-text-untitled-ui--primary100 tw-text-[14px]">{skill}</a>))
                                    : <span>No skills listed</span>
                                }


                            </div> */}
                            <div className="tw-flex tw-items-center tw-justify-end date-div tw-mt-auto">
                                <div className="tw-flex tw-gap-3">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" className="heart-icon tw-w-7" viewBox="0 0 36 36"><path fill="none" stroke="#7f56d9" d="M31.885 13.764a7.66 7.66 0 0 0-7.66-7.661A7.65 7.65 0 0 0 18 9.309a7.65 7.65 0 0 0-6.224-3.206a7.66 7.66 0 0 0-7.661 7.661c0 .6.076 1.18.206 1.74C5.385 22.113 12.733 29.085 18 31c5.266-1.915 12.614-8.887 13.678-15.496c.131-.56.207-1.14.207-1.74"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )

}

export default CandidateCard;