import { useContext, useEffect } from "react";
import Select, { MultiValue } from "react-select";
import { StylesConfig } from "react-select";
import { CandidateContext } from "../../Provider/CandidateContext";
import { commonType, Selected } from "../../Types/types";
import { useQuery } from "@tanstack/react-query";
import { getcountries, getDesignation, getlevels, getskills } from "@/api/services";

export const CandidateFilter = () => {
  const { dispatch, designation, skills, countries } =
    useContext(CandidateContext);

  const { data: skillData } = useQuery({
    queryKey: ["skill"],
    queryFn: () => getskills(),
  });

  const { data: countryData } = useQuery({
    queryKey: ["country"],
    queryFn: () => getcountries(),
  });

  const { data: designationData } = useQuery({
    queryKey: ["designation"],
    queryFn: () => getDesignation(),
  });

  const { data: levelData } = useQuery({
      queryKey: ["level"],
      queryFn: () => getlevels(),
    });
  
    useEffect(() => {
      if (levelData) {
        dispatch({ type: "SET_LEVEL", payload: levelData });
      }
    }, [levelData, dispatch]);

  useEffect(() => {
    if (designationData) {
      dispatch({ type: "SET_DESIGNATION", payload: designationData });
    }
  }, [designationData, dispatch]);

  useEffect(() => {
    if (countryData) {
      dispatch({ type: "SET_COUNTRY", payload: countryData });
    }
  }, [countryData, dispatch]);

  useEffect(() => {
    if (skillData) {
      dispatch({ type: "SET_SKILLS", payload: skillData });
    }
  }, [skillData, dispatch]);

  const developerOptions = designation.map((t: commonType) => ({
    value: t.name,
    label: t.name,
    id: Number(t.id),
    guid: t.id,
  }));

  const skill = skills.map((s: commonType) => ({
    value: s.name,
    label: s.name,
    id: Number(s.id),
    guid: s.id,
  }));

  const country = countries.map((c: commonType) => ({
    value: c.name,
    label: c.name,
    id: Number(c.id),
    guid: c.id,
  }));

  // const handleSelectChange = (selected:MultiValue<Selected>, type:string) => {
  //   const selectedGuids = selected.map((option) => option.guid);
  //   if (type === "titles") {
  //     setSelectedTitle(selected)
  //     setDevelopertagIds(selectedGuids);
  //   } else if (type === "skills") {
  //     setSelectedSkills(selected)
  //     setSkillIds(selectedGuids);
  //   } else if (type === "countries") {
  //     setSelectedCountries(selected)
  //     setCountryIds(selectedGuids.toString());
  //   }
  // };

  const customStyles: StylesConfig<Selected, true> = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      background: "transparent",
      minHeight: "32px",
      cursor: "pointer",
      "&:hover": {
        border: "none",
      },
    }),
    container: (base) => ({
      ...base,
      width: "-webkit-fill-available",
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
      fontSize: "0.875rem",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "0 4px",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 8px",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    multiValueRemove: (base) => ({
      ...base,
      crusor: "pointer",
      ":hover": {
        color: "black",
      },
    }),
  };
  
  const handleSkillChange = (selectedOptions: MultiValue<Selected>) => {
    dispatch({
      type: "SET_SELECTEDSKILLS",
      payload: [...selectedOptions],
    });
  };

  const handleLocationChange = (selectedOptions: MultiValue<Selected>) => {
    dispatch({
      type: "SET_SELECTEDLOCATION",
      payload: [...selectedOptions], 
    });
  };
  
  
  

  return (
    <div className="pt-6">
      <div className="max-w-7xl mx-auto max-xl:max-w-5xl">
        <div className="mx-auto max-sm:w-11/12 max-lg:w-11/12">
          <div className="flex justify-between bg-white rounded-md border-[1px] max-lg:flex-col">
            <div className="flex items-center p-3 justify-between gap-4 px-4 grow max-lg:flex-col max-lg:py-4">
              <div className="flex items-center gap-2 grow max-lg:w-full">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 text-untitled-ui--primary600"
                    viewBox="0 0 22 22"
                  >
                    <path
                      fill="#7f56d9"
                      d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                    />
                  </svg>
                </div>
                <Select
                  options={developerOptions}
                  placeholder="Add Keywords"
                  isMulti
                  styles={customStyles}
                  // value={selectedTitle}
                  // onChange={(selected) => handleSelectChange(selected, "titles")}
                />
              </div>

              <div className="h-full w-px bg-gray-200 max-lg:hidden" />

              <div className="flex items-center gap-2 grow max-lg:w-full">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 22 22"
                  >
                    <path
                      fill="#7f56d9"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"
                    />
                    <circle cx="12" cy="9" r="2.5" fill="#7f56d9" />
                  </svg>
                </div>
                <Select
                  options={country}
                  placeholder="All Countries"
                  isMulti
                  styles={customStyles}
                  // value={selectedCountries}
                  onChange={handleLocationChange}
                />
              </div>

              <div className="h-full w-px bg-gray-200 max-lg:hidden" />

              <div className="flex items-center gap-2 grow max-lg:w-full">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 22 22"
                  >
                    <g
                      fill="none"
                      stroke="#7f56d9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01" />
                      <path d="M3 13a20 20 0 0 0 18 0" />
                    </g>
                  </svg>
                </div>
                <Select
                  options={skill}
                  placeholder="Add Skills"
                  isMulti
                  styles={customStyles}
                  onChange={handleSkillChange}
                />
              </div>

              <div className="h-full w-px bg-gray-200 max-lg:hidden" />

              {/* <div className="flex items-center gap-2 grow max-lg:w-full">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 22 22"
                  >
                    <g
                      fill="none"
                      stroke="#7f56d9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01" />
                      <path d="M3 13a20 20 0 0 0 18 0" />
                    </g>
                  </svg>
                </div>
                <Select
                  options={level}
                  placeholder="Add Experience Level"
                  isMulti
                  styles={customStyles}
                />
              </div> */}
            </div>
            {/* <button className="bg-untitled-ui--primary600 text-white text-[12px] px-4 py-4 rounded-r-md font-medium max-lg:rounded-bl-md max-lg:rounded-tr-none">
              START SEARCHING
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
