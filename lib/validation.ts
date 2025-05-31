import { z } from 'zod';

export const userBasicInfoSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

export const userAddressSchema = z.object({
  street: z.string().min(3, { message: 'Street must be at least 3 characters long' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters long' }),
  zipcode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: 'Please enter a valid zip code (e.g., 12345 or 12345-6789)' }),
});

export const userFormSchema = userBasicInfoSchema.merge(userAddressSchema);

export type UserBasicInfoSchema = z.infer<typeof userBasicInfoSchema>;
export type UserAddressSchema = z.infer<typeof userAddressSchema>;
export type UserFormSchema = z.infer<typeof userFormSchema>;