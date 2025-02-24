"use client";

import { useAddDealContext } from "@/contexts/addDealContext";

interface SelectProps {
  label: string;
  id: string;
  description?: string;
  required?: boolean;
  options: { value: string; label: string }[]; // Array of options for the select dropdown
  errorMsg?: string;
}

export default function Select({
  label,
  id,
  required,
  description,
  options,
  errorMsg,
}: SelectProps) {
  const { updateNewDealDetails, newDealData } = useAddDealContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <select
        className={`w-full rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border-2 ${
          errorMsg
            ? "border-red-500 shadow-red-100 hover:border-red-600"
            : "border-slate-200 hover:border-slate-300"
        } shadow-sm hover:shadow-md`}
        name={id}
        id={id}
        required={required}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option> {/* Default option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="min-h-8 mt-1">
        {errorMsg && (
          <span className="text-red-500 text-sm block">{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
