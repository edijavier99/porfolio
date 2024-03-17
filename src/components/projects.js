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
      img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "SEO",
      description:
        "SEO strategies tailored to boost your online visibility and drive organic traffic to tour bussiness.",
      link: "",
      img: "https://images.pexels.com/photos/8068694/pexels-photo-8068694.jpeg?auto=compress&cs=tinysrgb&w=800",

    },
    {
      name: "Responsive Design",
      description: "Responsive design ensuring consistently optimal viewing experience across all devices.",
      link: "",
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: " Maintenance and Support",
      description: "Comprehensive maintenance and support services to keep your website running smoothly.",
      link: "",
      img: "https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-hombre-escritorio-trabajando-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
          <ServiceCard item ={item}/>
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
