import * as React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className: string ;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange , className }) => {
  return (
    <select
      className={`border-[3px]
      shadow appearance-none border leading-4  tracking-wider h-10 rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
