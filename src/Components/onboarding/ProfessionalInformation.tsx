import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import IconBtn from "../shared/IconBtn";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DatePicker from "../shared/DatePicker";
import TextInput from "../shared/TextInput";
import DropDown, { Options } from "../shared/DropDown";
import EndDatePicker from "../shared/EndDatePicker";
import StartYearPicker from "../shared/StartYearPicker";
import EndYearPicker from "../shared/EndYearPicker";
import Checkbox from "../shared/Checkbox";
import { CandidateContext } from "@/Provider/CandidateContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getDegree, getDesignation, getlevels, postProfessionalData } from "@/api/services";
import { OptionTypeParameter, professionalData } from "@/Types/types";
import { toast } from "react-toastify";

function ProfessionalInformation() {
  const { dispatch, designation, degree, levels } =
    useContext(CandidateContext);

  const [startdate, setStartDate] = React.useState<Date>(new Date());
  const [enddate, setEndDate] = React.useState<Date>(new Date());
  const [startYear, setStartYear] = React.useState<Date>(new Date());
  const [endYear, setEndYear] = React.useState<Date>(new Date());

  const [company, setCompany] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [school, setSchool] = useState("");

  const [selectedDesignation, setSelectedDesignation] = useState<Options>();
  const [selectedLevel, setSelectedLevel] = useState<Options>();
  const [selectedDegree, setSelectedDegree] = useState<Options>();

  const [isCurrent, setIsCurrent] = useState(false);

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

  const professionalMutation = useMutation({
    mutationFn: postProfessionalData,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        handleNextPage()
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });


  const handleDesignationChange = (selectedOption: OptionTypeParameter<Options>) => {
    setSelectedDesignation(selectedOption as Options);
  };

  const handleLevelChange = (selectedOption: OptionTypeParameter<Options>) => {
    setSelectedLevel(selectedOption as Options);
  };

  const handleDegreeChange = (selectedOption: OptionTypeParameter<Options>) => {
    setSelectedDegree(selectedOption as Options);
  };

  const handleSubmit = () => {
    if (!company || !selectedDesignation || !selectedDegree || !selectedLevel || !school) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData: professionalData = {
      education: [
        {
          instituteName: school,
          courseName: selectedDegree.name,
          startYear: startYear.getFullYear(),
          endYear: endYear.getFullYear()
        }
      ],
      professional: [
        {
          isCurrent: isCurrent,
          companyName: company,
          designation: { id: selectedDesignation.id, name: selectedDesignation.name },
          startDate: startdate ? startdate.toISOString() : null,
          endDate: enddate ? enddate.toISOString() : null,
          jobDetail: jobdescription
        }
      ],
      experienceLevel: selectedLevel.name

    }

    professionalMutation.mutate(formData);
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/onboarding/cv-skills");
  };

  return (
    <div>
      <div>
        <h1>Company Details</h1>
        <TextInput
          label="Company"
          placeHolder="Enter Company Name"
          helperText="helper text"
          onChange={(value) => setCompany(value)}
        />

        <DropDown options={designation} label="Designation" onChange={handleDesignationChange} />

        <Checkbox label="I currently work here" onChange={setIsCurrent} />

        <div className="grid grid-cols-2 gap-3 ">
          <DatePicker
            label="Start Date "
            startdate={startdate}
            setStartDate={setStartDate}
          />
          <EndDatePicker
            label="End Date "
            enddate={enddate}
            setEndDate={setEndDate}
          />
        </div>

        <TextInput
          label="Job Description"
          placeHolder="Enter Description"
          helperText="helper text"
          onChange={(value) => setJobDescription(value)}
        />

        <DropDown options={levels} label="Experience Level" onChange={handleLevelChange} />
      </div>
      <div className="border-1 "></div>
      <div className="py-4">
        <h3 className="text-xl font-semibold mt-1">Educations Details </h3>
        <TextInput
          label="Institutions Name "
          placeHolder="Enter School Name"
          helperText="please enter name of last education institution you attended "
          onChange={(value) => setSchool(value)}
        />

        <DropDown options={degree} label="Degree" onChange={handleDegreeChange} />

        <div className="grid grid-cols-2 gap-3">
          <StartYearPicker
            label="Start Year "
            startYear={startYear}
            setStartYear={setStartYear}
          />
          <EndYearPicker
            label="End Year "
            endYear={endYear}
            setEndYear={setEndYear}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 py-2">
        <PrimaryButton btnText="Save " onClick={handleSubmit} />
        <IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
      </div>
    </div>
  );
}

export default ProfessionalInformation;
