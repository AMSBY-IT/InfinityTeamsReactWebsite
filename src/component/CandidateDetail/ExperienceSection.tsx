




const ExperienceSection = () => {
    
    return (
        <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Work experience</h2>

        <div className="space-y-6">
          {/* Crisis Intervention Specialist */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">Crisis Intervention Specialist</h3>
              <div className="flex justify-between">
                <p className="text-gray-700">London • Dribble Inc.</p>
                <p className="text-gray-700">2018 - Present</p>
              </div>
              <p className="text-gray-500 mt-1">
                Minimum 3 shifts a week Monday - Friday with the ability to work an 8 to 9 hour time each week between
                the hours of 7 A.M. - 7 P.M.
              </p>
            </div>
          </div>

          {/* Virtual Scheduler */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M2.5 10.5H21.5" stroke="#4285F4" strokeWidth="2" />
                <path d="M7 3.5H17" stroke="#EA4335" strokeWidth="2" />
                <path d="M4 7.5H20" stroke="#FBBC05" strokeWidth="2" />
                <path d="M4 13.5H20" stroke="#34A853" strokeWidth="2" />
                <path d="M7 16.5H17" stroke="#4285F4" strokeWidth="2" />
                <path d="M9 19.5H15" stroke="#EA4335" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">Virtual Scheduler</h3>
              <div className="flex justify-between">
                <p className="text-gray-700">London • Google Inc.</p>
                <p className="text-gray-700">2001 - 2018</p>
              </div>
              <p className="text-gray-500 mt-1">
                Lines for Life also offers a great benefits package valued at over $9,500 that includes full coverage
                for employee health, dental, vision, short
              </p>
            </div>
          </div>

          {/* Patient Care Advocate */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">Patient Care Advocate</h3>
              <div className="flex justify-between">
                <p className="text-gray-700">London • Facebook Inc.</p>
                <p className="text-gray-700">1998 - 2018</p>
              </div>
              <p className="text-gray-500 mt-1">
                Healthcare Interest — become an expert on emerging healthcare programs and excited to speak with
                providers
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ExperienceSection;