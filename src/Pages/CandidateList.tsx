import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {CandidateFilter} from "../Components/Candidates/CandidateFilter";
import { useContext} from "react";
import Candidate from "../Components/Candidates/Candidate";
import { CandidateContext } from "../Provider/CandidateContext";
import Loader from "../Components/Loader";
import CheckBoxes from "../Components/Candidates/CheckBoxes";




const CandidateList=()=> {

    const context = useContext(CandidateContext);

    if (!context) {
        return <p>Error: CandidateContext is not provided!</p>;
    }

    const { loading } = context;

    

    return (
        <>
            <div className="tw-h-screen">
            <Header />
            <CandidateFilter />
            <div className="tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl">
                <div className="tw-py-9 tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12">
                    <div className="tw-flex tw-gap-6 max-lg:tw-flex-col">
                        <CheckBoxes />
                        <div className="lg:tw-w-4/5 xl:tw-w-4/5">
                            {loading && (
                                <Loader />
                            )}
                            <Candidate />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default CandidateList;