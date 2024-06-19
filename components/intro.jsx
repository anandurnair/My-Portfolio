"use client";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import TextSpan from "./textSpan";
const Intro = () => {

  const sentence = "Anandu R Nair".split("")
  return (
    <div className="h-lvh w-full flex">
      <div className="w-1/2  h-full  flex items-center p-10 pt-40">
        <div className="mb-48">
          <h2 className="text-2xl mb-5 tracking-wide">Hi , my name is</h2>
          <div className="flex cursor-pointer">
          {
            sentence.map((letter,index)=>{
              return(
                <TextSpan className="text-5xl  tracking-wide mb-5 font-extrabold" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
              )
            })
          }
          </div>
         
         
          <h2 className="text-3xl tracking-wide">
            I am a full stack developer
          </h2>
          <div className="flex gap-2 mt-5 gap-x-5">
            <a className="transform transition duration-500 hover:scale-110" href="https://www.linkedin.com/in/anandurnair1/">
              {" "}
              <FiLinkedin size={30} />
            </a>
            <a className="transform transition duration-500 hover:scale-110" href="https://github.com/anandurnair">
              <FiGithub size={30} />
            </a>
            <a className="transform transition duration-500 hover:scale-110" href="https://www.instagram.com/anandu._r/">
              <FiInstagram size={30} />
            </a>
            {/* <a className="transform transition duration-500 hover:scale-110" href="">
              <FiTwitter size={30} />
            </a> */}
          </div>
          <a className="transform transition duration-500 hover:scale-250" href="#contact">
            <Button
              className="mt-5 h-14 text-1xl w-40 tracking-widest"
              variant="ghost"
            >
              Let's talk
            </Button>
          </a>
        </div>
      </div>
      <div className="w-1/2  h-full flex items-center justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/153/364/original/3d-website-developer-working-on-laptop-illustration-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
