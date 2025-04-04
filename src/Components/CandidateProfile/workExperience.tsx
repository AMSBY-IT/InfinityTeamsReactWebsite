import { CandidateContext } from "@/Provider/CandidateContext";
import { Plus } from "lucide-react"
import { useContext } from "react";

export default function WorkExperience() {
  const { profile } =useContext(CandidateContext);

  function formatDate(dateString: string | null): string {
    if (!dateString) return "Invalid Date"; // Handle null or empty input gracefully

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date formats

    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-6">Work experience</h2>

      {/* Job 1 */}
      {profile.experiences.map((e)=>(
        <div className="mb-8">
        <h3 className="text-lg font-medium">{e.designation.name}</h3>
        <p className="text-gray-700 mb-2">{e.companyName} | {formatDate(e.startDate)} - {e.isCurrent ? 'Present': formatDate(e.endDate)}</p>

        <p className="text-gray-500 text-sm">details</p>
      </div>
      ))
      }

      {/* Job 2 */}
      {/* <div className="mb-8">
        <h3 className="text-lg font-medium">Frontend Developer</h3>
        <p className="text-gray-700 mb-2">POWERKICK | Nov 2020 - Jan 2023</p>

        <p className="text-gray-500 text-sm">job</p>
      </div> */}

      {/* Job 3 */}
      {/* <div>
        <h3 className="text-lg font-medium">Full Stack developer</h3>
        <p className="text-gray-700 mb-2">TUKTU.CA | Nov 2019 - Oct 2020</p>
      </div> */}

      <button className="flex items-center text-blue-600 hover:text-blue-800 mt-6">
        <Plus size={18} className="mr-1" /> Add
      </button>
    </div>
  )
}

