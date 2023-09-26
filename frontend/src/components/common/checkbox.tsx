import * as React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked,className, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-blue-500 ${className}` }
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;
