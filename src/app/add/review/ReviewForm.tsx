"use client";
import Input from "@/components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { submitDealAction } from "./actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAddDealContext } from "@/contexts/addDealContext";
import { NewDealType } from "@/schemas";
import emailjs from "@emailjs/browser";

export default function ReviewForm() {
  const router = useRouter();
  const { newDealData, resetLocalStorage } = useAddDealContext();

  const {
    fName,
    lName,
    companyName,
    contactNumber,
    companyEmail,
    whatType,
    whatKind,
    chemicalList,
  } = newDealData;

  const handleFormSubmit = async (formData: FormData) => {
    const res = await submitDealAction(newDealData as NewDealType);
    const { redirect, errorMsg, success } = res;

    try {
      await emailjs.send(
        "service_z1oxwyk",
        "template_rgiz457",
        {
          fName: fName,
          to_name: "Dananjaya",
          companyEmail: companyEmail,
          to_email: "dananjaya.chanuka@gmail.com",
          lName: lName,
          companyName: companyName,
          contactNumber: contactNumber,
          whatType: whatType,
          whatKind: whatKind,
          chemicalList: chemicalList,
        },
        "rue3kZK0havg7vtxY"
      );
      resetLocalStorage();
      toast.success("Registraion successfully...redirect to home page");
      setTimeout(() => {
        router.push("https://earthytabs-landing.vercel.app/");
      }, 3000);
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong, Please try again later");
    }

    // if (success) {
    //   toast.success("Deal submitted successfully");
    //   resetLocalStorage();
    // } else if (errorMsg) {
    //   toast.error(errorMsg);
    // }
    // if (redirect) {
    //   return router.push(redirect);
    // }
  };

  return (
    <form
      action={handleFormSubmit}
      className="flex flex-1 flex-col gap-2 items-stretch lg:max-w-[700px]"
    >
      <p className="text-xl md:text-3xl">First Name: {fName}</p>
      <p className="text-xl md:text-3xl">Last Name: {lName}</p>
      <p className="text-white/90">Company Name: {companyName}</p>
      <p className="text-white/90">Contact Number: {contactNumber}%</p>
      <p className="text-white/90">Company Email: {companyEmail}</p>
      <p className="text-white/90">
        What type of cleaning company are you: {whatType}
      </p>
      <p className="text-white/90">
        What kind of cleaning types you offer: {whatKind}
      </p>
      <p className="text-white/90">
        Which Chemical Ranges you using at the moment: {chemicalList}
      </p>

      <SubmitButton text="Submit" />
    </form>
  );
}
