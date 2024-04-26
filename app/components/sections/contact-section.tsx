import React from "react";
import { ContactForm } from "../contact-form";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <>
      <h2 className="Avenir text-4xl font-bold mb-4 text-primary">Hire Me</h2>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-[#191919] font-bold sm:text-4xl">
              You&apos;re more than welcome!
            </h1>

            <p className="mt-4 text-gray-500">
              We&apos;re about an email of distance. Let&apos;s have a nice
              call?!
            </p>
          </div>

          <ContactForm />
        </div>

        <div className="relative h-48  w-full sm:h-96 lg:h-full  lg:w-1/2">
          <Image
            alt="picture"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover  "
            width={600}
            height={400}
            priority
          />
        </div>
      </section>
    </>
  );
};
