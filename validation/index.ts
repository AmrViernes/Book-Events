import { z } from 'zod';

export const joinEventSchema = z.object({
  name: z
    .string({
      required_error: 'Full Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(1, { message: 'Full Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(8, { message: 'Phone number must be at least 8 digits' }),
  notes: z
    .string()
    .max(200, { message: 'Notes must be less than 200 characters' })
    .optional(),
});
