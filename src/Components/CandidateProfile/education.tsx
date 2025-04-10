import { CandidateContext } from "@/Provider/CandidateContext";
import { Edit2 } from "lucide-react";
import { useContext, useState } from "react";
import Educationform from "../onboarding/forms/educationform";
import Modal from "../ui/Modal";

export default function Education() {
  const { profile } = useContext(CandidateContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {/* Job 1 */}
        {profile.educations.map((e) => (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{e.courseName}</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(true)}
              >
                <Edit2 size={18} />
              </button>
            </div>
            <p className="text-gray-700 mb-2">
              {e.instituteName} | {e.startYear} - {e.endYear}{" "}
            </p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Education Section"
      >
        <Educationform />
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
