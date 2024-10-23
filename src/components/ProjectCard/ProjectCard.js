import React from "react";

export default function ProjectCard({
  projectBanner,
  projectName,
  vidLink,
  demoLink,
  githubLink,
  description,
  languagesUsed,
}) {
  return (
    <div className="p-2">
      <div
        // md:w-96 w-42
        className="rounded-lg bg-black hover:bg-slate-800 shadow-xl shadow-slate-800 transition ease-in-out delay-150 duration-300"
        style={{ width: "500px" }}
      >
        <div className="py-4 overflow-x-scroll">
          <h2 className="card-title md:text-4xl text-xl text-white font-thin divider divider-info px-2">
            {projectName}
          </h2>
        </div>
        <figure className="rounded-lg h-full w-full">
          <img src={projectBanner} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className="card-body">
          <p className="flex flex-col space-y-2 text-white text-md font-mono text-left">
            {vidLink ? <a href={vidLink}>Video Demo</a> : <></>}
            {demoLink ? <a href={demoLink}>Link To Web App</a> : <></>}
            {githubLink ? (
              <a href={githubLink}>Link To Github Repository</a>
            ) : (
              <></>
            )}
          </p>
          <div className="divider"></div>
          <p className="text-white font-thin">{description}</p>
          <div className="divider"></div>
          <div className="card-actions justify-end text-white">
            {languagesUsed.map((tool, index) => {
              return (
                <div className="badge badge-outline" key={index}>
                  {tool}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
