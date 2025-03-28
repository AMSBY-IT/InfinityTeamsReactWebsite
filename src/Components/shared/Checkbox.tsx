type Props = {
    label: string;
    onChange: (checked: boolean) => void;
  };
  
  export default function Checkbox({ label, onChange }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };
  
    return (
      <div className="py-2">
        <div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 focus:ring-purple-500"
              onChange={handleChange}
            />
            <h4 className="text-sm font-medium">{label}</h4>
          </div>
        </div>
      </div>
    );
  }