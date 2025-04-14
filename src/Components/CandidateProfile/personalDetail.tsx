import { useContext, useState } from "react";
import { Edit2, ChevronDown } from "lucide-react";
import { CandidateContext } from "@/Provider/CandidateContext";
import Modal from "../ui/Modal";
import ProfileUpdateform from "../onboarding/forms/ProfileUpdateform";
import { UpdateProfileType } from "@/Types/types";
import { updateProfile } from "@/api/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

export default function PersonalDetails() {
  const { profile } = useContext(CandidateContext);

  const [updateprofileData, setUpdateprofileData] = useState<UpdateProfileType>({
    name: "",
    phone: "",
    jobTypePreference: "",
    jobSearchStatus: "Open",
    noticePeriod: null,
    location: ""
      })

  const jobStatus = "Actively looking";
  const [jobType, setJobType] = useState("Full-time");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateProfileMutation = useMutation({
    mutationFn:updateProfile,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {

        const errorMessage = error.response?.data?.message || "An unknown error occurred.";
        toast.error("Error: " + errorMessage);
      } else {

        toast.error("Error: " + error.message);
      }
    },
  });

  const handleClick = () => {
    
      setIsModalOpen(true);
    }
  

  const handleUpdate = ()=>{
    updateProfileMutation.mutate(updateprofileData)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg border p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Personal details</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={handleClick}>
            <Edit2 size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {profile.candidate.name[0]}
          </div>
          <h3 className="text-xl">{profile.candidate.name}</h3>
        </div>

        <div className="space-y-2 text-gray-700">
          <p className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium w-38 flex-shrink-0">Based in:</span>
            <span className="mt-1 sm:mt-0">India</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium w-38 flex-shrink-0">Email:</span>
            <span className="mt-1 sm:mt-0">{profile.candidate.email}</span>
          </p>
          <p className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-medium w-38 flex-shrink-0">Phone:</span>
            <span className="mt-1 sm:mt-0">{profile.candidate.phone}</span>
          </p>
        </div>

        <button className="text-blue-600 hover:text-blue-800 mt-4 flex items-center">
          Set salary and availability
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
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

          <p className="text-sm text-gray-500 mt-3">
            Your profile will be recommended to talent partners and clients.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium mb-3">Job types you're open to</h3>
          <div className="flex gap-3 flex-wrap">
            <button
              className={`px-4 py-2 rounded-full border ${jobType === "Full-time" ? "bg-purple-50 border-purple-600" : "bg-white"}`}
              onClick={() => setJobType("Full-time")}
            >
              Full-time
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${jobType === "Freelance" ? "bg-purple-50 border-purple-600" : "bg-white"}`}
              onClick={() => setJobType("Freelance")}
            >
              Freelance
            </button>
            <button
              className={`px-4 py-2 rounded-full border ${jobType === "Both" ? "bg-purple-50 border-purple-600" : "bg-white"}`}
              onClick={() => setJobType("Both")}
            >
              Both
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Work Experience Section"
      >
        <ProfileUpdateform updateprofileData={updateprofileData} setUpdateprofileData={setUpdateprofileData} />
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
}
