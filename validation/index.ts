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

export const loginSchema = z.object({
  firstInput: z.coerce.number({
    required_error: 'First number is required',
    invalid_type_error: 'First input must be a number',
  }),
  secondInput: z.coerce.number({
    required_error: 'Second number is required',
    invalid_type_error: 'Second input must be a number',
  }),
  thirdInput: z.coerce.number({
    required_error: 'Third number is required',
    invalid_type_error: 'Third input must be a number',
  }),
  fourthInput: z.coerce.number({
    required_error: 'Fourth number is required',
    invalid_type_error: 'Fourth input must be a number',
  }),
  fifthInput: z.coerce.number({
    required_error: 'Fifth number is required',
    invalid_type_error: 'Fifth input must be a number',
  }),
});

export const recoverySchema = z.object({
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .min(8, { message: 'Phone number must be at least 8 digits' }),
});
