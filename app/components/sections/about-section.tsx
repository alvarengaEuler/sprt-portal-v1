"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../tab-button";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="text-gray-700 list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-gray-700 list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="text-gray-700 list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const gridComponent = () => (
  <div className="pt-14 grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
    <div>
      <strong className="font-medium text-gray-900"> Skills </strong>

      <ul className="mt-6 space-y-1">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            {" "}
            Marketing{" "}
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            Graphic Design
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            App Development
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            Web Development
          </a>
        </li>
      </ul>
    </div>

    <div>
      <strong className="font-medium text-gray-900"> Education </strong>

      <ul className="mt-6 space-y-1">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            Bachelor Degree in Computer Science
          </a>
        </li>
      </ul>
    </div>

    <div>
      <strong className="font-medium text-gray-900"> Support </strong>

      <ul className="mt-6 space-y-1">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            {" "}
            FAQs{" "}
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            {" "}
            Contact{" "}
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#"
          >
            {" "}
            Live Chat{" "}
          </a>
        </li>
      </ul>
    </div>
  </div>
);
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mx-auto" id="about">
      <a href="#about">
        <div className="container px-5 mx-auto lg:px-24  md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/eulertree.jpeg"
            width={600}
            height={600}
            alt={"hero"}
            className="pb-5"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="Avenir text-4xl font-bold mb-4 text-primary">
              About Me
            </h2>
            <p className="text-base lg:text-lg text-primary">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            {gridComponent()}
            {/* <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t?.id === tab)?.content}
            </div> */}
          </div>
        </div>
      </a>
    </section>
  );
};

export default AboutSection;
