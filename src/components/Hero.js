import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Hero() {
  return (
    <div id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("./static/herobg2.avif")`,
        }}
      >
        <div className="flex min-[1200px]:flex-row flex-col m-8">
          <div>
            <div className="lg:mx-2 flex justify-center">
              <img
                src="./static/hero4.jpg"
                alt="N/A"
                className="lg:max-w-md border-8 border-cyan-50/5 rounded-full transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 justify-center">
            <h2 className="lg:text-4xl text-3xl font-light text-sky-100 italic">
              Software Development & Cybersecurity
            </h2>
            <h1
              className="lg:text-[100px] sm:text-[75px] text-[70px] font-bold text-white font-mono italic"
              style={{ textShadow: "8px 8px 8px black" }}
            >
              Richard <span className="text-sky-200">Aja</span>
            </h1>

            <p className="py-4 md:text-xl text-md text-white font-thin">
              Welcome to my website! I started learning programming when I
              entered my second year of college. Since then, I have fallen in
              love with everything related to programming. My goal is to become
              a 10x developer and create software that one day will be used by
              millions. Here on my personal website, you will find the various
              experiences I’ve had and the projects I’ve built. I hope you find
              something that resonates with you and enjoy the overall look and
              feel. Cheers! 🥂
            </p>
            <div className="flex flex-row space-x-4">
              <div className="card-actions my-4">
                <button
                  className="btn btn-neutral-content h-12 w-32 text-xl font-semibold text-white italic border-2 border-white "
                  style={{ textShadow: "4px 4px 4px black" }}
                >
                  <a href="#contactme">Hire Me</a>
                </button>
              </div>
              <button className="">
                <a href="https://github.com/Rich4ever11">
                  <FaGithub
                    color="white"
                    size={42}
                    className="rounded-full transition ease-in-out delay-150 duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black"
                  />
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/richard-aja-9b0271228">
                  <BsLinkedin
                    color="white"
                    size={42}
                    className="transition ease-in-out delay-150 duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
