import React from "react";
import Image from "next/image";

const data = [
  {
    id: "1",
    src: "/images/expo.svg",
    alt: "Expo Logo",
  },
  {
    id: "2",
    src: "/images/typescript.png",
    alt: "Typescript Logo",
  },
  {
    id: "3",
    src: "/images/swift.png",
    alt: "Swift Logo",
  },
  {
    id: "4",
    src: "/images/reactnative.svg",
    alt: "React Native Logo",
  },
];

export const CompaniesSection = () => {
  return (
    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 ">
        <div className="flex flex-col w-full mb-4 text-left lg:text-center">
          <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
            Trusted by top-tier product companies
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                className="block object-contain h-16 greyC"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
