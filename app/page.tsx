import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <main className=" ">
      <div className="">
        {/* <HeroSection /> */}
        <Main />
      </div>
    </main>
  );
}
