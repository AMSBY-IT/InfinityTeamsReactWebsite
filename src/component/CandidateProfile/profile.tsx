import AboutCandidateSection from './aboutSection';
import CompanyPreferences from './companyPreference';
import PersonalDetails from './personalDetail';
import ProfileStrength from './profileStrength';
import TechnicalSkills from './technicalSkills';
import WorkExperience from './workExperience';
import { useContext, useEffect } from 'react';
import { CandidateContext } from '@/Provider/CandidateContext';
import Education from './education';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '@/hooks/useProfile';

export default function Profile() {
  const navigate = useNavigate();
  const { dispatch } = useContext(CandidateContext);
  const { candidateData } = useProfile();

  useEffect(() => {
    if (candidateData) {
      if (!candidateData?.candidate?.isEmailVerified) {
        navigate('/email-not-verified');
      }
    }
  }, [dispatch]);

  return (
    <>
      <div className='mx-auto max-w-[1280px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Left Column - Smaller  */}
          <div className='lg:col-span-1 space-y-6'>
            <PersonalDetails />
            <ProfileStrength />
            <CompanyPreferences />
          </div>

          {/* Right Column - Larger */}
          <div className='lg:col-span-2 space-y-6'>
            <TechnicalSkills />
            <AboutCandidateSection />
            <WorkExperience />
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}
