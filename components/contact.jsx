"use client";
import { FaArrowRight } from "react-icons/fa";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Working");
    if (name == "" || email === "" || message == "") {
      toast.error("Fill the form");
      return;
    }
    const data = { Name: name, Email: email, Message: message };
    fetch(
      "https://script.google.com/macros/s/AKfycby1Zxw8aNZ2jyG6vlj2-AtP6vo8a6FjQWA_OG0ZXJT7hq-YQexp3Zcvt2jZTobBwBV5Rw/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        console.log("res", res);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res;
      })
      .then((data) => {
        console.log("data", data);
        toast.success("Message sent");
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        toast.error("Error in message sent");
        console.error("Error:", error);
      });
  };
  return (
    <>
      <ToastContainer position="bottom-right" />
      <div className="h-lvh  flex   w-screen" id="contact">
        <div className="w-2/5 flex flex-col h-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/812/543/original/3d-modeling-of-add-new-friend-in-computer-png.png"
            alt=""
          />
        </div>
        <div className="w-2/4 h-lvh pl-10 pr-5 pt-14">
          <h1 className="text-5xl font-semibold">Contact</h1>
          <h2 className="text-2xl  mt-5 font-medium">Get In Touch.</h2>
          <div className="pt-10 w-2/3">
            <Input
              value={name}
              type="text"
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              value={email}
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              className="mt-10"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              value={message}
              className="mt-10 w-full"
              label="Message"
              variant="bordered"
              placeholder="Enter your message"
              disableAutosize
              classNames={{
                input: "resize-y min-h-[40px]",
              }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="mt-5 w-full flex justify-center items-center">
              <Button variant="ghost" onClick={handleSubmit}>
                Send <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
        {/* <h1 className="text-5xl font-semibold">Contact</h1>
      <h2 className="text-2xl  mt-5 font-medium">
        Get In Touch.
      </h2>
      <div className="pt-10  ">
        <Input type="email" label="Email" labelPlacement="outside" />
      </div> */}
      </div>
    </>
  );
};

export default Contacts;
