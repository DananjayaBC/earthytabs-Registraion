"use client";
import Input from "@/components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { stepThreeFormAction } from "./actions";
import { FormErrors } from "@/types";
import { useFormState } from "react-dom";

const initialState: FormErrors = {};

export default function StepThreeForm() {
  const [serverErrors, formAction] = useFormState(
    stepThreeFormAction,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input
          label="What type of cleaning company are you"
          id="whatType"
          required
          type="text"
          errorMsg={serverErrors?.whatType}
        />
        <Input
          label="What kind of cleaning types you offer"
          id="whatKind"
          required
          type="text"
          errorMsg={serverErrors?.whatKind}
        />
        <Input
          label="Which Chemical Ranges you using at the moment"
          id="chemicalList"
          required
          type="text"
          errorMsg={serverErrors?.chemicalList}
        />

        <SubmitButton text="Continue" />
      </div>
    </form>
  );
}
