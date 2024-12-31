import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-black/40 text-neutral-content ">
      <div className="items-center grid-flow-col">
        <a
          href="#home"
          className="btn btn-ghost normal-case md:text-5xl text-4xl font-semibold font-mono text-white italic"
          style={{ textShadow: "8px 8px 8px black" }}
        >
          Rich.io
        </a>
        <p className="text-white font-thin italic">
          Copyright © 2024 - All right reserved
        </p>
      </div>
      <div className="md:grid-flow-col gap-4 flex place-self-center justify-self-end">
        <button
          className="btn btn-neutral-content h-12 w-42 text-xl font-semibold text-white italic border-2 border-white"
          style={{ textShadow: "8px 8px 8px black" }}
        >
          <a href="https://github.com/Rich4ever11/portfolio-webapp">
            View Code
          </a>
        </button>
        <button className="">
          <a href="https://github.com/Rich4ever11">
            <FaGithub size={42} />
          </a>
        </button>
        <button className="">
          <a href="https://www.linkedin.com/in/richard-aja-9b0271228">
            <BsLinkedin size={42} />
          </a>
        </button>
      </div>
    </footer>
  );
}
