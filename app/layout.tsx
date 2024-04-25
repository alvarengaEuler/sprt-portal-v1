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
    title: "Euler Alvarenga | Mobile Developer",
    description: "I build digital solutions both mobile and web",
    images: [
      {
        url: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihalj2pW1aNNErbckMD7iIMYFTfogKYGn138tTDXAg35ORlzlNB9LRv2owSiIwlvVP1LD1zfTfl7aFEY-59USfDjAoyBoP-i-JE=w1627-h934-rw-v1",
        width: 878,
        height: 516,
        alt: "Euler Alvarenga business card",
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
