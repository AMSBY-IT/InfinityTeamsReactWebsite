import { CandidateContext } from "@/Provider/CandidateContext";
import { Edit2 } from "lucide-react";
import { useContext, useState } from "react";
import Experienceform from "../onboarding/forms/Experienceform";
import Modal from "../ui/Modal";
import { ExperienceType } from "@/Types/types";
import { postProfessionalData, updateExperience } from "@/api/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";


export default function WorkExperience() {
  const { profile, dispatch } = useContext(CandidateContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experienceId, setExperienceId] = useState('')
  const [experienceData, setExperienceData] = useState<ExperienceType>({
    isCurrent: false,
    companyName: "",
    designation: { id: "", name: "" },
    startDate: null,
    endDate: null,
    jobDetail: "",
  });

  const updateExperienceMutation = useMutation({
    mutationFn: ({ id, data }: { id: string, data: ExperienceType }) => updateExperience(id, data),
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        const updatedExperiences = profile.experiences.map((exp) =>
          exp.id === experienceId ? { ...exp, ...experienceData } : exp
        );
        dispatch({ type: "UPDATE_EXPERIENCE", payload: updatedExperiences });
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

  const addExperience = useMutation({
      mutationFn: postProfessionalData,
      onSuccess: (data) => {
        if (data.success) {
          toast.success(data.message);
          if (experienceData) {
            const newExperience = {
              ...experienceData,
              id:'',
            };
            const updatedExperiences = [...profile.experiences, newExperience];
            dispatch({ type: "UPDATE_EXPERIENCE", payload: updatedExperiences });
          }
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const handleClick = (id: string) => {
    const selectedExperience = profile.experiences.find((e) => e.id === id);
    if (selectedExperience) {
      setExperienceData({
        isCurrent: selectedExperience?.isCurrent,
        companyName: selectedExperience?.companyName,
        designation: { id: selectedExperience?.designation.id, name: selectedExperience?.designation.name },
        startDate: selectedExperience?.startDate,
        endDate: selectedExperience?.endDate,
        jobDetail: selectedExperience?.jobDetail,
      });
      setExperienceId(id);
      setIsEditMode(true)
      setIsModalOpen(true);
    }
  };

  const handleUpdate = () => {
    if (isEditMode) {
      updateExperienceMutation.mutate({ id: experienceId, data: experienceData });
    } else {
      addExperience.mutate({
        education:[],
        professional:[experienceData],
        experienceLevel:''
        
      });
    }
    setIsModalOpen(false);
  }

  function formatDate(dateString: string | null): string {
    if (!dateString) return "Invalid Date"; // Handle null or empty input gracefully

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date formats

    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const handleAdd =()=>{
    setExperienceData({
      isCurrent: false,
      companyName: "",
      designation: { id: "", name: "" },
      startDate: null,
      endDate: null,
      jobDetail: "",
    });
    setIsModalOpen(true)
    setIsEditMode(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={handleAdd}>
          <Edit2 size={18} />
        </button>
        </div>
        {/* Job 1 */}
        {profile.experiences.map((e) => (
          <div key={e.id} className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{e.designation.name}</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => handleClick(e.id)}
              >
                <Edit2 size={18} />
              </button>
            </div>
            <p className="text-gray-700 mb-2">
              {e.companyName} | {formatDate(e.startDate)} -{" "}
              {e.isCurrent ? "Present" : formatDate(e.endDate)}
            </p>

            <p className="text-gray-500 text-sm">details</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Update Work Experience"
      >
        <Experienceform experienceData={experienceData} setExperienceData={setExperienceData} />
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
