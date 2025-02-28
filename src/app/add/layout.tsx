import React from "react";
import PageHeader from "@/components/PageHeader";
import StepNavigation from "@/components/StepNavigation";
import { AddDealProvider } from "@/contexts/addDealContext";

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-2 lg:px-0">
      <PageHeader title="One Tab.Big Impact." />

      <div className="mt-20 mb-28 flex flex-col gap-x-16 text-white lg:flex-row">
        <StepNavigation />
        <AddDealProvider>
          <div className="w-full">{children}</div>
        </AddDealProvider>
      </div>
    </div>
  );
}
