import { useEffect } from "react";
import Header from "../../components/Header";
import NameSection from "../../components/CandidateDetail/NameSection";
import CandidateInfo from "../../components/CandidateDetail/CandidateInfo";
import Footer from "../../components/Footer";


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