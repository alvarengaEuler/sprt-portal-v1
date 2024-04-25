import { Nav } from "./components/nav";
import { Header } from "./components/header-section";
import Head from "next/head";
import { Footer } from "./components/footer";
import { inter } from "./layout";

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
