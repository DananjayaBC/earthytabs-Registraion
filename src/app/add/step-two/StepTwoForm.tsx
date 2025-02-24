"use client";
import Input from "@/components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { stepTwoFormAction } from "./actions";
import { useFormState } from "react-dom";
import { FormErrors } from "@/types";

const initialState: FormErrors = {};

export default function StepTwoForm() {
  const [serverErrors, formAction] = useFormState(
    stepTwoFormAction,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Company Name"
          id="companyName"
          required
          type="text"
          errorMsg={serverErrors?.companyName}
        />
        <Input
          label="Contact Number"
          id="contactNumber"
          required
          type="number"
          errorMsg={serverErrors?.contactNumber}
        />
        <Input
          label="Company Email"
          id="companyEmail"
          required
          type="email"
          errorMsg={serverErrors?.email}
        />
        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}
