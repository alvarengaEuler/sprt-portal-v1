import { Badge } from "@/components/ui/badge";
import React from "react";

const data = [
  {
    title: "Localiza & Co - Frontend Engineer",
    description:
      "Collaborated with cross-functional teams to integrate third-party APIs, streamlining processes and reducing development time by 10%. Spearheaded the development of a customer-facing mobile application, resulting in a 13% increase in app usage and a 10% rise in user engagement within six months.",
    begin: "2021",
    end: "2023",
    city: "Belo Horizonte",
    techStack: [
      "React Native",
      "ReactJS",
      "Azure",
      "Redux",
      "Tailwind",
      "Typescript",
    ],
  },
  {
    title: "Meta 3 - Software Engineer",
    description:
      "Collaborated with cross-functional teams to integrate third-party APIs, streamlining processes and reducing development time by 10%. Spearheaded the development of a customer-facing mobile application, resulting in a 13% increase in app usage and a 10% rise in user engagement within six months.",
    begin: "2021",
    end: "2023",
    city: "Belo Horizonte",
    techStack: [
      "React Native",
      "ReactJS",
      "Azure",
      "Redux",
      "Tailwind",
      "Typescript",
    ],
  },
  {
    title: "Escola em Movimento - Mobile Engineer",
    description:
      "Collaborated with cross-functional teams to integrate third-party APIs, streamlining processes and reducing development time by 10%. Spearheaded the development of a customer-facing mobile application, resulting in a 13% increase in app usage and a 10% rise in user engagement within six months.",
    begin: "2021",
    end: "2023",
    city: "Belo Horizonte",
    techStack: [
      "React Native",
      "Azure",
      "Mobx",
      "Styled Components",
      "Typescript",
    ],
  },
];
export const JobListSection = () => {
  return (
    <div>
      <section className="text-gray-600 overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {data.map((item) => (
              <div
                key={item.title}
                className="py-8 flex flex-wrap md:flex-nowrap"
              >
                <div className="lg:pl-5  md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    {item.city}
                  </span>

                  <span className="mt-1 text-gray-500 text-sm">
                    {`${item.begin} - ${item.end}`}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                  <div className="flex flex-row flex-wrap py-4 gap-2">
                    {item.techStack.map((tag, index) => (
                      <Badge key={index} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
