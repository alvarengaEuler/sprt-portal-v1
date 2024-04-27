import React from "react";
import { Soup } from "lucide-react";
import { SocialIconList } from "./social-icon-list";

export const Footer = () => {
  return (
    <div>
      <footer className=" bg-slate-100 mt-16 ">
        <div className="mx-auto max-w-screen-xl pt-8 px-4 pb-8  sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-gray-500 lg:text-lg">
                I&apos;m an independent/indie app developer from Brazil. I enjoy
                crafting solid and scalable products with great UX and share my
                findings with others. Currently, I&apos;m trying to build a
                profitable app business on my own. Currently I&apos;m after a
                Ramen Profitability.
                <Soup className="pb-1 inline-block" />
              </p>
            </div>
          </div>
          <div className="lg:flex items-center justify-center hidden">
            <SocialIconList />
          </div>
          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed text-gray-500">
              © 2024 SPRTA Euler Alvarenga. All rights reserved.
              <br />
              Proudly built with custom code. using{"  "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-gray-700 underline transition hover:text-gray-700/75"
              >
                NextJS{"  "}
              </a>
              and
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-gray-700 underline transition hover:text-gray-700/75"
              >
                {"  "}ReactJS
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
