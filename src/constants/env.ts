import { Environment } from "src/types/env";

export const environment = process.env.NEXT_PUBLIC_ENVIRONMENT as Environment;
export const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
export const googleClientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string;
