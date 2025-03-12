import type { Metadata } from "next";
import { Source_Sans_3, Merriweather, Dancing_Script } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import { formattedPhoneNumber } from "@/constants";

import "./globals.css";
import Layout from "@/components/Layout";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Falls Monument | Sheboygan Falls, WI | ${formattedPhoneNumber}`,
  description:
    "Respectfully serving Sheboygan Falls and southeastern Wisconsin for over 70 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${merriweather.variable} ${dancingScript.variable}`}
      >
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
