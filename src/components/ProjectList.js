import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // Debugging log to ensure projects data is being passed

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id} // Use the project's unique id as the key
            name={project.name} // Pass project name
            about={project.about} // Pass project description
            technologies={project.technologies} // Pass the technologies array
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
