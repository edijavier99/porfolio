import React, { useState } from "react";
import "../styles/projects.css";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const showProjectInfo = (item) => {
    setSelectedProject(item);
  };

  const projectsInfo = [
    {
      name: "Website Design and Development",
      description:
        "App para mostrar la opinión de los usuarios sobre viajes, productos y espacios de ocio",
      link: "",
      img: "https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg",
    },
    {
      name: "SEO",
      description:
        "App para gestionar tus notas, tareas y proyectos. Todo en uno.",
      link: "",
      img: "https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_1280.jpg",
    },
    {
      name: "Responsive Design",
      description: "App de tienda e-commerce",
      link: "",
      img: "https://s3.amazonaws.com/www-inside-design/uploads/2018/02/responsive-web-square.jpg",
    },
    {
      name: " Maintenance and Support",
      description: "App de tienda e-commerce",
      link: "",
      img: "https://www.net948.com/wp-content/uploads/2023/02/mantenimiento-de-paginas-web-3.jpeg",
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
      <h1 className="projects">OUR SERVICES</h1>
      <div className="projects-board-inner">{showProjects()}</div>
    </section>
  );
};
