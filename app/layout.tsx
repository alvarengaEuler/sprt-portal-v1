import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { HeaderSection } from "./components/header-section";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPRT | Euler",
  description: "Euler Alvarenga Landing Page",
  twitter: {
    description: "",
    creatorId: "@AlvarengaEuler",
    site: "@AlvarengaEuler",
    card: "summary_large_image",
  },
  other: {
    "instagram:title": "@rithie",
    site: "https://instagram/rithie",
  },
  openGraph: {
    url: "#",
    title: "Euler Alvarenga | Frontend Developer",
    description: "Hey! I'm Euler Alvarenga, A Software Engineer!",
    images: [
      {
        url: "https://photos.google.com/share/AF1QipN1VIxuUwEZOC_pwNvMr687oRDIweY1adex9JwPdSHa39RNZ-bXmDuFADyJdaWEtA/photo/AF1QipMpAlivVCoKJIeV664NKLNgcJB_Z4eH08PwFBPv?key=RjhoTVBiU1NLZXV3VHVjQkhVVFhJVkhFeVRMcmVn",
        width: 800,
        height: 474,
        alt: "Euler Alvarenga | Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <HeaderSection />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
