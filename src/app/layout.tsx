import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Porfolio - Kaushik Kr. Mitra",
  description: "Welcome to my personal portfolio!",
  icons: {
    icon: "/assets/KM.png",
  },
  openGraph: {
    title: "Porfolio - Kaushik Kr. Mitra",
    description: "Welcome to my personal portfolio!",
    images: "/assets/KM.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancingScript.variable} font-inter`}>{children}</body>
    </html>
  );
}
