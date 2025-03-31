import { Plus } from "lucide-react"

export default function WorkExperience() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-6">Work experience</h2>

      {/* Job 1 */}
      <div className="mb-8">
        <h3 className="text-lg font-medium">Sr Software Developer</h3>
        <p className="text-gray-700 mb-2">KATANAPIM | Feb 2023 - Present</p>

        <p className="text-gray-500 text-sm">details</p>
      </div>

      {/* Job 2 */}
      <div className="mb-8">
        <h3 className="text-lg font-medium">Frontend Developer</h3>
        <p className="text-gray-700 mb-2">POWERKICK | Nov 2020 - Jan 2023</p>

        <p className="text-gray-500 text-sm">job</p>
      </div>

      {/* Job 3 */}
      <div>
        <h3 className="text-lg font-medium">Full Stack developer</h3>
        <p className="text-gray-700 mb-2">TUKTU.CA | Nov 2019 - Oct 2020</p>
      </div>

      <button className="flex items-center text-blue-600 hover:text-blue-800 mt-6">
        <Plus size={18} className="mr-1" /> Add
      </button>
    </div>
  )
}

