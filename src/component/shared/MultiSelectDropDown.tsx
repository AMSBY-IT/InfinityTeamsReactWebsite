
import Select, { MultiValue } from "react-select";
import { customStyles } from "../ui/customStyle";


export type Options = {
  id: string;
  name: string;
};

type Props = {
  label: string;
  options: Options[];
  selectedOptions: Options[];
  onChange: (selectedOptions: Options[]) => void;
};

const MultiSelectDropdown = ({ label, options,selectedOptions, onChange }: Props) => {
  

  const handleChange = (selected: MultiValue<{ value: string; label: string }>) => {
    const mappedSelected = selected.map((opt) => ({
      id: opt.value,
      name: opt.label,
    }));
    onChange(mappedSelected);
  };

  return (
    <div className="w-full py-2">
      <h4 className="text-sm font-medium mb-2">{label}</h4>
      <Select
        isMulti
        options={options.map((opt) => ({ value: opt.id, label: opt.name }))}
        value={selectedOptions.map((opt) => ({ value: opt.id, label: opt.name }))}
        onChange={handleChange}
        closeMenuOnSelect={false}
        isClearable={false}
        placeholder="Select"
        maxMenuHeight={160}
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelectDropdown;
