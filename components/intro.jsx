"use client";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import TextSpan from "./textSpan";

const Intro = () => {
  const sentence = "Anandu R Nair".split("");

  return (
    <div className="h-lvh w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 h-full flex items-center md:ml-30 p-5 md:p-10 pt-10 md:pt-40">
        <div className="mb-20 md:mb-48">
          <h2 className="text-xl  md:text-2xl mb-5 tracking-wide">Hi, my name is</h2>
          <div className="flex cursor-pointer flex-wrap">
            {sentence.map((letter, index) => (
              <TextSpan className="text-3xl sm:text-sm md:text-5xl tracking-wide mb-5 font-extrabold" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl tracking-wide">I am a full stack developer</h2>
          <div className="flex gap-2 mt-5 gap-x-5">
            <a
              className="transform transition duration-500 hover:scale-110"
              href="https://www.linkedin.com/in/anandurnair1/"
            >
              <FiLinkedin size={30} />
            </a>
            <a
              className="transform transition duration-500 hover:scale-110"
              href="https://github.com/anandurnair"
            >
              <FiGithub size={30} />
            </a>
            <a
              className="transform transition duration-500 hover:scale-110"
              href="https://www.instagram.com/anandu._r/"
            >
              <FiInstagram size={30} />
            </a>
          </div>
          <a className="transform transition duration-500 hover:scale-105" href="#contact">
            <Button className="mt-5 h-14 text-lg w-40 tracking-widest" variant="ghost">
              Let's talk
            </Button>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 h-full flex items-center md:-mt-20 justify-center p-5 md:p-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/153/364/original/3d-website-developer-working-on-laptop-illustration-png.png"
          alt="Developer Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
