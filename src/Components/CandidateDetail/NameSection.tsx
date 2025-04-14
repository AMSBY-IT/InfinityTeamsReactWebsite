import { useLocation } from "react-router-dom";


const NameSection = () => {

    const location = useLocation();
    const candidate = location.state?.candidate;

    // const handleDownload = async (event:any) => {
    //     event.preventDefault();
    
    //     if (candidate?.cvUrl) {
    //       const fileUrl = `https://vaibhavarora2-001-site16.dtempurl.com${candidate.cvUrl}`;
    
    //       try {
    //         // Fetch the file as a Blob (handles CORS)
    //         const response = await fetch(fileUrl, {
    //           method: 'GET',
    //         });
    
    //         if (!response.ok) {
    //           throw new Error(`Failed to fetch file: ${response.statusText}`);
    //         }
    
    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    
    //         // Extract the filename from the URL path
    //         const fileName = fileUrl.split('/').pop() || 'downloaded_file';
    
    //         // Trigger download
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = fileName; // Use extracted filename
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    
    //         // Cleanup the URL
    //         window.URL.revokeObjectURL(url);
    //       } catch (error) {
    //         alert(`download failed ${error}`);
    //       }
    //     } else {
    //       alert('Candidate CV URL is missing or invalid.');
    //     }
    //   };


    return (
        <>
            <div className="flex items-center justify-between max-lg:items-start max-lg:flex-col max-lg:gap-6">
                <div className="flex gap-4 gap-md-5 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                    <div className="flex w-[600px] max-lg:w-full flex-col text-center text-md-start flex-column gap-2">
                        <div className="flex items-center max-sm:justify-center">
                            <h3 className="text-5xl font-bold max-sm:text-3xl">{candidate.firstName} {candidate.lastName} </h3>
                        </div>
                        <div className="flex gap-3 items-center flex-wrap mb-4 mt-2 max-sm:justify-center">
                            <div className="flex gap-2 text-lg items-center text-[#7D8087] font-medium max-sm:text-base">
                                {candidate.currentMostRecentJobTitle}
                            </div>
                            <div className="flex gap-1 text-lg  items-center text-[#7D8087] font-medium max-sm:text-base">
                                {candidate.locationCity ? <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px]" viewBox="0 0 24 24"><path fill="#7f56d9" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg> : ""} {candidate.locationCity} {candidate.country}
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-3 flex-wrap max-sm:justify-center">
                            {candidate.skills && candidate.skills.length > 0 ? candidate.skills.map((skill:string) => (
                                <a className="px-3 py-2 rounded-[4px] whitespace-nowrap bg-untitled-ui--primary600 flex leading-4 capitalize text-untitled-ui--primary100 text-[14px]">{skill}</a>))
                                : <span>No skills listed</span>
                            }
                        </div>
                    </div>
                </div>

                <div className="flex max-sm:w-full hidden">
                    <a href="#" className="py-5 px-[30px] max-sm:py-4 flex items-center justify-center max-sm:w-full text-lg max-sm:text-base font-normal rounded-md text-white bg-untitled-ui--primary800">Cv Download</a>
                </div>
            </div>
        </>
    )
}

export default NameSection;