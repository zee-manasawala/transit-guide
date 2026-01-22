import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transit Guide - Simple guides to public transport",
  description: "Learn how to use public transport in any city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <div className="min-h-screen max-w-3xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}