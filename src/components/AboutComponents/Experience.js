import React from "react";
import experience from "../../data/experience.json";

export default function Experience() {
  const experienceList = experience["experiences"];

  return (
    <div>
      <h1 className="lg:text-7xl text-4xl font-bold text-sky-200 font-mono">
        Experience
      </h1>
      <p className="card-title py-6 md:text-lg text-sm font-thin">
        Allow me to present a comprehensive compilation of my past work
        experiences, where I have consistently honed and enhanced a diverse
        range of skills. These opportunities have not only strengthened my
        communication prowess but have also propelled my development skills to
        new heights, among various other invaluable accomplishments
      </p>
      <div className="flex flex-col space-x-4 font-mono">
        {experienceList.map((experience) => {
          return (
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                <span className="text-white">{experience.position}</span> -{" "}
                {experience.location}
              </div>
              <div className="collapse-content">
                {
                  <>
                    <p className="text-sky-100">
                      <span className="text-white">Location</span>:{" "}
                      {experience.area}
                    </p>
                    <p className="text-sky-100">
                      <span className="text-white">Employment Type</span>:{" "}
                      {experience.employmentType}
                    </p>
                    <p className="text-sky-100">
                      <span className="text-white">Location Type</span>:{" "}
                      {experience.locationType}
                    </p>
                    <p className="text-sky-100">
                      <span className="text-white">Time Spent</span>:{" "}
                      {experience.timeTotal}
                    </p>
                  </>
                }
                <div className="divider"></div>
                <ul class="list-disc">
                  {experience.duties.map((duty) => {
                    return <li className="py-2">{duty}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
