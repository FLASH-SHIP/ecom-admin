import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isTurbopack = process.env.TURBOPACK !== "0";

const nextConfig: NextConfig = {
  // Disable strict mode to avoid double-mount issues
  reactStrictMode: false,

  turbopack: {
    root: path.join(__dirname, ".."),
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
  },

  // Don't bundle optional server-only dependencies
  serverExternalPackages: [
    "@aws-sdk/client-s3",
    "sharp",
    "@prisma/client",
    "@prisma/adapter-pg",
    "pg",
    "@ecom/prisma",
  ],

  // Transpile workspace packages
  transpilePackages: [
    "@flash-ship/ecom-lib",
    "@flash-ship/ecom-config",
    "@flash-ship/ecom-types",
    "@ecom/trpc",
    "@ecom/features",
    "@flash-ship/ecom-i18n",
    "@ecom/shared",
  ],

  async rewrites() {
    const apiUrl =
      process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    return [
      {
        source: "/api/v1/:path*",
        destination: `${apiUrl}/api/v1/:path*`,
      },
    ];
  },

  // Webpack config only when NOT using Turbopack
  ...(!isTurbopack && {
    webpack: (config) => {
      if (config.module?.rules) {
        config.module.rules.push({
          test: /\.(json|js|ts|tsx|jsx)$/,
          resourceQuery: /raw/,
          use: "raw-loader",
        });
      }
      return config;
    },
  }),

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

const finalConfig = withNextIntl(nextConfig);

// Ensure Turbopack resolveAlias is always set for next-intl/config
if (!finalConfig.turbopack) {
  finalConfig.turbopack = {};
}
finalConfig.turbopack.resolveAlias = {
  ...finalConfig.turbopack.resolveAlias,
  "next-intl/config": "./src/i18n/request.ts",
};

if (finalConfig.experimental) {
  delete (finalConfig.experimental as Record<string, unknown>).turbo;
}

export default finalConfig;
