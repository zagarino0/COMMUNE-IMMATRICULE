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
      className={`border-[2px]
      py-3
      hover:scale-110
      transition 
      duration-300 
      ease-in-out
      px-4  ${className}`}
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
