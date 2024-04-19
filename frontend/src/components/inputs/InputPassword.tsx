// PasswordInput.js

import  { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
    label?: string ,
    value?: string ,
    placeholder? : string ,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput : React.FC<InputProps> = ({ label, value, onChange , placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={value}
          onChange={onChange}
          className=" shadow appearance-none border h-10 rounded w-96 py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
        />
        <div className="absolute right-0 pr-3">
          {showPassword ? (
            <FaEye onClick={togglePasswordVisibility} className="cursor-pointer" />
          ) : (
           
            <FaEyeSlash onClick={togglePasswordVisibility} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
