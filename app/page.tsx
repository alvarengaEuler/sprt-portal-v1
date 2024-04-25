import Image from "next/image";
import { HeroSection } from "./components/sections/hero-section";
import { Main } from "./components/Main";
import { CardSection } from "./components/sections/cards-section";

export default function Home() {
  return (
    <main>
      <div>
        {/* <HeroSection /> */}
        <Main />
        {/* <CardSection /> */}
      </div>
    </main>
  );
}
