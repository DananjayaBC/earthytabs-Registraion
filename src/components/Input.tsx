"use client";

import { useAddDealContext } from "@/contexts/addDealContext";

interface InputProps {
  label: string;
  id: string;
  description?: string;
  required?: boolean;
  pattern?: string;
  type: string;
  minLength?: number;
  min?: number;
  max?: number;
  errorMsg?: string;
}
export default function Input({
  label,
  id,
  required,
  pattern,
  type,
  minLength,
  min,
  max,
  description,
  errorMsg,
}: InputProps) {
  const { updateNewDealDetails, newDealData } = useAddDealContext();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewDealDetails({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label className="block text-lg" htmlFor={id}>
        {label}
        {description && (
          <span className="text-sm text-slate-200 block mb-1">
            {description}
          </span>
        )}
      </label>
      <input
        className={`w-full rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border-2 ${
          errorMsg
            ? "border-red-500 shadow-red-100 hover:border-red-600"
            : "border-slate-200 hover:border-slate-300"
        } shadow-sm hover:shadow-md`}
        type={type}
        name={id}
        id={id}
        required={required}
        pattern={pattern}
        minLength={minLength}
        min={min}
        max={max}
        onChange={handleInputChange}
        placeholder={errorMsg} // Add a placeholder prop for better UX
      />
      <div className="min-h-8 mt-1">
        {errorMsg && (
          <span className="text-red-500 text-sm block ">{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
function setUpdatedDeal(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}
