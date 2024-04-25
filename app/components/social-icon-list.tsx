import Link from "next/link";
import React from "react";
import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiX,
  SiGoogleplay,
} from "react-icons/si";

export const SocialIconList = () => {
  return (
    <div className="">
      <div className="mt-6 flex justify-center gap-4 lg:justify-start">
        <Link
          className="text-gray-700 transition hover:text-gray-700/75"
          href="https://www.linkedin.com/in/euler-alvarenga-b9704467/"
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Linkedin </span>
          <SiLinkedin size={22} color="#191919" />
        </Link>

        <Link
          className="text-gray-700 transition hover:text-gray-700/75"
          href="https://twitter.com/rithienroll"
          aria-label="twitter link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Twitter </span>

          <SiX size={22} color="#191919" />
        </Link>

        <Link
          className="text-gray-700 transition hover:text-gray-700/75"
          href="https://github.com/alvarengaEuler/"
          aria-label="github link"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub size={22} color="#191919" />
        </Link>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75"
          href="https://www.instagram.com/photos.euler/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Instagram </span>

          <SiInstagram size={22} color="#191919" />
        </Link>
        {/* <a
          className="text-gray-700 transition hover:text-gray-700/75"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Instagram </span>

          <SiGoogleplay size={22} color="#191919" />
        </a> */}
      </div>
    </div>
  );
};
