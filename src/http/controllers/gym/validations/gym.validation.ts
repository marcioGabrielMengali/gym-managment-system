import { z } from "zod";

export const createGymValidationSchema = z.object({
  companyName: z.string().min(5),
  ein: z.string(),
  password: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string(),
});
