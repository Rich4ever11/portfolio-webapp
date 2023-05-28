import React from "react";
import Experience from "./AboutComponents/Experience";
import About from "./AboutComponents/About";

export default function Body() {
  return (
    <div id="aboutme">
      <div className="min-h-screen bg-black">
        <div className="flex flex-row-reverse">
          <figure className="bg-black hidden md:block h-2/4 w-2/4">
            <img
              src="./static/hero.jpg"
              alt="Album"
              className="rounded-full p-6"
            />
          </figure>
          <div className="md:w-10/12 w-full p-8">
            <div className="card lg:card-side bg-base-100 shadow-xl ">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <About />
                  <div className="divider"></div>
                  <Experience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
