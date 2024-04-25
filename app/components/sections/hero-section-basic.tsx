import React from "react";
import { TypeAnimation } from "react-type-animation";
import { MessageSquareShare, MoveRight } from "lucide-react";
import { SocialIconList } from "../social-icon-list";
import { Button } from "@/components/ui/button";

export const HeroSectionBasic = () => {
  return (
    <div className=" max-w-7xl mx-auto flex px-5 pt-24 pb-16 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-center md:text-left  items-center text-center">
        <h1 className="mb-5 sm:text-6xl text-4xl items-center Avenir xl:w-2/2 text-gray-900">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-slate-900">
            Euler
          </span>
          , a design-oriented
          <br />
          <TypeAnimation
            sequence={[
              "Mobile Engineer",
              1000,
              "Web Developer",
              1000,
              "Solo Entrepreneur",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mb-4 xl:w-3/4 text-gray-600 text-md text-justify">
          I&apos;m an independent app developer from Brazil trying to build a
          profitable small company on my own. I also craft user-friendly digital
          experiences and can help you do. Both Mobile or Web-wise
        </p>

        <div className="flex flex-col gap-4 mt-4 md:flex-row lg:flex-row justify-center w-[330px]">
          <Button className="w-full ">
            Hire Me!
            <MessageSquareShare size={18} className="ml-1" />
          </Button>
          <Button variant="joy">
            Download my CV
            <MoveRight size={18} className="ml-1" />
          </Button>
        </div>
        <div className="lg:hidden">
          <SocialIconList />
        </div>
      </div>
    </div>
  );
};
