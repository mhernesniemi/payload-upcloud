import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/Toaster";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type Locale = "en" | "fi";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export const metadata: Metadata = {
  title: SITE_NAME,
};

export const revalidate = 60;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} flex min-h-screen flex-col bg-stone-900 text-white`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex-grow">{children}</div>
        </NextIntlClientProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
