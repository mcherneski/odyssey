import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import { Navbar } from "@/components/ui/navbar";
import { TurnkeyIframe } from "@/components/auth/TurnkeyIframe";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odyssey",
  description: "Create Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Navbar />
          <TurnkeyIframe /> */}
        {children}
        </Providers>
      </body>
    </html>
  );
}
