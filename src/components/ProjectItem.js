import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* Render a <span> for each technology in the array */}
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
