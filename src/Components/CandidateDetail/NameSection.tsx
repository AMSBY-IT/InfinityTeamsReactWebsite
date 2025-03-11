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
            <div className="tw-flex tw-items-center tw-justify-between max-lg:tw-items-start max-lg:tw-flex-col max-lg:tw-gap-6">
                <div className="tw-flex gap-4 gap-md-5 align-items-center flex-md-row flex-column mx-auto mx-md-0">
                    <div className="tw-flex tw-w-[600px] max-lg:tw-w-full tw-flex-col text-center text-md-start flex-column tw-gap-2">
                        <div className="tw-flex tw-items-center max-sm:tw-justify-center">
                            <h3 className="tw-text-5xl tw-font-bold max-sm:tw-text-3xl">{candidate.firstName} {candidate.lastName} </h3>
                        </div>
                        <div className="tw-flex tw-gap-3 tw-items-center flex-wrap tw-mb-4 tw-mt-2 max-sm:tw-justify-center">
                            <div className="tw-flex gap-2 tw-text-lg tw-items-center tw-text-[#7D8087] tw-font-medium max-sm:tw-text-base">
                                {candidate.currentMostRecentJobTitle}
                            </div>
                            <div className="tw-flex tw-gap-1 tw-text-lg  tw-items-center tw-text-[#7D8087] tw-font-medium max-sm:tw-text-base">
                                {candidate.locationCity ? <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-[22px]" viewBox="0 0 24 24"><path fill="#7f56d9" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg> : ""} {candidate.locationCity} {candidate.country}
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center tw-justify-start tw-gap-3 tw-flex-wrap max-sm:tw-justify-center">
                            {candidate.skills && candidate.skills.length > 0 ? candidate.skills.map((skill:string) => (
                                <a className="tw-px-3 tw-py-2 tw-rounded-[4px] tw-whitespace-nowrap tw-bg-untitled-ui--primary600 tw-flex tw-leading-4 tw-capitalize tw-text-untitled-ui--primary100 tw-text-[14px]">{skill}</a>))
                                : <span>No skills listed</span>
                            }
                        </div>
                    </div>
                </div>

                <div className="tw-flex max-sm:tw-w-full tw-hidden">
                    <a href="#" className="tw-py-5 tw-px-[30px] max-sm:tw-py-4 tw-flex tw-items-center tw-justify-center max-sm:tw-w-full tw-text-lg max-sm:tw-text-base tw-font-normal tw-rounded-md tw-text-white tw-bg-untitled-ui--primary800">Cv Download</a>
                </div>
            </div>
        </>
    )
}

export default NameSection;