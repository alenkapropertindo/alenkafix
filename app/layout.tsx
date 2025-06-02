'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
