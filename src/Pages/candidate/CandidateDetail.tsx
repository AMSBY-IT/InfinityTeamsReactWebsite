import { useEffect } from "react";
import Header from "../../component/Header";
import NameSection from "../../component/CandidateDetail/NameSection";
import CandidateInfo from "../../component/CandidateDetail/CandidateInfo";
import Footer from "../../component/Footer";


const CandidateDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="">
                <div className="max-w-7xl mx-auto max-xl:max-w-5xl py-12">
                    <div className="mx-auto max-sm:w-11/12 max-lg:w-11/12">
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