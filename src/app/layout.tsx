import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@/../keystatic.config';
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const reader = createReader(process.cwd(), keystaticConfig);
const settings = await reader.singletons.settings.readOrThrow();
export const metadata: Metadata = {
  title: settings.title,
  description: "Welcome to my personal portfolio!",
  icons: {
    icon: "/assets/KM.png",
  },
  openGraph: {
    title: settings.title,
    description: "Welcome to my personal portfolio!",
    images: "/assets/logo-KKM.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dancingScript.variable} font-inter`}
      >
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
