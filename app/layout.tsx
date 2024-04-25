import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { Header } from "./components/header";
import Head from "next/head";
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
    <html lang="en" className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Header />
      <Nav />
      {/* TODO */}
      {/* <p className=" fixed z-50 left-0 bottom-6 text-sky-700 [writing-mode:vertical-rl] p-4 bg-white">
        euler.sistemas@gmail.com
      </p> */}
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
