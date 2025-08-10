import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Albin",
  description: "Engineering Lead",
  icons: {
    icon: "/ab.ico",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} dark`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
