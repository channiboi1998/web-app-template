import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/libs/tanstack/query-provider";
import { cn } from "@/utils/shadcn";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Applesung",
  description: "Buy anytime, anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex", fontSans.variable)}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
