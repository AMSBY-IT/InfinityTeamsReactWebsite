import { StylesConfig } from "react-select";

type OptionType = { label: string; value: string };

export const customStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    paddingLeft: "2.5rem",
    width: "100%",
    borderRadius: "8px",
    borderColor: state.isFocused ? "#6c5ce7" : "#d1d5dc",
    fontSize: "14px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingRight: "0.75rem",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
};