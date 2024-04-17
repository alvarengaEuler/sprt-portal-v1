import { HeartIcon, LinkedinIcon, MailIcon, XIcon } from "lucide-react";
import Link from "next/link";

import {
  PiInstagramLogoLight,
  PiGooglePlayLogo,
  PiAppStoreLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

export const Nav = () => {
  // const pathname = router pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80] xl:h-max py-8 bg-white
backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
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
