import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'I gues your name must be more longer' })
    .max(50, { message: 'Man, your name is too long...' }),
  email: z.string().email({ message: "Doesn't look like an email address" }),
  message: z
    .string()
    .min(2, { message: 'More, man, more text for me!' })
    .max(1440, { message: 'I think you overdid it.' }),
  isPassed: z.boolean().refine((val) => val === true, {
    message: 'Hey, confirm our rules before submit (Please)',
  }),
});
