
import { Mail, Briefcase, Clock, Activity } from "lucide-react"


const CandidateOverview = () => {


    return (
        <div className="bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">$35,700 — $37,700</h2>
            <p className="text-gray-500 text-sm">Avg. salary</p>
          </div>

          {/* Job Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-md">jobs@microsoft.com</p>
                <p className="text-sm text-gray-500">Email</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-md">Software and hardware</p>
                <p className="text-sm text-gray-500">Industry</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-md">Full-time</p>
                <p className="text-sm text-gray-500">Employment Type</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-md">Information technology</p>
                <p className="text-sm text-gray-500">Job Functions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CandidateOverview;