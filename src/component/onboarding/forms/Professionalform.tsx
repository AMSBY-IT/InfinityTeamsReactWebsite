import { getlevels } from "@/api/services";
import DropDown from "@/component/shared/DropDown";
import TextInput from "@/component/shared/TextInput";
import { CandidateContext } from "@/Provider/CandidateContext";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";

export interface ProfessionalFormProps {
  professionalDetails?: {
    noticePeriod: number;
    ctc: number;
    ectc: number;
    experienceLevel: string;
  };
  setProfessionalDetails: React.Dispatch<
    React.SetStateAction<{
      noticePeriod: number;
      ctc: number;
      ectc: number;
      experienceLevel: string;
    }>
  >;
  errors: Record<string, string>
}
export default function Professionalform({
  setProfessionalDetails, errors
}: ProfessionalFormProps) {
  const { dispatch, levels } = useContext(CandidateContext);

  //   const [noticeperiod, setNoticeperiod] = useState(0);
  //   const [ctc, setCtc] = useState(0);
  //   const [ectc, setEctc] = useState(0);
  //   const [selectedLevel, setSelectedLevel] = useState<Options>({
  //     id: "",
  //     name: "",
  //   });

  const { data: levelData } = useQuery({
    queryKey: ["level"],
    queryFn: () => getlevels(),
  });

  useEffect(() => {
    if (levelData) {
      dispatch({ type: "SET_LEVEL", payload: levelData });
    }
  }, [levelData, dispatch]);

  // const handleLevelChange = (selectedOption: OptionTypeParameter<Options>) => {
  //     setSelectedLevel(selectedOption as Options);
  //   };
  return (
    <>
      <div>
        <DropDown
          options={levels}
          label="Experience Level"
          helperText={errors.experienceLevel || ''}
          required
          onChange={(option) =>
            setProfessionalDetails((prev) => ({
              ...prev,
              experienceLevel: option.name,
            }))
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <TextInput
          
            label="Notice Period"
            placeHolder="Enter Notice Period"
            required
            helperText={errors.noticePeriod || ''}
            onChange={(value) => {
              if(!isNaN(parseInt(value))){
                
                setProfessionalDetails((prev) => ({
                  ...prev,
                  noticePeriod:  parseInt(value),
                }));
              }
                
            }}
          />

          <TextInput
            label="Current ctc"
            placeHolder="Enter Current ctc"
            helperText={errors.ectc || ''}
            required
            onChange={(value) => {
              setProfessionalDetails((prev) => ({
                ...prev,
                ctc: Number(value),
              }));
            }}
          />

          <TextInput
            label="Expected ctc"
            placeHolder="Enter Expected ctc"
            helperText={errors.ctc || ''}
            required
            onChange={(value) => {
              setProfessionalDetails((prev) => ({
                ...prev,
                ectc: Number(value),
              }));
            }}
          />
        </div>
      </div>
    </>
  );
}
