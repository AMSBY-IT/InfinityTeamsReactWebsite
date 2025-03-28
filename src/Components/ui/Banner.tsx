

export const Banner = ()=>{
    return(
        <>
        {/* <!-- Left Side - Purple Section --> */}
        <div className="flex justify-center items-start bg-[#6c5ce7] w-full md:w-1/2">
            <div className="w-full  lg:w-3/4 h-1/2 p-4 sm:p-6 md:p-8 text-white relative">
              {/* <!-- Logo/Icon --> */}
              <div className="mb-4 sm:mb-6">
                <div className="bg-white/20 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Heading and Subtext --> */}
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                Start closing more deals with Pigedrive
              </h1>
              <p className="text-sm sm:text-base mb-4 sm:mb-8">
                Create a free account and get full access to all features for
                30-days. No credit card needed.
              </p>

              {/* <!-- Browser Mockup - Hidden on very small screens --> */}
              <div className=" sm:block h-full bg-white rounded-t-lg overflow-hidden shadow-lg">
                {/* <!-- Browser Header --> */}
                <div className="bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 flex items-center border-b">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-2 sm:mx-4 flex-1 bg-white h-4 sm:h-6 rounded-full flex items-center px-2 sm:px-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-12 h-1 sm:w-16 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                  </div>
                  <div className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>

                {/* <!-- Browser Content --> */}
                <div className="flex h-full">
                  {/* <!-- Sidebar --> */}
                  <div className="w-10 sm:w-12 md:w-16 bg-[#1e1b4b] flex flex-col items-center py-2 sm:py-4 space-y-2 sm:space-y-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#6c5ce7] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center relative">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/50 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full text-[8px] sm:text-xs flex items-center justify-center text-white"></div>
                    </div>
                    <div className="hidden sm:flex w-8 h-8 items-center justify-center">
                      <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="hidden sm:flex w-8 h-8 items-center justify-center">
                      <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="hidden md:flex w-8 h-8 items-center justify-center">
                      <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="hidden md:flex w-8 h-8 items-center justify-center">
                      <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* <!-- Main Content --> */}
                  <div className="flex-1 p-2 sm:p-4 bg-white">
                    {/* <!-- UI Elements --> */}
                    <div className="mb-2 sm:mb-4">
                      <div className="w-32 sm:w-64 h-6 sm:h-10 bg-[#1e1b4b] rounded-full flex items-center px-2 sm:px-4">
                        <div className="w-16 h-1 sm:w-24 sm:h-2 bg-white/70 rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex mb-2 sm:mb-4 space-x-2 sm:space-x-4">
                      <div className="w-16 sm:w-24 h-5 sm:h-8 bg-gray-200 rounded-lg flex items-center px-1 sm:px-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-6 h-1 sm:w-10 sm:h-2 bg-gray-300 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="w-10 sm:w-16 h-1 sm:h-2 bg-gray-200 rounded-full"></div>
                      <div className="w-5 sm:w-8 h-1 sm:h-2 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="space-y-2 sm:space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-20 sm:w-32 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-24 sm:w-40 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-22 sm:w-36 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-18 sm:w-28 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-20 sm:w-32 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-22 sm:w-36 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-16 sm:w-24 h-1 sm:h-2 bg-gray-200 rounded-full ml-1 sm:ml-2"></div>
                        <div className="w-5 sm:w-8 h-1 sm:h-2 bg-red-400 rounded-full ml-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}