import { LinkedinIcon, MailIcon, XIcon } from "lucide-react";
import Link from "next/link";

import {
  PiGooglePlayLogo,
  PiAppStoreLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

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
        <LinkedinIcon size={20} className="text-slate-800" />
        <PiGooglePlayLogo size={20} className="text-slate-800" />
        <PiAppStoreLogo size={20} className="text-slate-800" />
        <PiYoutubeLogo size={20} className=" text-slate-800" />
        <XIcon size={20} className="text-slate-800" />
      </div>
    </nav>
  );
};
