import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { CandidateFilter } from "../../component/Candidates/CandidateFilter";
import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import Loader from "../../component/Loader";
import CheckBoxes from "../../component/Candidates/CheckBoxes";
import Candidate from "@/component/Candidates/Candidate";




export const CandidateList = () => {

    const context = useContext(CandidateContext);

    if (!context) {
        return <p>Error: CandidateContext is not provided!</p>;
    }

    const { loading } = context;



    return (
        <>
            <div className="h-full">
                <Header />
                <CandidateFilter />
                <div className="max-w-7xl mx-auto max-xl:max-w-5xl">
                    <div className="py-9 mx-auto max-sm:w-11/12 max-lg:w-11/12">
                        <div className="flex gap-6 max-lg:flex-col">
                            <CheckBoxes />
                            <div className="lg:w-full xl:w-full">
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

