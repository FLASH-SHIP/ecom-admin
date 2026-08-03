import AdminApp from "@admin/components/AdminApp";
import { ToastProvider } from "@admin/components/toast-provider";
import { auth } from "@admin/lib/auth";
import { TRPCProvider } from "@admin/lib/trpc";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ecom Express",
    default: "Ecom Express",
  },
  description: "Ecom Express Content Management System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // Fetch messages server-side — passed to NextIntlClientProvider so
  // useTranslations() works in all client components without extra setup
  const messages = await getMessages();

  const locale = await getLocale();

  return (
    <html lang={locale} className={`${beVietnamPro.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <NextIntlClientProvider messages={messages}>
          <SessionProvider session={session}>
            <TRPCProvider>
              <ToastProvider>
                <AdminApp>{children}</AdminApp>
              </ToastProvider>
            </TRPCProvider>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
