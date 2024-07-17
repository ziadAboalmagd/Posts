// React & Next
import type { Metadata } from "next";

// fonts
import { Inter } from "next/font/google";

// css
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "home",
  description: "home page - posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
