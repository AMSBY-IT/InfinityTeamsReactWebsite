



const EducationSection = () => {
    return (
        <div>
        <h2 className="text-xl font-semibold mb-6">Education</h2>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white">
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
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900">Harvard University</h3>
            <div className="flex justify-between">
              <p className="text-gray-700">London • Business Development</p>
              <p className="text-gray-700">1994 - 1998</p>
            </div>
            <p className="text-gray-500 mt-1">
              Healthcare Interest — become an expert on emerging healthcare programs and excited to speak with providers
              about the future of healthcare
            </p>
          </div>
        </div>
      </div>
    )
}

export default EducationSection;