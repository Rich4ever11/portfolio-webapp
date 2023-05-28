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
                <h1 className="lg:text-7xl text-4xl font-bold text-white font-mono py-4">
                  Projects
                </h1>
                <div className="px-10">
                  <p className="md:text-lg text-sm font-thin">
                    I have an impressive portfolio of diverse projects that I
                    have successfully developed, completed, and continue to
                    enhance over time. As a dedicated professional, I am
                    committed to regularly updating this portfolio with new
                    projects and consistently improving existing ones. This
                    proactive approach reflects my drive for continuous growth
                    and my unwavering passion for delivering exceptional
                    results. I am excited to share my innovative projects with
                    you and discuss how my skills and experiences can contribute
                    to your organization's success
                  </p>
                </div>
                <div className="divider"></div>
                <div class="flex flex-wrap justify-items-center">
                  {projectList.map((project) => {
                    return (
                      <div className="flex justify-center">
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
