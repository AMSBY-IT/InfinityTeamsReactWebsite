import { StylesConfig } from "react-select";

type OptionType = { label: string; value: string };

export const customStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    backgroundColor: "white",
    appearance: "none",
    borderRadius: "8px", 
    paddingTop: "4px", 
    paddingBottom: "4px", 
    paddingRight: "2px", 
    border:"solid 1px #e5e5e5",
    boxShadow: state.isFocused ? "0 0 0 1px #ad46ff" : "none",
    outline: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "16px",
  }),
};
