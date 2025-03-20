import { customStyles } from '@/Components/ui/CustomStyles';
import React from 'react'
import Select from "react-select";

function ProfessionPage() {
  return (
	<>
   <div className="w-full bg-white p-8 rounded-lg shadow-sm">
    <form className="space-y-6">
      <div className='space-y-6'>
        <h2>Experience Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Company Field --> */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-blue-600 mb-1">
            Company <span className="text-blue-600">*</span>
          </label>
          <input type="text" id="company" name="company" required
            className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"/>
        </div>
        
        {/* <!-- Job Title Field --> */}
        <div>
          <label htmlFor="job-title" className="block text-sm font-medium text-blue-600 mb-1">
            Job title <span className="text-blue-600">*</span>
          </label>
          <Select placeholder="Select Job Title" styles={customStyles} />
        </div>
      </div>
      
      {/* <!-- Technical Skills Field --> */}
      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-blue-600 mb-1">
          Technical skills used <span className="text-blue-600">*</span>
        </label>
        <Select placeholder="Select Skills" styles={customStyles}/>
      </div>
      
      {/* <!-- Date Range Fields --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- From Date --> */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-1">
            From <span className="text-blue-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
          <Select placeholder="Select Skills" styles={customStyles}/>
          <Select placeholder="Select Skills" styles={customStyles}/>
          </div>
        </div>
        
        {/* <!-- To Date --> */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-1">
            To <span className="text-blue-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
          <Select placeholder="Select Skills" styles={customStyles}/>
          <Select placeholder="Select Skills" styles={customStyles}/>
          </div>
        </div>
      </div>
      
      {/* <!-- Currently Work Here Checkbox --> */}
      <div className="flex items-center">
        <input type="checkbox" id="current-job" name="current-job" 
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
        <label htmlFor="current-job" className="ml-2 block text-sm text-gray-700">
          I currently work here
        </label>
      </div>
      
      {/* <!-- Description Field --> */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-blue-600 mb-1">
          Description <span className="text-blue-600">*</span>
        </label>
        <textarea className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"/>
      </div>
      </div>

      <div className='space-y-6'>
      <h2>Education Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- School Field --> */}
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-blue-600 mb-1">
            School <span className="text-blue-600">*</span>
          </label>
          <Select placeholder="Select School" styles={customStyles}/>
        </div>
        
        {/* <!-- Field of study--> */}
        <div>
          <label htmlFor="education-field" className="block text-sm font-medium text-blue-600 mb-1">
            Feild of Study <span className="text-blue-600">*</span>
          </label>
          <Select placeholder="Select field" styles={customStyles}/>
        </div>
      </div>

      <div>
        <label htmlFor="degree" className="block text-sm font-medium text-blue-600 mb-1">
          Degree <span className="text-blue-600">*</span>
        </label>
        <Select placeholder="Select Degree" styles={customStyles}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- start Date --> */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-1">
            From <span className="text-blue-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
          <Select placeholder="Select Skills" styles={customStyles}/>
          <Select placeholder="Select Skills" styles={customStyles}/>
          </div>
        </div>
        
        {/* <!-- end Date --> */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-1">
            End date (or expected end date) <span className="text-blue-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
          <Select placeholder="Select Skills" styles={customStyles}/>
          <Select placeholder="Select Skills" styles={customStyles}/>
          </div>
        </div>
      </div>
      </div>
    </form>
  </div>
  </>
  )
}

export default ProfessionPage