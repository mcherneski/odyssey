import type { Metadata } from "next";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import { Navbar } from "@/components/navbar";
import { useRouter, useSearchParams } from 'next/navigation'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odyssey",
  description: "Proof or it didn't happen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
