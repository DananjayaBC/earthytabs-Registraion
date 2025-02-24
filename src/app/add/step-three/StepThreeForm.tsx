"use client";
import Input from "@/components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { stepThreeFormAction } from "./actions";
import { FormErrors } from "@/types";
import { useFormState } from "react-dom";
import Select from "@/components/Select";
import CheckboxGroup from "@/components/CheckboxGroup";

const initialState: FormErrors = {};

export default function StepThreeForm() {
  const options = [
    { value: "residential", label: "Residential Cleaning" },
    { value: "commercial", label: "Commercial Cleaning" },
    { value: "industrial", label: "Industrial Cleaning" },
    {
      value: "specialized",
      label: "Specialized Cleaning (e.g., carpets, windows)",
    },
  ];
  const options1 = [
    { value: "residential", label: "Residential Cleaning" },
    { value: "commercial", label: "Commercial Cleaning" },
    { value: "industrial", label: "Industrial Cleaning" },
    { value: "deep_cleaning", label: "Deep Cleaning" },
    { value: "move_in_out", label: "Move-In/Move-Out Cleaning" },
    { value: "carpet_cleaning", label: "Carpet Cleaning" },
    { value: "window_cleaning", label: "Window Cleaning" },
    { value: "post_construction", label: "Post-Construction Cleaning" },
    { value: "green_cleaning", label: "Green/Eco-Friendly Cleaning" },
    { value: "office_cleaning", label: "Office Cleaning" },
    { value: "janitorial", label: "Janitorial Services" },
    { value: "pressure_washing", label: "Pressure Washing" },
    { value: "disinfection", label: "Disinfection Services" },
    { value: "upholstery_cleaning", label: "Upholstery Cleaning" },
    { value: "event_cleaning", label: "Event Cleaning" },
    { value: "laundry_services", label: "Laundry Services" },
    { value: "pool_cleaning", label: "Pool Cleaning" },
    { value: "vehicle_cleaning", label: "Vehicle Cleaning" },
    { value: "other", label: "Other (Specify)" },
  ];
  const chemicalOptions = [
    { value: "bleach,", label: "Bleach" },
    { value: "ammonia,", label: "Ammonia" },
    { value: "hydrogen_peroxide,", label: "Hydrogen Peroxide" },
    { value: "vinegar,", label: "Vinegar" },
    { value: "other,", label: "Other (Specify)" },
  ];
  const [serverErrors, formAction] = useFormState(
    stepThreeFormAction,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Select
          label="What type of cleaning company are you?"
          id="whatType"
          required
          options={options}
          errorMsg={serverErrors?.whatType}
        />
        <Select
          label="What kind of cleaning types do you offer?"
          id="whatKind"
          required
          options={options1}
          errorMsg={serverErrors?.whatKind}
        />
        <CheckboxGroup
          label="What chemicals do you use?"
          id="chemicalList"
          required
          options={chemicalOptions}
          errorMsg={serverErrors?.chemicalList}
        />

        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}
