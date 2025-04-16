import TotalCandidates from "./TotalCandidates";
import CandidateCard from "./CandidateCard";
import Pagination from "./Pagination";


 const Candidate = () => {

    return (
        <>
            <TotalCandidates />
            <div className="flex flex-col" id="myTabContent">
                <CandidateCard />
                <Pagination />
            </div>
        </>
    )
}

export default Candidate;