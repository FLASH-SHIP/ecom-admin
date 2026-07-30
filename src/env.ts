import { z } from "zod";

// 1. Server-side validation schema (secrets not exposed to the browser)
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  AUTH_SECRET: z.string().default("dev_admin_auth_secret_minimum_32_chars"),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
  AUTH_URL: z.string().optional(),
  AUTH_TRUST_HOST: z.string().optional(),
  ADMIN_SESSION_MAX_AGE_DAYS: z.coerce.number().int().positive().default(7),
  ADMIN_SESSION_ABSOLUTE_TIMEOUT_HOURS: z.coerce.number().int().positive().default(72),
  ADMIN_SESSION_IDLE_TIMEOUT_HOURS: z.coerce.number().int().positive().default(2),
  ADMIN_SESSION_CACHE_TTL_SEC: z.coerce.number().int().nonnegative().default(15),
  ADMIN_MAX_SESSIONS_PER_USER: z.coerce.number().int().positive().default(5),
  JWT_SECRET: z.string().default("dev-jwt-secret-do-not-use-in-production"),
  JWT_ADMIN_SECRET: z.string().default("dev_jwt_admin_secret_minimum_8_chars"),
});

// 2. Client-side validation schema (public parameters exposed to the browser)
const clientSchema = z.object({
  NEXT_PUBLIC_API_URL: z
    .string()
    .url("NEXT_PUBLIC_API_URL must be a valid URL")
    .default("http://localhost:4000"),
  NEXT_PUBLIC_APP_URL: z
    .string()
    .url("NEXT_PUBLIC_APP_URL must be a valid URL")
    .default("http://localhost:4001"),
});

type Env = z.infer<typeof serverSchema> & z.infer<typeof clientSchema>;

const processEnv = {
  NODE_ENV: process.env.NODE_ENV || "development",
  AUTH_SECRET:
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "dev_admin_auth_secret_minimum_32_chars",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  AUTH_URL: process.env.AUTH_URL,
  AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
  ADMIN_SESSION_MAX_AGE_DAYS: process.env.ADMIN_SESSION_MAX_AGE_DAYS,
  ADMIN_SESSION_ABSOLUTE_TIMEOUT_HOURS: process.env.ADMIN_SESSION_ABSOLUTE_TIMEOUT_HOURS,
  ADMIN_SESSION_IDLE_TIMEOUT_HOURS: process.env.ADMIN_SESSION_IDLE_TIMEOUT_HOURS,
  ADMIN_SESSION_CACHE_TTL_SEC: process.env.ADMIN_SESSION_CACHE_TTL_SEC,
  ADMIN_MAX_SESSIONS_PER_USER: process.env.ADMIN_MAX_SESSIONS_PER_USER,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4001",
  JWT_SECRET: process.env.JWT_SECRET || "dev-jwt-secret-do-not-use-in-production",
  JWT_ADMIN_SECRET: process.env.JWT_ADMIN_SECRET || "dev_jwt_admin_secret_minimum_8_chars",
};

const clientResult = clientSchema.safeParse(processEnv);
if (!clientResult.success) {
  console.error("❌ Invalid Admin public environment variables:");
  for (const [key, error] of Object.entries(clientResult.error.format())) {
    if (key !== "_errors") {
      console.error(`   - ${key}: ${(error as { _errors: string[] })._errors.join(", ")}`);
    }
  }
  throw new Error("Configuration validation failed");
}

export const publicEnv = clientResult.data;

let validatedServerEnv: z.infer<typeof serverSchema> | null = null;

if (typeof window === "undefined") {
  const serverResult = serverSchema.safeParse(processEnv);
  if (!serverResult.success) {
    console.error("❌ Invalid Admin server environment variables:");
    for (const [key, error] of Object.entries(serverResult.error.format())) {
      if (key !== "_errors") {
        console.error(`   - ${key}: ${(error as { _errors: string[] })._errors.join(", ")}`);
      }
    }
    throw new Error("Configuration validation failed");
  }
  validatedServerEnv = serverResult.data;
}

export const env = new Proxy({} as Env, {
  get(_target, prop) {
    const key = prop.toString();
    const isClient = typeof window !== "undefined";

    if (isClient && !key.startsWith("NEXT_PUBLIC_")) {
      throw new Error(
        `❌ Security Error: Attempted to access server-side environment variable "${key}" on the client!`,
      );
    }

    if (key.startsWith("NEXT_PUBLIC_")) {
      return publicEnv[key as keyof typeof publicEnv];
    }

    return validatedServerEnv?.[key as keyof typeof validatedServerEnv];
  },
});
export default env;
