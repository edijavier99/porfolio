import React from "react";
import "../styles/services.css";

export const Services = () => {
  return (
    <section id="services" className="container-fluid">
      <p className="category text-muted">SERVICES</p>
      <h2>What Services We Provide</h2>
      <p className="services-description text-muted">At our company, we specialize in delivering<strong> top-notch web development, 
        software solutions, regular updates, and comprehensive maintenance services.</strong>
         Our expert team ensures that your digital presence is always <strong> cutting-edge, 
         efficient, and secure. </strong> With our regular updates and proactive maintenance, 
         your operations will run smoothly and without interruption. Trust us to 
         enhance your business with innovative and reliable technology solutions.</p>
      <div className="pill-container">
        <div className="pill">
          <h1>Web Development</h1>
          <div className="icon-container">
            {/* <i className="fab fa-chrome mb-4"></i> */}
            <img alt="" src="https://media-public.canva.com/48ulE/MAFrTN48ulE/1/s.png" />
          </div>
          <p>
            Our web development services provide cutting-edge solutions to create responsive and user-friendly websites. We ensure your online presence is impactful and engaging for your audience.
          </p>
          <div className=" services-btn-card">
              <div className="services-card-inner">
              </div>
          </div>
          
        </div>
        <div className="pill">
          <h1>Software Solutions</h1>
          <div className="icon-container">
            {/* <i className="fa-solid fa-gear"></i> */}
            <img alt="" src="https://media-public.canva.com/LY9qk/MAFfOTLY9qk/1/tl.png" />
          </div>
          <p>
            Our software solutions cater to your specific needs, providing efficient and effective tools to streamline your operations. From custom software development to off-the-shelf solutions, we have you covered.
          </p>
          <div className=" services-btn-card">
              <div className="services-card-inner">
              </div>
          </div>
          
        </div>
        <div className="pill">
          <h1>Regular Updates</h1>
          <div className="icon-container">
            {/* <i className="fa-solid fa-circle-up mb-4"></i> */}
            <img alt="" src="https://media-public.canva.com/fFYoA/MAFRYDfFYoA/1/tl.png" />
          </div>
          <p>
            Our regular updates ensure that your digital assets are always up-to-date with the latest features and security patches. Stay ahead of the curve with our proactive approach to maintenance and updates.
          </p>
          <div className=" services-btn-card">
              <div className="services-card-inner">
              </div>
          </div>
          
        </div>
        <div className="pill">
            <h1>Maintenance</h1>
            <div className="icon-container">
                {/* <i class="fa-solid fa-toolbox"></i> */}
                <img alt="" src="https://media-public.canva.com/d6qv0/MAFSQ1d6qv0/1/tl.png" />
            </div>
            <p>
              Our comprehensive maintenance services keep your digital infrastructure running smoothly and efficiently. From server maintenance to bug fixes, we handle it all so you can focus on your core business.
            </p>
            <div className=" services-btn-card">
                <div className="services-card-inner">
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
