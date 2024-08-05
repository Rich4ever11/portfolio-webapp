import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectData from "../data/projects.json";

export default function Projects() {
  const projectList = projectData["projects"];

  return (
    <div id="projects">
      <div className="min-h-screen bg-black">
        <div className="w-full p-8">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="items-center text-center">
                <div className="divider my-10 py-10">
                  <h1 className="lg:text-7xl text-4xl font-bold text-white font-mono py-4">
                    PROJECTS
                  </h1>
                </div>
                <div className="flex flex-wrap justify-items-center">
                  {projectList.map((project, index) => {
                    return (
                      <div className="flex justify-center" key={index}>
                        <ProjectCard
                          projectBanner={project.projectBanner}
                          projectName={project.projectName}
                          vidLink={project.vidLink}
                          demoLink={project.demoLink}
                          githubLink={project.githubLink}
                          description={project.description}
                          languagesUsed={project.languagesUsed}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
