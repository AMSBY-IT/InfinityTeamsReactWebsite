import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CandidateFilter } from "../../components/Candidates/CandidateFilter";
import { useContext } from "react";
import { CandidateContext } from "../../Provider/CandidateContext";
import Loader from "../../components/Loader";
import CheckBoxes from "../../components/Candidates/CheckBoxes";
import Candidate from "@/components/Candidates/Candidate";




export const CandidateList = () => {

    const context = useContext(CandidateContext);

    if (!context) {
        return <p>Error: CandidateContext is not provided!</p>;
    }

    const { loading } = context;



    return (
        <>
            <div className="h-screen">
                <Header />
                <CandidateFilter />
                <div className="max-w-7xl mx-auto max-xl:max-w-5xl">
                    <div className="py-9 mx-auto max-sm:w-11/12 max-lg:w-11/12">
                        <div className="flex gap-6 max-lg:flex-col">
                            <CheckBoxes />
                            <div className="lg:w-4/5 xl:w-4/5">
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

