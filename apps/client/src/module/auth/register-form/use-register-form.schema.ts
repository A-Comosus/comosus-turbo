import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
    ),
  acceptTerms: z.literal(true),
});

export const resolver = zodResolver(registerFormSchema);
