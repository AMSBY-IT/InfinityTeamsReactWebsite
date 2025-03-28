import { useEffect } from "react";
import Header from "../components/Header";
import NameSection from "../components/CandidateDetail/NameSection";
import CandidateInfo from "../components/CandidateDetail/CandidateInfo";
import Footer from "../components/Footer";


const CandidateDetail = () => {
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