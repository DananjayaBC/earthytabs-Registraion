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
  const { newDealData } = useAddDealContext();

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

    if (success) {
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

      toast.success("Registraion successfully...redirect to home page");
      setTimeout(() => {
        router.push("https://earthytabs-landing.vercel.app/");
      }, 3000);
    } else if (errorMsg) {
      toast.error(errorMsg);
    }
    if (redirect) {
      return router.push(redirect);
    }
  };

  return (
    <form
      action={handleFormSubmit}
      className="flex flex-1 flex-col gap-2 items-stretch lg:max-w-[700px]"
    >
      <table className="w-full border border-white text-white text-left text-sm md:text-base">
        <tbody>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              First Name:
            </td>
            <td className="p-2">{fName}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              Last Name:
            </td>
            <td className="p-2">{lName}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              Company Name:
            </td>
            <td className="p-2">{companyName}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              Contact Number:
            </td>
            <td className="p-2">{contactNumber}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              Company Email:
            </td>
            <td className="p-2">{companyEmail}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              What type of cleaning company are you:
            </td>
            <td className="p-2">{whatType}</td>
          </tr>
          <tr className="border-b border-white">
            <td className="p-2 font-semibold border-r border-white">
              What kind of cleaning types you offer:
            </td>
            <td className="p-2">{whatKind}</td>
          </tr>
          <tr>
            <td className="p-2 font-semibold border-r border-white">
              Which Chemical Ranges you are using at the moment:
            </td>
            <td className="p-2">
              {Array.isArray(chemicalList) ? (
                <ul className="list-disc list-inside">
                  {chemicalList.map((chemical, index) => (
                    <li key={index}>{chemical}</li>
                  ))}
                </ul>
              ) : (
                chemicalList
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <SubmitButton text="Submit" />
    </form>
  );
}
