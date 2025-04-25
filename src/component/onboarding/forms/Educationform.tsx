import { getDegree } from "@/api/services";
import DropDown from "@/component/shared/DropDown";
import EndYearPicker from "@/component/shared/EndYearPicker";
import StartYearPicker from "@/component/shared/StartYearPicker";
import TextInput from "@/component/shared/TextInput";
import { CandidateContext } from "@/Provider/CandidateContext";
import { EducationType } from "@/Types/types";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";

export interface EducationFormProps {
  educationData: EducationType;
  setEducationData: React.Dispatch<React.SetStateAction<EducationType>>;
  errors: Record<string, string>
}

function Educationform({ educationData, setEducationData,errors }: EducationFormProps) {

  const { dispatch, degree } =
    useContext(CandidateContext);

  const [startYear, setStartYear] = React.useState<Date>(new Date());
  const [endYear, setEndYear] = React.useState<Date>(new Date());
  //   const [school, setSchool] = useState("");
  //   const [selectedDegree, setSelectedDegree] = useState<Options>();
  //   const [finalScore, setFinalScore] = useState('0');

  const { data: degreeData } = useQuery({
    queryKey: ["degree"],
    queryFn: () => getDegree(),
  });

  useEffect(() => {
    if (degreeData) {
      dispatch({ type: "SET_DEGREE", payload: degreeData });
    }
  }, [degreeData, dispatch]);

  // const handleDegreeChange = (selectedOption: OptionTypeParameter<Options>) => {
  //     setSelectedDegree(selectedOption as Options);
  //   };

  const handleStartYearChange: React.Dispatch<React.SetStateAction<Date>> = (dateOrUpdater) => {
    const newDate = typeof dateOrUpdater === "function" ? dateOrUpdater(startYear) : dateOrUpdater;

    setStartYear(newDate);

    setEducationData(prev => ({
      ...prev,
      startYear: newDate.getFullYear(),
    }));
  };

  const handleEndYearChange: React.Dispatch<React.SetStateAction<Date>> = (dateOrUpdater) => {
    const newDate = typeof dateOrUpdater === "function" ? dateOrUpdater(endYear) : dateOrUpdater;

    setEndYear(newDate);

    setEducationData(prev => ({
      ...prev,
      endYear: newDate.getFullYear(),
    }));
  };


  return (
    <>
      <div>
        <h1>Education Details</h1>
        <TextInput
          label="Institutions Name "
          placeHolder="Enter School Name"
          helperText={errors.instituteName || ''}
          value={educationData?.instituteName}
          onChange={(value) => {
            setEducationData(prev => ({ ...prev, instituteName: value }));
          }}
        />

        <DropDown
          options={degree}
          helperText={errors.courseName || ''}
          label="Degree"
          onChange={(option) =>
            setEducationData(prev => ({
              ...prev,
              courseName: option.name,
            }))
          }
        />

        <TextInput
          label="Total Percentage"
          placeHolder="Enter Percentage"
          helperText={errors.finalScore || ''}
          value={educationData?.finalScore}
          onChange={(value) => {
            setEducationData(prev => ({ ...prev, finalScore: value }));
          }}
        />

        <div className="grid md:grid-cols-2 gap-3">
          <StartYearPicker
            label="Start Year "
            startYear={educationData?.startYear ? new Date(educationData.startYear, 0, 1) : undefined}
            setStartYear={handleStartYearChange}
          />
          <EndYearPicker
            label="End Year "
            endYear={educationData?.endYear ? new Date(educationData.endYear, 0, 1) : undefined}
            setEndYear={handleEndYearChange}
          />
        </div>
      </div>
    </>
  )
}


export default Educationform