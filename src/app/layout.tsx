import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Porfolio - Kaushik Kr. Mitra",
  description: "Welcome to my personal portfolio!",
  icons: {
    icon: "/assets/KM.png",
  },
  openGraph: {
    title: "Porfolio - Kaushik Kr. Mitra",
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
