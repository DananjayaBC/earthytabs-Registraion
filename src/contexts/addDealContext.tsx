import { createContext, useContext, useState } from "react";

type NewDealData = {
  fName?: string;
  lName?: string;
  companyName?: string;
  contactNumber?: number;
  companyEmail?: string;
  whatType?: string;
  whatKind?: string;
  chemicalList?: string[]; // Updated to an array of strings
  [key: string]: any; // Allow string indexing
};

type AddDealContextType = {
  newDealData: NewDealData;
  updateNewDealDetails: (data: Partial<NewDealData>) => void;
};

const AddDealContext = createContext<AddDealContextType | undefined>(undefined);

export const useAddDealContext = () => {
  const context = useContext(AddDealContext);
  if (!context) {
    throw new Error("useAddDealContext must be used within an AddDealProvider");
  }
  return context;
};

export const AddDealProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newDealData, setNewDealData] = useState<NewDealData>({});

  const updateNewDealDetails = (data: Partial<NewDealData>) => {
    setNewDealData((prev) => ({ ...prev, ...data }));
  };

  return (
    <AddDealContext.Provider value={{ newDealData, updateNewDealDetails }}>
      {children}
    </AddDealContext.Provider>
  );
};
