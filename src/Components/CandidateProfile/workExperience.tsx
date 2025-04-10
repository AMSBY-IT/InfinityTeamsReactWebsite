import { CandidateContext } from "@/Provider/CandidateContext";
import { Edit2 } from "lucide-react";
import { useContext, useState } from "react";
import Experienceform from "../onboarding/forms/Experienceform";
import Modal from "../ui/Modal";

export default function WorkExperience() {
  const { profile } = useContext(CandidateContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        {/* Job 1 */}
        {profile.experiences.map((e) => (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{e.designation.name}</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(true)}
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
        title="Edit Work Experience Section"
      >
        <Experienceform />
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
}
