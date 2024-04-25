import Link from "next/link";

import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiX,
  SiGoogleplay,
} from "react-icons/si";

export const Nav = () => {
  return (
    <nav
      className="
    hidden
    flex-col 
    items-center 
    gap-y-4 
    fixed 
    h-max 
    
    mt-auto 
    z-50 
    top-0 
    w-full 
    xl:flex 
    xl:visible
    xl:right-[1%] 
    xl:justify-center 
    xl:w-16 
    xl:max-w-md 
    xl:h-screen"
    >
      <div
        className="flex 
        bg-white
        w-full 
        items-center 
        justify-between 
        gap-y-10 
        px-4 
        h-[80] 
        py-8 
        text-3xl 
        backdrop-blur-sm
        md:px-40 
        xl:flex-col 
        xl:justify-center 
        xl:px-0 
        xl:h-max 
        xl:text-xl
        xl:rounded-full"
      >
        <Link
          href="https://www.linkedin.com/in/euler-alvarenga-b9704467/"
          aria-label="linkedin link"
          target="_blank"
        >
          <SiLinkedin
            href="https://www.linkedin.com/in/euler-alvarenga-b9704467/"
            aria-label="linkedin link"
            target="_blank"
            size={20}
            className="text-slate-800"
          />
        </Link>
        {/* <PiGooglePlayLogo size={20} className="text-slate-800" /> */}
        <Link
          href="https://https://github.com/alvarengaEuler/"
          aria-label="github link"
          target="_blank"
        >
          <SiGithub size={20} className="text-slate-800" />
        </Link>
        <Link
          href="https://twitter.com/rithienroll"
          aria-label="twitter link"
          target="_blank"
        >
          <SiX size={20} className=" text-slate-800" />
        </Link>
      </div>
    </nav>
  );
};
