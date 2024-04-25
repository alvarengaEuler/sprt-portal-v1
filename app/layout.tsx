import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { Header } from "./components/header";
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
    description: "Hey! I'm Euler Alvarenga, A Frontend Developer!",
    images: [
      {
        url: "https://lh3.googleusercontent.com/drive-viewer/AJc5JmRfimY6R2x0YCS7nfP8w8bGCy9fYCq5ODzEnFmav4xqtUK_FNirhs-LAbyU3bOQgZuHpUMDPNE=w1637-h936",
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
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
