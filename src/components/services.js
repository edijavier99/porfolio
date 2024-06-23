import React, { useState } from "react";
import "../styles/services.css";

export const Services = () => {
  return (
    <section id="services">
      <p className="category text-muted">SERVICES</p>
      <h2>What Problems We Solve</h2>
      <p className="services-description text-muted">At our company, we specialize in delivering<strong> top-notch web development, 
        software solutions, regular updates, and comprehensive maintenance services.</strong>
         Our expert team ensures that your digital presence is always <strong> cutting-edge, 
         efficient, and secure. </strong> With our regular updates and proactive maintenance, 
         your operations will run smoothly and without interruption. Trust us to 
         enhance your business with innovative and reliable technology solutions.</p>
      
      <div id="first-service-article" className="container-fluid ">
          <div className="row col-10 mx-auto service-article p-4 ">
              <div className="col-12 col-md-6 col-lg-6">
                <header className="d-flex align-items-center">
                  <i class="fa-solid fa-code"></i>
                  <h6 className="mb-0 ms-3 fw-bold">Websites Development</h6>
                </header>
                <main>
                    <h3 className="fw-bold my-5">
                    Our web development services provide cutting-edge solutions to 
                    create responsive and user-friendly websites. We ensure your
                     online presence is impactful and engaging for your audience.
                    </h3>
                    <hr/>
                    <p className="fw-bold text-muted">Main expecifications</p>
                    <ul>
                      <li> <i class="fa-solid fa-square-check me-3"></i> Website Desing</li>
                      <li> <i class="fa-solid fa-square-check me-3" ></i> Bussines Branding</li>
                      <li> <i class="fa-solid fa-square-check me-3"></i> Website Desing</li>
                    </ul>
                </main>
                <button className="btn btn-primary my-3">Get In Touch</button>
              </div>
              <div className="col-12 col-md-6 col-lg-6 article-img-container">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
          </div>
      </div>

      <div id="first-service-article" className="container-fluid mt-4">
          <div className="row col-10 mx-auto service-article-two p-4 ">
          <div className="col-12 col-md-6 col-lg-6 article-img-container">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <header className="d-flex align-items-center">
                  <i class="fa-solid fa-code"></i>
                  <h6 className="mb-0 ms-3 fw-bold">Software Development</h6>
                </header>
                <main>
                    <h3 className="fw-bold my-5">
                    Our web development services provide cutting-edge solutions to 
                    create responsive and user-friendly websites. We ensure your
                     online presence is impactful and engaging for your audience.
                    </h3>
                    <hr/>
                    <p className="fw-bold text-muted">Main expecifications</p>
                    <ul>
                      <li> <i class="fa-solid fa-square-check me-3"></i> Website Desing</li>
                      <li> <i class="fa-solid fa-square-check me-3" ></i> Bussines Branding</li>
                      <li> <i class="fa-solid fa-square-check me-3"></i> Website Desing</li>
                    </ul>
                </main>
                <button className="btn btn-primary my-3">Get In Touch</button>
              </div>
          </div>
      </div>
    </section>
  );
};
