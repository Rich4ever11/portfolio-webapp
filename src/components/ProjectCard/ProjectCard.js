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
      <div className="card rounded-lg md:w-96 w-42 bg-black hover:bg-slate-800 shadow-xl shadow-slate-800">
        <figure className="rounded-lg">
          <img src={projectBanner} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-2xl text-lg font-mono text-white">
            {projectName}
          </h2>
          <p className="flex flex-col space-y-2 text-white text-md font-mono text-left">
            <a href={vidLink}>Video Demo</a>
            <a href={demoLink}>Link To Web App</a>
            <a href={githubLink}>Link To Github Repository</a>
          </p>
          <div className="divider"></div>
          <p className="text-white font-thin">{description}</p>
          <div className="divider"></div>
          <div className="card-actions justify-end text-white">
            {languagesUsed.map((tool) => {
              return <div className="badge badge-outline">{tool}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
