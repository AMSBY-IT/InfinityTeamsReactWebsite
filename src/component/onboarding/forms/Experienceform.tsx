import { getDesignation } from "@/api/services";
import Checkbox from "@/component/shared/Checkbox";
import DatePicker from "@/component/shared/DatePicker";
import DropDown from "@/component/shared/DropDown";
import EndDatePicker from "@/component/shared/EndDatePicker";
import TextInput from "@/component/shared/TextInput";
import { CandidateContext } from "@/Provider/CandidateContext";
import { ExperienceType } from "@/Types/types";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

export interface ExperienceFormProps {
  experienceData: ExperienceType;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceType>>;
  errors: Record<string, string>
  }

export default function Experienceform({experienceData, setExperienceData,errors }:ExperienceFormProps){

    const { dispatch, designation } =
        useContext(CandidateContext);

    const [startdate, setStartDate] = React.useState<Date | null>(null);
      const [enddate, setEndDate] = React.useState<Date | null>(null);
      
    //   const [company, setCompany] = useState("");
    //   const [jobdescription, setJobDescription] = useState("");
      
    //   const [selectedDesignation, setSelectedDesignation] = useState<Options>({
    //     id: "",
    //     name: "",
    //   });
      
      const [isCurrent, setIsCurrent] = useState(false);

      const { data: designationData } = useQuery({
        queryKey: ["designation"],
        queryFn: () => getDesignation(),
      });
    
      

      useEffect(() => {
          if (designationData) {
            dispatch({ type: "SET_DESIGNATION", payload: designationData });
          }
        }, [designationData, dispatch]);
      

        // const handleDesignationChange = (
        //     selectedOption: OptionTypeParameter<Options>
        //   ) => {
        //     setSelectedDesignation(selectedOption as Options);
        //   };
        
        //   const handleLevelChange = (selectedOption: OptionTypeParameter<Options>) => {
        //     setSelectedLevel(selectedOption as Options);
        //   };

        const handleCheckboxChange = (checked: boolean) => {
          setIsCurrent(checked);
          setExperienceData(prev => ({
            ...prev,
            isCurrent: checked,
            endDate: checked ? null: prev.endDate, // clear end date if currently working
          }));
        };
        

        const handleStartDateChange: React.Dispatch<React.SetStateAction<Date | null>> = (value) => {
          const newDate = typeof value === "function" ? value(startdate) : value;
        
          setStartDate(newDate);
        
          setExperienceData((prev) => ({
            ...prev,
            startDate: newDate ? newDate.toISOString() : null, // or your expected format
          }));
        };
        
        const handleEndDateChange: React.Dispatch<React.SetStateAction<Date | null>> = (value) => {
          const newDate = typeof value === "function" ? value(enddate) : value;
        
          setEndDate(newDate);
        
          setExperienceData((prev) => ({
            ...prev,
            endDate: newDate ? newDate.toISOString() : null,
          }));
        };
        
    return (
        <>
        <div>
          <h1>Company Details</h1>
          <TextInput
            label="Company"
            placeHolder="Enter Company Name"
            helperText={errors.companyName || ''}
            value={experienceData?.companyName}
            required
            onChange={(value) => {
              setExperienceData(prev => ({ ...prev, companyName: value }));
            }}
          />

          <DropDown
            options={designation}
            label="Designation"
            helperText={errors['designation.name']}
            value={experienceData.designation.id}
            required
            onChange={(option) =>
              setExperienceData(prev => ({
                ...prev,
                designation: {id:option.id,name:option.name},
              }))}
          />

          <Checkbox label="I currently work here" onChange={handleCheckboxChange} checked={experienceData?.isCurrent} required/>

          <div className="grid md:grid-cols-2 gap-3">
            <DatePicker
              label="Start Date "
              startdate={experienceData?.startDate ? new Date(experienceData.startDate) :null}
              setStartDate={handleStartDateChange}
            />
            <EndDatePicker
              label="End Date "
              enddate={experienceData?.endDate ? new Date(experienceData.endDate) :null}
              setEndDate={handleEndDateChange}
              disabled={isCurrent}
            />
          </div>

          <TextInput
            label="Job Description"
            placeHolder="Enter Description"
            required
            value={experienceData?.jobDetail}
            helperText={errors.jobDetail || ''}
            onChange={(value) => {
              setExperienceData(prev => ({ ...prev, jobDetail: value }));
            }}
          />
        </div>
        </>
    )
}