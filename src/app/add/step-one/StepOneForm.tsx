"use client";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { stepOneFormAction } from "./actions";
import { FormErrors } from "@/types";
import SubmitButton from "@/components/SubmitButton";

const initialState: FormErrors = {};

export default function StepOneForm() {
  const [serverErrors, formAction] = useFormState(
    stepOneFormAction,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="First Name"
          id="fName"
          type="text"
          required
          errorMsg={serverErrors?.fName}
        />
        <Input
          label="Last Name"
          id="lName"
          type="text"
          required
          errorMsg={serverErrors?.lName}
        />
        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}
