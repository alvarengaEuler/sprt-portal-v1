import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const skills = [
  "React Native",
  "ReactJS",
  "NextJs",
  "Zustand",
  "Redux",
  "Solid",
  "TDD",
  "Native Modules",
  "Expo",
  "iOS",
  "Android",
  "Tailwind",
  "Typescript",
];

export const AboutSection = () => {
  return (
    <section className="text-white mx-auto" id="about">
      <a href="#about">
        <div className="container px-5 mx-auto lg:px-24  md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/eulertree.jpeg"
            width={600}
            height={600}
            alt={"hero"}
            priority
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
            <div className="flex flex-row flex-wrap py-4 gap-2">
              {skills.map((tag, index) => (
                <Badge key={index} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};
