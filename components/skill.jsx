import React from "react";
import { Image } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

const Skill = () => {
  return (
    <div className="px-6 md:px-10 py-12 md:py-32" id="skills">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-5">
        My Skills
      </h1>
      <h2 className="text-lg md:text-xl text-center mb-10">
        I like to take responsibility for crafting an aesthetic user experience
        using modern frontend and backend architectures.
      </h2>

      {/* Language and Tools Section */}
      <div className="mt-10">
        <h2 className="font-medium text-xl text-center mb-3">LANGUAGE AND TOOLS</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Tooltip content="HTML">
            <Image
              src="/images/skillImages/html.png"
              alt="HTML"
              className="w-12 sm:w-14 md:w-16"
            />
          </Tooltip>

          <Tooltip content="CSS">
            <Image
              src="/images/skillImages/css.png"
              alt="CSS"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="JavaScript">
            <Image
              src="/images/skillImages/js.png"
              alt="JavaScript"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="TypeScript">
            <Image
              src="/images/skillImages/ts.png"
              alt="TypeScript"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="NodeJS">
            <Image
              src="/images/skillImages/node.png"
              alt="NodeJS"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="SCSS">
            <Image
              src="/images/skillImages/scss.png"
              alt="SCSS"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="GIT">
            <Image
              src="/images/skillImages/git.png"
              alt="GIT"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Figma">
            <Image
              src="/images/skillImages/figma.png"
              alt="Figma"
              className="w-16 sm:w-20 md:w-20 -mt-2"
            />
          </Tooltip>

          <Tooltip content="Postman">
            <Image
              src="/images/skillImages/postman.webp"
              alt="Postman"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>
        </div>
      </div>

      {/* Libraries and Frameworks Section */}
      <div className="mt-10">
        <h2 className="font-medium text-xl text-center mb-3">LIBRARIES AND FRAMEWORKS</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Tooltip content="React">
            <Image
              src="/images/skillImages/react.png"
              alt="React"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Redux">
            <Image
              src="/images/skillImages/redux.png"
              alt="Redux"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Next.js">
            <Image
              src="/images/skillImages/next.webp"
              alt="Next.js"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Express">
            <Image
              src="/images/skillImages/express.png"
              alt="Express"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Bootstrap">
            <Image
              src="/images/skillImages/bootstrap.png"
              alt="Bootstrap"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="Tailwind CSS">
            <Image
              src="/images/skillImages/tailwind.png"
              alt="Tailwind CSS"
              className="w-12 sm:w-16 md:w-16 mt-3"
            />
          </Tooltip>
        </div>
      </div>

      {/* Databases Section */}
      <div className="mt-10">
        <h2 className="font-medium text-xl text-center mb-3">DATABASES</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Tooltip content="MongoDB">
            <Image
              src="/images/skillImages/mongo.png"
              alt="MongoDB"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>

          <Tooltip content="PostgreSQL">
            <Image
              src="/images/skillImages/postgres.png"
              alt="PostgreSQL"
              className="w-12 sm:w-16 md:w-16"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Skill;
