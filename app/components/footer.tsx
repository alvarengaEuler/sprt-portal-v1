import React from "react";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
              We&apos;re about an email of distance. Let&apos;s have a nice
              call?
            </strong>

            <form className="mt-6">
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full rounded-md border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                />

                <Button
                  variant="joy"
                  className="absolute end-1 top-1/2 -translate-y-1/2 "
                >
                  send
                </Button>
              </div>
            </form>
          </div>

          {/* <div className="mt-16">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-gray-500 lg:text-lg">
                I'm an independent/indie app developer from Brazil. I enjoy
                crafting solid and scalable products with great UX and share my
                findings with others. Currently, I'm trying to build a
                profitable app business on my own. Currently I'm after a Ramen
                Profitability.
                <Soup className="pb-1 inline-block" />
              </p>

              <SocialIconList />
            </div>
          </div> */}

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
