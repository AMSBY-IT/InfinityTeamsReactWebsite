import { useContext, useState } from 'react';
import { Edit2, User2 } from 'lucide-react';
import RichTexteditor from '../shared/RichTexteditor';
import Modal from '../ui/Modal';
import { EditorState } from 'lexical';
import { useMutation } from '@tanstack/react-query';
import { updateAbout } from '@/api/services';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CandidateContext } from '@/Provider/CandidateContext';
import RichTextViewer from '../shared/RichTextViewer';

export default function AboutCandidateSection() {
  const { profile, dispatch } = useContext(CandidateContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editorInitialValue, setEditorInitialValue] = useState<string>('');

  const [about, setAbout] = useState('');

  console.log('about', about);
  const updateAboutMutation = useMutation({
    mutationFn: updateAbout,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        dispatch({
          type: 'UPDATE_CANDIDATEINFO',
          payload: {
            ...profile.candidate,
            about: about,
          },
        });
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || 'An unknown error occurred.';
        toast.error('Error: ' + errorMessage);
      } else {
        toast.error('Error: ' + error.message);
      }
    },
  });

  const handleEditorChange = (editorState: EditorState) => {
    const jsonString = JSON.stringify(editorState.toJSON());
    setAbout(jsonString);
  };

  const handleOpenModal = () => {
    setEditorInitialValue(profile.candidate.about || '');
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    updateAboutMutation.mutate({ about });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='bg-white rounded-lg border p-4'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex text-gray-700 items-center mxb-4'>
            <div className='pr-2'>
              <User2 size={18} />
            </div>
            <div>
              <h2 className='text-lg font-semibold'>About</h2>
            </div>
          </div>
          <button
            onClick={handleOpenModal}
            className='text-gray-500 hover:text-gray-700'
          >
            <Edit2 size={18} />
          </button>
        </div>

        {profile.candidate.about ? (
          <RichTextViewer content={profile.candidate.about} />
        ) : (
          <p className='text-gray-500 italic'>No about info yet.</p>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Edit About Section'
      >
        <RichTexteditor
          onChange={handleEditorChange}
          initialValue={editorInitialValue}
        />
        <div className='flex justify-end mt-4 gap-2'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='px-4 py-2 rounded border text-gray-700 hover:bg-gray-100'
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
}
