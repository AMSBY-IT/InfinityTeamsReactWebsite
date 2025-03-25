import React, { useContext, useEffect, useState } from "react";
import {
  getDegree,
  getDesignation,
  getlevels,
  getskills,
} from "@/api/services";
import { customStyles } from "@/Components/ui/CustomStyles";
import { CandidateContext } from "@/Provider/CandidateContext";
import { commonType, OptionType, OptionTypeParameter } from "@/Types/types";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import DatePicker from "react-datepicker";

function ProfessionPage() {
  const { dispatch, skills, designation, degree, levels } =
    useContext(CandidateContext);

  const [company, setCompany] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [school, setSchool] = useState("");

  const [selectedDesignation, setSelectedDesignation] = useState<OptionType>();
  const [selectedLevel, setSelectedLevel] = useState<OptionType>();
  const [selectedDegree, setSelectedDegree] = useState<OptionType>();

  const [isCurrent, setIsCurrent] = useState(false);
  const handleClick = () => setIsCurrent(!isCurrent);

  const[startYear,setStartYear]= useState<number | null>(null)
  const [endYear, setEndYear] = useState<number | null>(null);

  console.log({
    isCurrent,
    company,
    jobdescription,
    school,
    selectedDegree,
    selectedDesignation,
    selectedLevel,
  });

  const { data: skillData } = useQuery({
    queryKey: ["skill"],
    queryFn: () => getskills(),
  });

  const { data: designationData } = useQuery({
    queryKey: ["designation"],
    queryFn: () => getDesignation(),
  });

  const { data: degreeData } = useQuery({
    queryKey: ["degree"],
    queryFn: () => getDegree(),
  });

  const { data: levelData } = useQuery({
    queryKey: ["level"],
    queryFn: () => getlevels(),
  });

  useEffect(() => {
    if (skillData) {
      dispatch({ type: "SET_SKILLS", payload: skillData });
    }
  }, [skillData, dispatch]);

  useEffect(() => {
    if (designationData) {
      dispatch({ type: "SET_DESIGNATION", payload: designationData });
    }
  }, [designationData, dispatch]);

  useEffect(() => {
    if (degreeData) {
      dispatch({ type: "SET_DEGREE", payload: degreeData });
    }
  }, [degreeData, dispatch]);

  useEffect(() => {
    if (levelData) {
      dispatch({ type: "SET_LEVEL", payload: levelData });
    }
  }, [levelData, dispatch]);

  const skill = skills.map((s: commonType) => ({
    value: s.id,
    label: s.name,

  }));

  const Designation = designation.map((s: commonType) => ({
    value: s.id,
    label: s.name,
  }));

  const Degree = degree.map((s: commonType) => ({
    value: s.id,
    label: s.name,
  }));

  const Level = levels.map((s: commonType) => ({
    value: s.id,
    label: s.name,
  }));

  const handleDesignationChange = (selectedOption: OptionTypeParameter<OptionType>) => {
    setSelectedDesignation(selectedOption as OptionType);
  };

  const handleLevelChange = (selectedOption: OptionTypeParameter<OptionType>) => {
    setSelectedLevel(selectedOption as OptionType);
  };

  const handleDegreeChange = (selectedOption: OptionTypeParameter<OptionType>) => {
    setSelectedDegree(selectedOption as OptionType);
  };

  return (
    <>
      <div className="w-full mt-7 bg-white p-6 rounded-lg shadow-sm">
        <form className="space-y-6">
          <div className="space-y-6">
            <h2>Experience Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Company Field --> */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Company <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                  className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
                />
              </div>

              {/* <!-- Job Title Field --> */}
              <div>
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Job title <span className="text-blue-600">*</span>
                </label>
                <Select
                  options={Designation}
                  placeholder="Select Job Title"
                  styles={customStyles}
                  onChange={handleDesignationChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Technical Skills Field --> */}
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Technical skills used <span className="text-blue-600">*</span>
                </label>
                <Select
                  options={skill}
                  isMulti
                  placeholder="Select Skills"
                  styles={customStyles}
                />
              </div>

              {/* <!-- Experience level --> */}
              <div>
                <label
                  htmlFor="level"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Experienced level <span className="text-blue-600">*</span>
                </label>
                <Select
                  options={Level}
                  placeholder="Select Skills"
                  styles={customStyles}
                  onChange={handleLevelChange}
                />
              </div>
            </div>

            {/* <!-- Date Range Fields --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- From Date --> */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  From <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    dateFormat="dd/mm/yyyy"
                    className="pl-10 block border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
                  />
                </div>
              </div>

              {/* <!-- To Date --> */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  To <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    dateFormat="dd/mm/yyyy"
                    className="pl-10 block border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Currently Work Here Checkbox --> */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="current-job"
                name="current-job"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                onClick={handleClick}
                checked={isCurrent}
              />
              <label
                htmlFor="current-job"
                className="ml-2 block text-sm text-gray-700"
              >
                I currently work here
              </label>
            </div>

            {/* <!-- Description Field --> */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-blue-600 mb-1"
              >
                Description <span className="text-blue-600">*</span>
              </label>
              <textarea
                onChange={(e) => setJobDescription(e.target.value)}
                className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2>Education Details</h2>

            {/* <!-- School Field --> */}
            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-blue-600 mb-1"
              >
                School <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                id="school"
                name="school"
                required
                onChange={(e) => setSchool(e.target.value)}
                className="pl-10 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
              />
            </div>

            {/* <!-- Field of study--> */}

            <div>
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-blue-600 mb-1"
              >
                Degree <span className="text-blue-600">*</span>
              </label>
              <Select
                placeholder="Select Degree"
                styles={customStyles}
                options={Degree}
                onChange={handleDegreeChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- start Date --> */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  Start Year <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-1 gap-4">
                  <DatePicker
                    showYearPicker
                    dateFormat="yyyy"
                    selected={startYear ? new Date(startYear, 0, 1) : null}
                    onChange={(date) =>
                      setStartYear(date ? date.getFullYear() : null)
                    }
                    className="pl-10 block border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
                  />
                </div>
              </div>

              {/* <!-- end Date --> */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-1">
                  End Year <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-1 gap-4">
                  <DatePicker
                    showYearPicker
                    dateFormat="yyyy"
                    selected={endYear ? new Date(endYear, 0, 1) : null}
                    onChange={(date) =>
                      setEndYear(date ? date.getFullYear() : null)
                    }
                    className="pl-10 block border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base focus:outline-none focus:ring-[#6c5ce7] focus:border-[#6c5ce7]"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfessionPage;
