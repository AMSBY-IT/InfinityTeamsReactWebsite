import { CandidateContext } from "@/Provider/CandidateContext";
import { Plus } from "lucide-react"
import { useContext } from "react";

export default function Education() {
  const { profile } =useContext(CandidateContext);



  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-6">Education Details</h2>

      {/* Job 1 */}
      {profile.educations.map((e)=>(
        <div className="mb-8">
        <h3 className="text-lg font-medium">{e.courseName}</h3>
        <p className="text-gray-700 mb-2">{e.instituteName} | {e.startYear} - {e.endYear} </p>
      </div>
      ))
      }

      <button className="flex items-center text-blue-600 hover:text-blue-800 mt-6">
        <Plus size={18} className="mr-1" /> Add
      </button>
    </div>
  )
}

