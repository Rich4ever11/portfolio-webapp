import React from "react";
import Experience from "./AboutComponents/Experience";
import About from "./AboutComponents/About";
import Skills from "./AboutComponents/Skills";
// import Certificates from "./AboutComponents/Certificates";

export default function Body() {
  return (
    <div id="aboutme">
      <div className="min-h-screen bg-black py-2">
        <div className="flex flex-row-reverse">
          <figure className="bg-black hidden md:block h-2/4 w-2/4 m-4">
            <img
              src="./static/hero.jpg"
              alt="Album"
              className="rounded-full p-2 border-8 border-sky-200 transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/50"
            />
            <Skills />
          </figure>
          <div className="md:w-10/12 w-full p-8">
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <Experience />
                  <About />
                  {/* <Certificates /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
