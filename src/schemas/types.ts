import { z } from 'zod';
import { contactSchema } from './contact.schema';

export type ContactFormType = z.infer<typeof contactSchema>;
