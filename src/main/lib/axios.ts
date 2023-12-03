import axios from 'axios';

import { env } from '../config/env';

export const axiosSocialApiClient = axios.create({
  baseURL: env.MAIN_VITE_SOCIAL_API_BASE_URL,
});
