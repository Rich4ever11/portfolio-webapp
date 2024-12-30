import React from "react";
import experience from "../../data/experience.json";

export default function Experience() {
  const experienceList = experience["experiences"];

  return (
    <div>
      <img
        src="./static/hero.jpg"
        alt="Album"
        className="rounded-full h-auto w-auto md:hidden p-2 border-8 border-sky-200 transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/50 mb-6"
      />

      <div className="divider my-10 py-10">
        <h1
          className="lg:text-7xl text-4xl font-thin text-sky-100 italic font-mono underline"
          style={{ textShadow: "8px 8px 8px black" }}
        >
          EXPERIENCE
        </h1>
      </div>
      <div
        className="overflow-y-auto rounded-md p-2"
        style={{ height: "750px" }}
      >
        <div className="flex flex-col font-mono">
          {experienceList.map((experience, index) => {
            return (
              <div
                tabIndex={index}
                key={index}
                className="collapse collapse-open border border-base-300 bg-black rounded-box my-2"
              >
                <div className="collapse-title text-xl font-medium px-0 pt-8">
                  <div
                    className="font-mono text-cyan-50 text-3xl font-semibold italic"
                    style={{ textShadow: "4px 4px 4px #00293e" }}
                  >
                    {experience.location}
                  </div>
                  <div className="text-white">{experience.position}</div>
                </div>

                <div className="collapse-content mx-10">
                  <div className="avatar py-6">
                    <div className="ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
                      <img src={experience.logo} alt="" />
                    </div>
                  </div>
                  {
                    <>
                      <p className="text-sky-100 italic">
                        <span className="text-white">Location</span>:{" "}
                        {experience.area}
                      </p>
                      <p className="text-sky-100 italic">
                        <span className="text-white">Employment Type</span>:{" "}
                        {experience.employmentType}
                      </p>
                      <p className="text-sky-100 italic">
                        <span className="text-white">Location Type</span>:{" "}
                        {experience.locationType}
                      </p>
                      <p className="text-sky-100 italic">
                        <span className="text-white">Time Spent</span>:{" "}
                        {experience.timeTotal}
                      </p>
                    </>
                  }
                  <div className="divider"></div>
                  <ul className="list-disc">
                    {experience.duties.map((duty, index) => {
                      return (
                        <li className="py-2" key={index}>
                          {duty}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
