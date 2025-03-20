import { customStyles } from "@/Components/ui/CustomStyles";
import React, { useState } from "react";
import Select from "react-select";


function PersonalPage() {
  const [selected, setSelected] = useState("Fresher");

  
  return (
    <>
      <form className="bg-white p-6 rounded-lg shadow-md w-full space-y-6">

        <label
          htmlFor="country"
          className="block text-sm font-medium text-blue-600 mb-1"
        >
          Country <span className="text-blue-600">*</span>
        </label>
        <Select placeholder="Select Country" styles={customStyles} />

        <label
          htmlFor="city"
          className="block text-sm font-medium text-blue-600 mb-1"
        >
          City <span className="text-blue-600">*</span>
        </label>
        <Select placeholder="Select City" styles={customStyles} />

        <label
          htmlFor="language"
          className="block text-sm font-medium text-blue-600 mb-1"
        >
          Language <span className="text-blue-600">*</span>
        </label>
        <Select placeholder="Select Langauge" styles={customStyles} />

        <label
          htmlFor="language"
          className="block text-sm font-medium text-blue-600 mb-1"
        >
          Language <span className="text-blue-600">*</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Fresher Account Card */}
      <div
        className={`border rounded-lg p-6 flex items-center space-x-6 bg-white shadow-sm cursor-pointer transition-all ${
          selected === "Fresher" ? "border-[#6c5ce7]" : "border-gray-200"
        }`}
        onClick={() => setSelected("Fresher")}
      >
        <div className="flex-shrink-0">
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selected === "Fresher" ? "border-blue-500 bg-blue-500" : "border-gray-300"
            }`}
          >
            {selected === "Fresher" && <div className="w-2 h-2 rounded-full bg-white"></div>}
          </div>
        </div>

        <div className="flex-grow">
          <h2 className={`text-lg font-medium ${selected === "Fresher" ? "text-gray-800" : "text-gray-500"}`}>
            Fresher
          </h2>
          <p className="text-gray-600 text-sm">New to the industry</p>
        </div>

        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Experienced Account Card */}
      <div
        className={`border rounded-lg p-6 flex items-center space-x-6 bg-white shadow-sm cursor-pointer transition-all ${
          selected === "Experienced" ? "border-[#6c5ce7]" : "border-gray-200"
        }`}
        onClick={() => setSelected("Experienced")}
      >
        <div className="flex-shrink-0">
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              selected === "Experienced" ? "border-blue-500 bg-blue-500" : "border-gray-300"
            }`}
          >
            {selected === "Experienced" && <div className="w-2 h-2 rounded-full bg-white"></div>}
          </div>
        </div>

        <div className="flex-grow">
          <h2 className={`text-lg font-medium ${selected === "Experienced" ? "text-gray-800" : "text-gray-500"}`}>
            Experienced
          </h2>
          <p className="text-gray-600 text-sm">Have prior work experience</p>
        </div>

        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
      </form>
    </>
  );
}

export default PersonalPage;
