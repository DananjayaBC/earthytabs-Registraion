"use client";

import { useAddDealContext } from "@/contexts/addDealContext";

interface CheckboxGroupProps {
  label: string;
  id: string;
  description?: string;
  required?: boolean;
  options: { value: string; label: string }[];
  errorMsg?: string;
}

export default function CheckboxGroup({
  label,
  id,
  required,
  description,
  options,
  errorMsg,
}: CheckboxGroupProps) {
  const { updateNewDealDetails, newDealData } = useAddDealContext();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const currentValues: string[] = newDealData[id] || []; // Explicitly type as string[]
    let updatedValues: string[];

    if (checked) {
      // Add the value if checked
      updatedValues = [...currentValues, value];
    } else {
      // Remove the value if unchecked
      updatedValues = currentValues.filter((item: string) => item !== value); // Explicitly type `item`
    }

    // Update the context
    updateNewDealDetails({ [id]: updatedValues });
  };

  return (
    <div>
      <label className="block text-xl" htmlFor={id}>
        {label}
        {description && (
          <span className="text-lg text-slate-200 block mb-1">
            {description}
          </span>
        )}
      </label>
      <br />
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              id={option.value}
              name={id}
              value={option.value}
              checked={newDealData[id]?.includes(option.value) || false}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor={option.value}
              className="ml-2 text-sm text-slate-200"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="min-h-8 mt-1">
        {errorMsg && (
          <span className="text-red-500 text-sm block">{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
