import { Image } from "@nextui-org/react";
import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

const Skill = () => {
  return (
    <div className="h-auto px-10 py-32 " id="skills">
      <h1 className="text-5xl font-semibold">My Skills</h1>
      <h2 className="text-2xl w-2/3 mt-5 font-medium">
      I like to take responsibility for crafting an aesthetic user experience using modern frontend and backend architectures.
      </h2>
      <div className="mt-10">
        <h2 className="font-medium text-2xl">LANGUAGE AND TOOLS</h2>
        <div className="mt-5 flex gap-7">
          <Tooltip content="HTML">
            <Image
              src="/images/skillImages/html.png"
              alt="HTML"
              className="w-14"
            />
          </Tooltip>

          <Tooltip content="CSS">
            <Image
              src="/images/skillImages/css.png"
              alt="CSS"
              className="w-16"
            />
          </Tooltip>
          <Tooltip content="JavaScript">
            <Image src="/images/skillImages/js.png" alt="JS" className="w-16" />
          </Tooltip>
          <Tooltip content="TypeScript">
          
            <Image src="/images/skillImages/ts.png" alt="TS" className="w-16" />
          </Tooltip>
          <Tooltip content="NodeJS">
            <Image
              src="/images/skillImages/node.png"
              alt="Node"
              className="w-16"
            />
          </Tooltip>
          <Tooltip content="SCSS">
            <Image
              src="/images/skillImages/scss.png"
              alt="SCSS"
              className="w-16"
            />
          </Tooltip>
          <Tooltip content="GIT">
            <Image
              src="/images/skillImages/git.png"
              alt="Git"
              className="w-16"
            />
          </Tooltip>
          <Tooltip content="FIgma">
          
            <Image
              src="/images/skillImages/figma.png"
              alt="Figma"
              className="w-20 -mt-2"
            />
          </Tooltip>
          <Tooltip content="Postman">
            <Image
              src="/images/skillImages/postman.webp"
              alt="Postman"
              className="w-16"
            />
          </Tooltip>
          
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-medium text-2xl">LIBRARIES AND FRAMEWORKS</h2>
        <div className="mt-5 flex gap-7">
        <Tooltip content="React">
        <Image
            src="/images/skillImages/react.png"
            alt="react"
            className="w-16"
          />
        </Tooltip>
          <Tooltip content="Redux">
          <Image
            src="/images/skillImages/redux.png"
            alt="redux"
            className="w-16"
          />
          </Tooltip>
          <Tooltip content="NextJS">
          <Image
            src="/images/skillImages/next.webp"
            alt="nextjs"
            className="w-16"
          />
          </Tooltip>
          <Tooltip content="Express">
          <Image
            src="/images/skillImages/express.png"
            alt="express"
            className="w-16"
          />
          </Tooltip>

          <Tooltip content="Bootstrap">
          <Image
            src="/images/skillImages/bootstrap.png"
            alt="Bootstrap"
            className="w-16"
          />
          </Tooltip>

          <Tooltip content="Tailwind">
          <Image
            src="/images/skillImages/tailwind.png"
            alt="Tailwind"
            className="w-16 mt-3"
          />
          </Tooltip>
         
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-medium text-2xl">DATABASES</h2>
        <div className="mt-5 flex gap-7">
        <Tooltip content="MongoDB">
        <Image
            src="/images/skillImages/mongo.png"
            alt="mongodb"
            className="w-16"
          />
        </Tooltip>

        <Tooltip content="PostgreSQL">
        <Image
            src="/images/skillImages/postgres.png"
            alt="PostgreSQL"
            className="w-16"
          />
        </Tooltip>

          
          
        </div>
      </div>
    </div>
  );
};

export default Skill;
