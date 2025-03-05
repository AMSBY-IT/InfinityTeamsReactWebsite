import { useEffect } from "react";
import Header from "../Components/Header";
import NameSection from "../Components/CandidateDetail/NameSection";
import CandidateInfo from "../Components/CandidateDetail/CandidateInfo";
import Footer from "../Components/Footer";


const CandidateDetail=()=> {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="">
                <div className="tw-max-w-7xl tw-mx-auto max-xl:tw-max-w-5xl tw-py-12">
                    <div className="tw-mx-auto max-sm:tw-w-11/12 max-lg:tw-w-11/12">
                        <div className="">
                            <NameSection />
                        </div>
                    </div>
                </div>
            </div>
            <CandidateInfo />
            <Footer />
        </>
    )
}

export default CandidateDetail;