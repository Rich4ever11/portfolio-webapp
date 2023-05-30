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
          <div className="mx-2 py-4 px-4 flex justify-center">
            <img
              src="./static/hero4.jpg"
              alt="N/A"
              className="lg:max-w-md sm:max-lg max-base rounded-xl shadow-lg shadow-black"
            />
          </div>
          <div className="flex flex-col px-4">
            <h2 className="lg:text-4xl text-3xl font-light text-sky-100">
              Software Development & Cybersecurity
            </h2>
            <h1 className="lg:text-8xl text-7xl font-bold text-white font-mono">
              Hi, I'm <br className="block md:hidden" />
              <span className="relative">
                <span className="text-sky-200">Richard A.</span>
              </span>
            </h1>

            <p className="py-4 md:text-lg text-xs text-white font-thin">
              Welcome to my website! Here, you will encounter a passionate
              individual fully immersed in the captivating realms of software
              development and cybersecurity. With an unyielding curiosity and an
              unwavering commitment to remain at the vanguard of technological
              advancements, I enthusiastically embark on a quest to explore,
              share, and collaborate on state-of-the-art tools, techniques, and
              strategies that forge a secure and innovative digital landscape.
              Whether you seek profound insights, practical advice, or a
              fruitful partnership, I extend a warm invitation to join me on
              this exhilarating journey as we navigate the ever-evolving realm
              of software development and cybersecurity hand in hand.
            </p>
            <div className="flex flex-row space-x-4">
              <div className="card-actions my-4">
                <button className="btn btn-neutral-content h-12 w-32 text-xl font-light">
                  <a href="#contactme">Hire Me</a>
                </button>
              </div>
              <button className="">
                <a href="https://github.com/Rich4ever11">
                  <FaGithub color="white" size={42} />
                </a>
              </button>
              <button className="">
                <a href="https://www.linkedin.com/in/richard-aja-9b0271228">
                  <BsLinkedin color="white" size={42} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
