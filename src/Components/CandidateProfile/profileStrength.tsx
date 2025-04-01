import { ChevronDown } from "lucide-react"

export default function ProfileStrength() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-4">Profile strength: Advanced</h2>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 bg-gray-200 h-2 rounded-full">
          <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
        </div>
        <span className="text-gray-700">90%</span>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-md">
        <p className="text-gray-700">Explore job opportunities and start applying to open roles.</p>
      </div>

      <button className="flex items-center text-gray-700 mt-4">
        See more <ChevronDown size={16} className="ml-1" />
      </button>
    </div>
  )
}

