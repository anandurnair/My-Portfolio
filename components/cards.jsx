import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Cards() {
  return (
    <div className=" gap-4 grid grid-cols-12 grid-rows-2 ">
       <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Palatte</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/palatte.png"
        />
        <CardFooter className="flex gap-3 justify-between">
          <p className="text-tiny tracking-wide font-bold drop-shadow text-left">
          Palatte is a innovative social media platform with freelancing features, built on Next.js and Express.js.
          </p>
          <Link href="https://www.palatte.anandu.site">
            {" "}
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Live link
            </Button>
          </Link>
          <Link href="https://github.com/anandurnair/palatte">
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Repo
            </Button>{" "}
          </Link>
        </CardFooter>
      </Card>
      {/* ecommerce */}
      <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Pixel Games</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/pixelgames.png"
        />
        <CardFooter className="flex gap-3">
          <p className="text-tiny tracking-wide font-bold drop-shadow text-left">
            An ecommerce online game store using express and mongoDB
          </p>
          <Link href="https://www.pixelgames.anandu.site/signup">
            {" "}
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Live link
            </Button>
          </Link>
          <Link href="https://github.com/anandurnair/Pixel-Games">
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Repo
            </Button>{" "}
          </Link>
        </CardFooter>
      </Card>
      {/* netflix */}
      <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Netflix</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/netflix2.png"
        />
        <CardFooter className="flex gap-3 justify-between">
          <p className="text-tiny  tracking-wide font-bold drop-shadow">
            A netflix clone using React and TMDB{" "}
          </p>
          {/* <Button className="text-tiny " color="default" radius="full" size="sm">
            Live link
          </Button> */}
          <Link href="https://github.com/anandurnair/netflix" className="flex">
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Repo
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* olx */}
      <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">OLX</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/olx2.png"
        />
        <CardFooter className="flex gap-3">
          <p className="text-tiny  tracking-wide font-bold drop-shadow">
            An OLX clone using React and firebase
          </p>
          {/* <Button className="text-tiny " color="default" radius="full" size="sm">
            Live link
          </Button> */}
          <Button
            className="text-tiny "
            color="default"
            radius="full"
            size="sm"
          >
            Repo
          </Button>
        </CardFooter>
      </Card>

      {/* quiz app */}
      <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Quiz app</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/quiz1.png"
        />
        <CardFooter className="flex gap-3 justify-between">
          <p className="text-tiny  tracking-wide font-bold drop-shadow">
            A Quiz app using NextJS{" "}
          </p>
          {/* <Button className="text-tiny " color="default" radius="full" size="sm">
            Live link
          </Button> */}
          <Link href="https://github.com/anandurnair/QuizWiz" className="flex">
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
            >
              Repo
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <Card className=" col-span-12  sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Todo List</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/projectThumbnails/todo.png"
        />
        <CardFooter className="flex gap-3 justify-between">
          <p className="text-tiny  tracking-wide font-bold drop-shadow">
            A todo list using ReactJS
          </p>
          <Link href="https://github.com/anandurnair/todo-application" className="flex">
            <Button
              className="text-tiny "
              color="default"
              radius="full"
              size="sm"
              
            >
              Repo
            </Button>
          </Link>
        </CardFooter>
      </Card>
     
    </div>
  );
}
