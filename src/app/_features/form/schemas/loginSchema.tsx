import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, 'Nom d’utilisateur requis'),
  password: z.string().min(1, 'Mot de passe requis'),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
