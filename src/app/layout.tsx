import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ClientProvider from "./clientProvider";

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={`${inter.className} bg-slate-100 `}>
        <ClientProvider>
          <div className="flex flex-col justify-center md:mt-16">
            <Navbar />
            <div className="inline-block w-full md:w-3/4 m-auto">
              {children}
              <Footer />
            </div>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
