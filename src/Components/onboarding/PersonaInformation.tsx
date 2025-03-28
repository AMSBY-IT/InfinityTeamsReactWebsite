import  { useContext, useEffect, useState } from "react";
import TextInput from "../shared/TextInput";
import RadioSelect from "../sidebar/RadioSelect";
import DropDown, { Options } from "../shared/DropDown";
import PrimaryButton from "../shared/PrimaryButton";
import IconBtn from "../shared/IconBtn";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getcountries, getLanguages, postPersonalData } from "@/api/services";
import { CandidateContext } from "@/Provider/CandidateContext";
import { OptionTypeParameter, personalData } from "@/Types/types";
import { toast } from "react-toastify";
import MultiSelectDropdown from "../shared/MultiSelectDropDown";

function PersonaInformation() {
  const { dispatch, countries, languages } = useContext(CandidateContext);

  const [selectedCountry, setSelectedCountry] = useState<Options>();
  const [city, setCity] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Options[]>([]);
  const [selectedType, setSelectedType] = useState("Fresher");

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
        handleNextPage()
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
    if (!selectedCountry || !city || !selectedLanguage) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData: personalData = {
      country: selectedCountry.id,
      city: city,
      language:selectedLanguage.map((lang)=>({id:lang.id})),
      isFresher: selectedType === "Fresher",
    };

    personalMutation.mutate(formData);
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
        onChange={handleCountryChange}
      />

      <TextInput
        label="City"
        placeHolder="Enter City"
        helperText="helper text"
        onChange={(value) => setCity(value)}
      />
      <MultiSelectDropdown
        options={languages}
        label="Language"
        selectedOptions={selectedLanguage}
        onChange={handleLanguageChange}
      />
      <RadioSelect
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div className="flex items-center space-x-2 py-2">
        <PrimaryButton btnText="Save " onClick={handleSubmit} />
        <IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
      </div>
    </div>
  );
}

export default PersonaInformation;
