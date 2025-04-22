import { useContext, useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import IconBtn from "../shared/IconBtn";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { CandidateContext } from "@/Provider/CandidateContext";
import { useMutation } from "@tanstack/react-query";
import {
  postProfessionalData,
} from "@/api/services";
import { EducationType, ExperienceType, professionalData } from "@/Types/types";
import { toast } from "react-toastify";
import Experienceform from "./forms/Experienceform";
import Professionalform from "./forms/Professionalform";
import { z } from "zod";
import Educationform from "./forms/Educationform";

// For Education
const educationSchema = z.object({
  instituteName: z.string().min(1, "Institute name is required"),
  courseName: z.string().min(1, "Course name is required"),
  startYear: z.number().int().gte(1900),
  endYear: z.number().int().gte(1900),
  finalScore: z.string().min(1, "Final Score is required"),
});

// For Experience (optional if Fresher)
const experienceSchema = z.object({
  isCurrent: z.boolean(),
  companyName: z.string().min(1, "Company name is required"),
  designation: z.object({
    id: z.string().min(1, "Designation ID is required"),
    name: z.string().min(1, "Designation name is required"),
  }),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  jobDetail: z.string()
});


// Combined Schema
const professionalFormSchema = z.object({
  education: z.array(educationSchema).min(1),
  professional: z.array(experienceSchema),
  noticePeriod: z.number(),
  ctc: z.number(),
  ectc: z.number(),
  experienceLevel: z.string(),
});

function ProfessionalInformation() {
  const { selectedType } = useContext(CandidateContext);


  const [educationData, setEducationData] = useState<EducationType>({
    instituteName: "",
    courseName: "",
    startYear: new Date().getFullYear(),
    endYear: new Date().getFullYear(),
    finalScore: "",
  });



  const [experienceData, setExperienceData] = useState<ExperienceType>({
    isCurrent: false,
    companyName: "",
    designation: { id: "", name: "" },
    startDate: null,
    endDate: null,
    jobDetail: "",
  });

  const [professionalDetails, setProfessionalDetails] = useState({
    noticePeriod: '',
    ctc: 0,
    ectc: 0,
    experienceLevel: "",
  });



  const professionalMutation = useMutation({
    mutationFn: postProfessionalData,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        handleNextPage();
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = () => {
    const formData: professionalData = {
      education: [
        {
          instituteName: educationData.instituteName,
          courseName: educationData.courseName,
          startYear: educationData.startYear,
          endYear: educationData.endYear,
          finalScore: educationData.finalScore
        },
      ],
      professional:
        selectedType === "Fresher"
          ? []
          : [
            {
              isCurrent: experienceData.isCurrent,
              companyName: experienceData.companyName,
              designation: {
                id: experienceData.designation.id,
                name: experienceData.designation.name,
              },
              startDate: experienceData.startDate ? experienceData.startDate : null,
              endDate: experienceData.endDate ? experienceData.endDate : null,
              jobDetail: experienceData.jobDetail,
            },
          ],
      noticePeriod: professionalDetails.noticePeriod,
      ctc: professionalDetails.ctc,
      ectc: professionalDetails.ectc,
      experienceLevel: professionalDetails.experienceLevel,
    };
  
    const result = professionalFormSchema.safeParse(formData);
  
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Invalid input";
      toast.error(firstError);
      return;
    }
  
    professionalMutation.mutate(result.data);
  };
  

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/onboarding/cv-skills");
  };

  return (
    <div>
      {selectedType !== "Fresher" && (
        <div>
          <Experienceform experienceData={experienceData} setExperienceData={setExperienceData} />
          <Professionalform professionalDetails={professionalDetails} setProfessionalDetails={setProfessionalDetails} />
        </div>
      )}
      <Educationform educationData={educationData} setEducationData={setEducationData} />
      <div className="flex items-center space-x-2 py-2">
        <PrimaryButton btnText="Save " onClick={handleSubmit} />
        <IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
      </div>
    </div>
  );
}

export default ProfessionalInformation;
