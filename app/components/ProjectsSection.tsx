import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "",
    tag: ["All", "Full"],
  },
  {
    id: 1,
    title: "Project 2",
    description: "Project 2 description",
    image: "",
    tag: ["All", "Web"],
  },
  {
    id: 1,
    title: "Project 2",
    description: "Project 1 description",
    image: "",
    tag: ["All", "Web"],
  },
];
const ProjectsSection = () => {
  return (
    <div>
      <h2>ProjectsSection</h2>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
