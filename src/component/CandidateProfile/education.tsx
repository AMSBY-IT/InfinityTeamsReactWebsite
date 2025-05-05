import { CandidateContext } from '@/Provider/CandidateContext';
import { Edit2, GraduationCap } from 'lucide-react';
import { useContext, useState } from 'react';
import Educationform from '../onboarding/forms/Educationform';
import Modal from '../ui/Modal';
import { EducationType } from '@/Types/types';
import { updateEducation } from '@/api/services';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Education() {
  const { profile, dispatch } = useContext(CandidateContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educationId, setEducationId] = useState('');
  const [educationData, setEducationData] = useState<EducationType>({
    instituteName: '',
    courseName: '',
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear(),
    finalScore: '0',
  });

  const updateEducationMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: EducationType }) =>
      updateEducation(id, data),
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        const updatedEducations = profile.educations.map((edu) =>
          edu.id === educationId ? { ...edu, ...educationData } : edu
        );
        dispatch({ type: 'UPDATE_EDUCATION', payload: updatedEducations });
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

  const handleClick = (id: string) => {
    const selectedEducation = profile.educations.find((e) => e.id === id);
    if (selectedEducation) {
      setEducationData({
        instituteName: selectedEducation.instituteName,
        courseName: selectedEducation.courseName,
        startYear: selectedEducation.startYear,
        endYear: selectedEducation.endYear,
        finalScore: selectedEducation.finalScore,
      });
      setEducationId(id);
      setIsModalOpen(true);
    }
  };

  const handleUpdate = () => {
    updateEducationMutation.mutate({ id: educationId, data: educationData });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='bg-white rounded-lg border p-4'>
        <div className='flex text-gray-700 items-center mxb-4'>
          <div className='pr-2'>
            <GraduationCap size={18} />
          </div>
          <div>
            <h2 className='text-lg font-semibold '> Education</h2>
          </div>
        </div>
        {/* Job 1 */}
        {profile.educations.map((e) => (
          <div key={e.id} className='mb-8'>
            <div className='flex justify-between items-center text-gray-700'>
              <div className='flex'>
                <div>
                  <h3 className='   font-semibold text-gray-700'>
                    {e.courseName}
                  </h3>
                  <p className='text-gray-700  text-sm'>
                    {e.instituteName} | {e.startYear} - {e.endYear}{' '}
                  </p>
                </div>
              </div>
              <button
                className='text-gray-500 hover:text-gray-700'
                onClick={() => handleClick(e.id)}
              >
                <Edit2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Update Education'
        icon={<GraduationCap />}
      >
        <Educationform
          educationData={educationData}
          setEducationData={setEducationData}
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
