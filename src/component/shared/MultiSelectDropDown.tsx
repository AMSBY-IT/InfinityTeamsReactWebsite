
import Select, { MultiValue } from "react-select";
import { customStyles } from "../ui/customStyle";


export type Options = {
  id: string;
  name: string;
};

type Props = {
  label: string;
  options: Options[];
  helperText: string
  selectedOptions: Options[];
  onChange: (selectedOptions: Options[]) => void;
  required?: boolean
};

const MultiSelectDropdown = ({ label, options,selectedOptions, onChange,required,helperText }: Props) => {
  

  const handleChange = (selected: MultiValue<{ value: string; label: string }>) => {
    const mappedSelected = selected.map((opt) => ({
      id: opt.value,
      name: opt.label,
    }));
    onChange(mappedSelected);
  };

  return (
    <div className="w-full py-2">
      <h4 className="text-sm font-medium mb-2">{label}{required && <span className="text-red-500 ml-1">*</span>}</h4>
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
      <div className="flex justify-between items-center mt-2">
					<p className="text-xs text-red-600">{helperText}</p>
				</div>
    </div>
  );
};

export default MultiSelectDropdown;
