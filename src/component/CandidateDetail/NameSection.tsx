const NameSection = () => {
  // const location = useLocation();
  // const candidate = location.state?.candidate;

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
      <div className="mx-auto">
        <div className="rounded-xl overflow-hidden border border-gray-100">
          {/* Top gradient section */}
          <div className="h-36 bg-gradient-to-r from-blue-50 to-indigo-50 relative w-full">
            {/* Microsoft logo container */}
            <div className="absolute left-6 top-24 w-32 h-32 bg-white rounded-xl shadow-sm flex items-center justify-center">
              
            </div>
          </div>

          {/* Content section */}
          <div className="pt-24 pb-6 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Associate Project Manager
                </h1>
                <p className="text-lg text-gray-800 mt-1">Microsoft Inc.</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span>Los Angeles, USA</span>
                  <span className="mx-2">•</span>
                  <span>14 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameSection;
