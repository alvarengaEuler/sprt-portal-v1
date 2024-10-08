import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Euler Alvarenga",
  description: "Software Engineer | Mobile | Web",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div>
          <Header />
          <div>
            <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
