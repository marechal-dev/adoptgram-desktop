import { z } from 'zod';

const envSchema = z.object({
  MAIN_VITE_SOCIAL_API_BASE_URL: z.string().url().default('localhost:3000/api'),
});

const parseResult = envSchema.safeParse(process.env);

if (!parseResult.success) {
  throw new Error('Invalid env vars!');
}

export const env = parseResult.data;
