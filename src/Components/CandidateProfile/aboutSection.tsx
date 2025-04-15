import { useState } from "react";
import { Edit2 } from "lucide-react";
import RichTexteditor from "../shared/RichTexteditor";
import Modal from "../ui/Modal";
import { $getRoot, EditorState } from "lexical";
import { useMutation } from "@tanstack/react-query";
import { updateAbout } from "@/api/services";
import axios from "axios";
import { toast } from "react-toastify";


export default function AboutCandidateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [about, setAbout] = useState('')

  console.log("about", about)
  const updateAboutMutation = useMutation({
    mutationFn: updateAbout,
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

  const handleEditorChange = (editorState: EditorState) => {
    editorState.read(() => {
      const plainText = $getRoot().getTextContent();
      setAbout(plainText);
    });
  };

  const handleUpdate = () => {
    updateAboutMutation.mutate({ about })
    setIsModalOpen(false)
  }

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
          {about}
        </p>

      </div>

      <Modal

        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit About Section">
        <RichTexteditor onChange={handleEditorChange} />
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
