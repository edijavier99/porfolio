import React, { useState } from "react";
import "../styles/projects.css";
import img1 from "../img/brainnover.jpeg";
import img2 from "../img/Ecommerce.jpg";
import img3 from "../img/tmw.jpg";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const showProjectInfo = (item) => {
    setSelectedProject(item);
  };

  const projectsInfo = [
    {
      name: "trust my word",
      description:
        "App para mostrar la opinión de los usuarios sobre viajes, productos y espacios de ocio",
      link: "",
      img: img3,
    },
    {
      name: "brainnover",
      description:
        "App para gestionar tus notas, tareas y proyectos. Todo en uno.",
      link: "",
      img: img1,
    },
    {
      name: "Ecommerce",
      description: "App de tienda e-commerce",
      link: "",
      img: img2,
    },
  ];

  const showProjects = () => {
    return projectsInfo.map((item, index) => {
      return (
        <div className="project-item" key={index} onMouseOver={() => showProjectInfo(item)} onMouseOut={() => setSelectedProject(null)}>
          <img
            className="project-img"
            src={item.img}
            alt={`${item.name}-img`}
          />
          {selectedProject && (
            <div className="project-name">
              {selectedProject.name}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section id="projects-board">
      <div className="projects-board-inner">{showProjects()}</div>
    </section>
  );
};
