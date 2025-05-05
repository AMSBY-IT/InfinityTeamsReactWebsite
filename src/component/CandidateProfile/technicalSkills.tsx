import { useProfile } from '@/hooks/useProfile';

import { Atom } from 'lucide-react';

export default function TechnicalSkills() {
  const { candidateData } = useProfile();
  return (
    <div className='bg-white rounded-lg border p-4'>
      <div className='flex text-gray-700 items-center mxb-4'>
        <div className='pr-2'>
          <Atom size={18} />
        </div>
        <div>
          <h2 className='text-lg font-semibold'>Skills </h2>
        </div>
      </div>
      <div className='mb-6'>
        <h3 className='font-medium mb-3'>Top 3 skills</h3>
        <div className='flex flex-wrap gap-3'>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100'>
            <span className='w-5 h-5 flex items-center justify-center bg-cyan-400 rounded-full text-white text-xs'>
              ⚛
            </span>
            <span>React</span>
            <span className='text-gray-500'>· 5 yrs</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100'>
            <span className='w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full text-white text-xs'>
              ⬢
            </span>
            <span>Redux</span>
            <span className='text-gray-500'>· 3 yrs</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100'>
            <span className='w-5 h-5 flex items-center justify-center bg-emerald-600 rounded-full text-white text-xs'>
              V
            </span>
            <span>Vue.js</span>
            <span className='text-gray-500'>· 3 yrs</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className='font-medium mb-3'>Other skills</h3>
        <div className='flex flex-wrap gap-3'>
          {candidateData.skills.map((s) => (
            <div key={s.id} className='px-3 py-1.5 rounded-md bg-gray-100'>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
