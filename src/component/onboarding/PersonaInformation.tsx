import { useContext, useEffect, useState } from "react";
import TextInput from "../shared/TextInput";
import RadioSelect from "../sidebar/RadioSelect";
import DropDown, { Options } from "../shared/DropDown";
import PrimaryButton from "../shared/PrimaryButton";
import IconBtn from "../shared/IconBtn";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowRight, ClipboardCheck, Clock } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getcountries, getLanguages, postPersonalData } from "@/api/services";
import { CandidateContext } from "@/Provider/CandidateContext";
import { OptionTypeParameter, personalData } from "@/Types/types";
import { toast } from "react-toastify";
import MultiSelectDropdown from "../shared/MultiSelectDropDown";

const personalInfoSchema = z.object({
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  language: z
    .array(z.object({ id: z.string() }))
    .min(1, "At least one language is required"),
  isFresher: z.boolean(),
});

function PersonaInformation() {
  const { dispatch, countries, languages, selectedType } =
    useContext(CandidateContext);

  const [selectedCountry, setSelectedCountry] = useState<Options>({id:'',name:''});
  const [city, setCity] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Options[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { data: countryData } = useQuery({
    queryKey: ["country"],
    queryFn: () => getcountries(),
  });

  const { data: languagesData } = useQuery({
    queryKey: ["language"],
    queryFn: () => getLanguages(),
  });

  useEffect(() => {
    if (countryData) {
      dispatch({ type: "SET_COUNTRY", payload: countryData });
    }
  }, [countryData, dispatch]);

  useEffect(() => {
    if (languagesData) {
      dispatch({ type: "SET_LANGUAGES", payload: languagesData });
    }
  }, [languagesData, dispatch]);

  const personalMutation = useMutation({
    mutationFn: postPersonalData,
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

  const handleCountryChange = (selectedOption: Options) => {
    setSelectedCountry(selectedOption as Options);
  };

  const handleLanguageChange = (
    selectedOptions: OptionTypeParameter<Options>
  ) => {
    setSelectedLanguage(selectedOptions as Options[]);
  };

  const handleSubmit = () => {
    // if (!selectedCountry || !city || !selectedLanguage) {
    //   toast.error("Please fill all required fields");
    //   return;
    // }

    const formData: personalData = {
      country: selectedCountry.id,
      city: city,
      language: selectedLanguage.map((lang) => ({ id: lang.id })),
      isFresher: selectedType === "Fresher",
    };

    const result = personalInfoSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
  
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    personalMutation.mutate(result.data);
  };

  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/onboarding/professional");
  };

  return (
    <div>
      <DropDown
        options={countries}
        label="Country"
        helperText={errors.country || ''}
        onChange={handleCountryChange}
        required
      />
      <TextInput
        label="City"
        placeHolder="Enter City"
        helperText={errors.city || ''}
        onChange={(value) => setCity(value)}
        required
      />
      <MultiSelectDropdown
        options={languages}
        label="Language"
        helperText={errors.language || ''}
        selectedOptions={selectedLanguage}
        onChange={handleLanguageChange}
        required
      />
      <RadioSelect
        title="Employment Type"
        selected={selectedType}
        onChange={(value) =>
          dispatch({ type: "SET_SELECTEDTYPE", payload: value })
        }
        required
        options={[
          { label: "Fresher", icon: <Clock className="h-5 w-5" /> },
          {
            label: "Experienced",
            icon: <ClipboardCheck className="h-5 w-5" />,
          },
        ]}
      />
    
      <div className="flex items-center space-x-2 py-2">
        <PrimaryButton btnText="Save " onClick={handleSubmit} />
        <IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
      </div>
    </div>
  );
}

export default PersonaInformation;
