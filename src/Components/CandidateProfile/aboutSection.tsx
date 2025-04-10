import { useState } from "react";
import { Edit2 } from "lucide-react";
import RichTexteditor from "../shared/RichTexteditor";
import Modal from "../ui/Modal";

export default function AboutCandidateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">About</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Edit2 size={18} />
          </button>
        </div>

        <p className="text-gray-700">
          Dynamic and detail-oriented Full Stack Developer with 5+ years of experience building scalable, user-centric web
          applications. Skilled in ReactJS, VueJS, TypeScript, and Golang, with expertise in creating responsive UIs, API
          integration, and micro-services architecture. Strong collaborator with a track record of delivering high-quality
          solutions efficiently.
        </p>
      </div>

      <Modal 
      isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit About Section">
          <RichTexteditor/>
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
