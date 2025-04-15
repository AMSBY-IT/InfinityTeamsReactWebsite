import { ChevronDown } from "lucide-react";
import React from "react";

export type Options = {
  id: string;
  name: string;
};
type Props = {
  label: string;
  options: Options[];
  value?: string;
  onChange: (option: Options) => void;
  required?: boolean
};

const DropDown = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = props.options.find(
      (opt) => opt.id === event.target.value
    );
    if (selectedOption) {
      props.onChange(selectedOption);
    }
  };
  return (
    <div className="py-2">
      <div>
        <h4 className="text-sm font-medium mb-2">{props.label}{props.required && <span className="text-red-500 ml-1">*</span>}</h4>
        <div className="relative">
          <select
            className="w-full bg-white appearance-none border rounded-md px-2 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500"
            onChange={handleChange}
            value={props.value}
          >
            <option value="" disabled selected>
              Select
            </option>
            {props.options.map((opt) => {
              return <option value={opt.id}>{opt.name}</option>;
            })}
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
