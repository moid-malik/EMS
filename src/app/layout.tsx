import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Easy-EMS",
  description: "Easy-EMS, An easy to use employee management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-800 ${inter.className} `}
      >
        {children}
      </body>
    </html>
  );
}
