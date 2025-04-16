import { Plus } from "lucide-react"

export default function CompanyPreferences() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="text-xl font-semibold mb-4">Company preferences</h2>
      <button className="flex items-center text-blue-600 hover:text-blue-800">
        <Plus size={18} className="mr-1" /> Add
      </button>
    </div>
  )
}

