import React from "react";
import "../styles/services.css";

export const Services = () => {
  return (
    <section id="services" className="container-fluid">
      <p className="category text-muted">SERVICES</p>
      <h2>What Services We Provide</h2>
      <p className="services-description text-muted">At our company, we specialize in delivering top-notch web development, 
        software solutions, regular updates, and comprehensive maintenance services.
         Our expert team ensures that your digital presence is always cutting-edge, 
         efficient, and secure. With our regular updates and proactive maintenance, 
         your operations will run smoothly and without interruption. Trust us to 
         enhance your business with innovative and reliable technology solutions.</p>
      <div className="pill-container">
        <div className="pill">
          <i className="fab fa-chrome mb-4"></i>
          <h1>Web</h1>
          <p>
            Our web development services provide cutting-edge solutions to create responsive and user-friendly websites. We ensure your online presence is impactful and engaging for your audience.
          </p>
          <button className="btn btn-primary rounded-pill">Learn more </button>
        </div>
        <div className="pill">
          <i className="fab fa-chrome mb-4"></i>
          <h1>Software</h1>
          <p>
            We offer comprehensive software development services tailored to meet your business needs. Our team delivers robust and scalable software solutions to enhance your operational efficiency.
          </p>
          <button className="btn btn-primary rounded-pill">Learn more </button>

        </div>
        <div className="pill">
          <i className="fab fa-chrome mb-4"></i>
          <h1>Updates</h1>
          <p>
            Stay ahead with our regular updates and maintenance services. We ensure your software and applications are always up-to-date with the latest features and security enhancements.
          </p>
          <button className="btn btn-primary rounded-pill">Learn more </button>

        </div>
        <div className="pill">
          <i className="fab fa-chrome mb-4"></i>
          <h1>Maintenance</h1>
          <p>
            Our maintenance services guarantee the smooth running of your systems. We proactively monitor and resolve issues to prevent downtime and keep your business operations uninterrupted.
          </p>
          <button className="btn btn-primary rounded-pill">Learn more </button>

        </div>
      </div>
    </section>
  );
};
