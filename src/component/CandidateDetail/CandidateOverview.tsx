import { useLocation } from "react-router-dom";



const CandidateOverview = () => {

    const location = useLocation();
    const candidate = location.state?.candidate;

    function formatDate(dateString:string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="job__overview px-7 max-lg:px-0 rounded-lg">
            <h6 className="text-2xl max-sm:text-xl font-semibold mb-5">Candidate Overview</h6>
            <div className="job__overview__content">
                <ul>
                    <li className="flex flex-wrap items-center justify-between mt-2 pb-2">
                        <span className="left-text flex items-center gap-3 text-lg max-sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"/></svg> Sector</span>
                        <span className="text-base text-[#7D8087]">{candidate.sector}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between mt-2 pb-2">
                        <span className="left-text left-text flex items-center gap-3 text-lg max-sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a21 21 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19 19 0 0 1-16.726.186l-.647-.32l-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-1 1a1 1 0 1 0 2 .01c0-.562-.448-1.01-1-1.01m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1"/></svg> Experience</span>
                        <span className="text-base text-[#7D8087]">{candidate.totalYearsOfExperience} Year</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between mt-2 pb-2">
                        <span className="left-text left-text flex items-center gap-3 text-lg max-sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7"/></svg> Offered Salary</span>
                        <span className="text-base text-[#7D8087]">{candidate.ectc}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between mt-2 pb-2">
                        <span className="left-text left-text flex items-center gap-3 text-lg max-sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4zm10 14.5l-4-4l-4 4V20h8zm-4-5l4-4V4H8v3.5zM10 6h4v.75l-2 2l-2-2z"/></svg> Last Contacted Date</span>
                        <span className="text-base text-[#7D8087]">{formatDate(candidate.lastContactedDate)}</span>
                    </li>
                    <li className="flex flex-wrap items-center justify-between mt-2 pb-2">
                        <span className="left-text left-text flex items-center gap-3 text-lg max-sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-[#7f56d9]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg> Location</span>
                        <span className="text-base text-[#7D8087]">{candidate.locationCity},{candidate.country}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CandidateOverview;