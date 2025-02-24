import z from "zod";

export const stepOneSchema = z.object({
  fName: z.string().min(1, "Please enter first name."),
  lName: z.string().min(1, "Please enter last name"),
});

export const stepTwoSchema = z.object({
  companyName: z.string().min(1, "Please enter company name"),
  contactNumber: z.coerce
    .number()
    .min(7, "Please enter a valid contact number"),
  companyEmail: z.string().email("Please enter a valid email"),
});

export const stepThreeSchema = z.object({});

export const newDealSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
});

export const newDealInitialValuesSchema = z.object({
  fName: z.string().optional(),
  lName: z.string().optional(),
  companyName: z.string().optional(),
  contactNumber: z.coerce.number().optional(),
  companyEmail: z.string().optional(),
  whatType: z.string().optional(),
  whatKind: z.string().optional(),
  chemicalList: z.string().optional(),
});
// export const newDealInitialValuesSchema = z.object({
//   name: z.string().optional(),
//   link: z.string().optional(),
//   coupon: z.string().optional(),
//   discount: z.coerce.number().optional(),
//   contactName: z.string().optional(),
//   contactEmail: z.string().optional(),
// });

export type NewDealType = z.infer<typeof newDealSchema>;
export type NewDealInitialValuesType = z.infer<
  typeof newDealInitialValuesSchema
>;
