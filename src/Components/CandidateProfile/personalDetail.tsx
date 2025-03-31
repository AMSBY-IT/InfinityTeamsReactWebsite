import { useState } from "react"
import { Edit2, ChevronDown } from "lucide-react"

export default function PersonalDetails() {
  const jobStatus="Actively looking"
  const [jobType, setJobType] = useState("Full-time")

  return (
    <div className="bg-white rounded-lg border p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Personal details</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <Edit2 size={18} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          A
        </div>
        <h3 className="text-xl">Jhon doe</h3>
      </div>

      <div className="space-y-2 text-gray-700">
        <p className="flex items-center">
          <span className="w-32">Based in:</span>
          <span className="flex items-center">
            <span className="mr-1">🇮🇳</span> India
          </span>
        </p>
        <p className="flex items-start">
          <span className="w-32">Timezone:</span>
          <span>Pacific Time (US & Canada) (UTC-7)</span>
        </p>
        <p className="flex items-start">
          <span className="w-32">Available to work:</span>
          <span>5 PM - 12 AM (Next day)</span>
        </p>
      </div>

      <button className="text-blue-600 hover:text-blue-800 mt-4 flex items-center">
        Set salary and availability
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="mt-6 pt-6 border-t">
        <h3 className="font-medium mb-3">Job search status</h3>
        <div className="relative">
          <button
            className="w-full flex items-center justify-between border rounded-md p-2 bg-white"
            onClick={() => {}}
          >
            <div className="flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
              <span>{jobStatus}</span>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">Your profile will be recommended to talent partners and clients.</p>
      </div>

      <div className="mt-6 pt-6 border-t">
        <h3 className="font-medium mb-3">Job types you're open to</h3>
        <div className="flex gap-3">
          <button
            className={`px-4 py-2 rounded-full border ${jobType === "Full-time" ? "bg-blue-50 border-blue-300" : "bg-white"}`}
            onClick={() => setJobType("Full-time")}
          >
            Full-time
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${jobType === "Freelance" ? "bg-blue-50 border-blue-300" : "bg-white"}`}
            onClick={() => setJobType("Freelance")}
          >
            Freelance
          </button>
          <button
            className={`px-4 py-2 rounded-full border ${jobType === "Both" ? "bg-blue-50 border-blue-300" : "bg-white"}`}
            onClick={() => setJobType("Both")}
          >
            Both
          </button>
        </div>
      </div>
    </div>
  )
}