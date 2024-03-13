import React, { useState } from "react";
import "../styles/projects.css";
import { ServiceCard } from "./serviceCard";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const showProjectInfo = (item) => {
    setSelectedProject(item);
  };

  const projectsInfo = [
    {
      name: "Design and Development",
      description:
        "Creative and functional web design and development to enhance your online presence.",
      link: "",
      img: "https://cdn.pixabay.com/photo/2023/10/10/05/52/website-8305451_1280.jpg",
    },
    {
      name: "SEO",
      description:
        "SEO strategies tailored to boost your online visibility and drive organic traffic to tour bussiness.",
      link: "",
      img: "https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_1280.jpg",
    },
    {
      name: "Responsive Design",
      description: "Responsive design ensuring consistently optimal viewing experience across all devices.",
      link: "",
      img: "https://s3.amazonaws.com/www-inside-design/uploads/2018/02/responsive-web-square.jpg",
    },
    {
      name: " Maintenance and Support",
      description: "Comprehensive maintenance and support services to keep your website running smoothly.",
      link: "",
      img: "https://www.net948.com/wp-content/uploads/2023/02/mantenimiento-de-paginas-web-3.jpeg",
    },
  ];

  const showProjects = () => {
    return projectsInfo.map((item, index) => {
      return (
        <div className="project-item" key={index} onMouseOver={() => showProjectInfo(item)} onMouseOut={() => setSelectedProject(null)}>
          {/* <img
            className="project-img"
            src={item.img}
            alt={`${item.name}-img`}
          />
          {selectedProject && (
            <div className="project-name">
              {selectedProject.name}
            </div>
          )} */}
          <ServiceCard  item ={item}/>
        </div>
      );
    });
  };

  return (
    <section id="projects-board">
      <p className="projects"><strong>OUR</strong></p>
      <h1>FOCUS</h1>
      <div className="projects-board-inner">{showProjects()}</div>
    </section>
  );
};
