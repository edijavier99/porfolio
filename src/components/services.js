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
      
      <div id="first-service-article" className="container-fluid">
          <div className="row col-11 mx-auto service-article p-4">
              <div className="col-12 col-md-6 col-lg-6">
                <header className="d-flex align-items-center">
                  <i className="fa-solid fa-code"></i>
                  <h6 className="mb-0 ms-3 fw-bold">Websites Development</h6>
                </header>
                <main>
                    <h3 className="fw-bold my-5">
                    <del>We don't just build websites.</del> <strong> We do create a professional presentation of your business in the digital world. Our responsive, user-friendly designs captivate your audience and enhance your online presence.</strong>
                    </h3>
                    <hr/>
                    <p className="fw-bold text-muted">What We Offer</p>
                    <ul>
                      <li><i className="fa-solid fa-square-check me-3"></i> Custom Website Design</li>
                      <li><i className="fa-solid fa-square-check me-3"></i> Business Branding</li>
                      <li><i className="fa-solid fa-square-check me-3"></i> E-commerce Solutions</li>
                    </ul>
                </main>
                <button className="btn btn-primary my-3">Get In Touch</button>
              </div>
              <div className="col-12 col-md-6 col-lg-6 article-img-container">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Websites Development"/>
              </div>
          </div>
      </div>

      <div id="second-service-article" className="container-fluid mt-4">
          <div className="row col-11 mx-auto service-article-two p-4">
              <div className="col-12 col-md-6 col-lg-6 article-img-container-two">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Software Development"/>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <header className="d-flex align-items-center">
                  <i className="fa-solid fa-code"></i>
                  <h6 className="mb-0 ms-3 fw-bold">Software Development</h6>
                </header>
                <main>
                    <h3 className="fw-bold my-5">
                      Streamline your business operations with our custom software solutions. We develop efficient, scalable software tailored to meet your unique business needs.
                    </h3>
                    <hr/>
                    <p className="fw-bold text-muted">What We Offer</p>
                    <ul>
                      <li><i className="fa-solid fa-square-check me-3"></i> Custom Software Design</li>
                      <li><i className="fa-solid fa-square-check me-3"></i> Integration Services</li>
                      <li><i className="fa-solid fa-square-check me-3"></i> Mobile App Development</li>
                    </ul>
                </main>
                <button className="btn btn-primary my-3">Get In Touch</button>
              </div>
          </div>
      </div>

      <div className="row col-11 mx-auto d-flex justify-content-around mt-4 same-cards-row">
        <div className="two-same-cards">
            <header className="d-flex align-items-center">
                <i className="fa-solid fa-tools"></i>
                <h6 className="mb-0 ms-3 fw-bold">Maintenance</h6>
            </header>
            <main>
                <h3 className="fw-bold my-5">
                    Keep your systems running smoothly with our comprehensive maintenance services. We ensure your digital infrastructure is always up-to-date and functioning optimally.
                </h3>
                <hr/>
                <p className="fw-bold text-muted">What We Offer</p>
                <ul>
                    <li><i className="fa-solid fa-square-check me-3"></i> Regular System Updates</li>
                    <li><i className="fa-solid fa-square-check me-3"></i> Performance Monitoring</li>
                    <li><i className="fa-solid fa-square-check me-3"></i> Security Enhancements</li>
                </ul>
            </main>
            <button className="btn btn-primary my-3">Get In Touch</button>
            {/* <div className="same-card-img-container">
              <img src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div> */}
        </div>
        <div className="two-same-cards">
            <header className="d-flex align-items-center">
                <i className="fa-solid fa-sync-alt"></i>
                <h6 className="mb-0 ms-3 fw-bold">Updates</h6>
            </header>
            <main>
                <h3 className="fw-bold my-5">
                    Stay ahead of the curve with our timely update services. We provide regular updates to ensure your systems are equipped with the latest features and security patches.
                </h3>
                <hr/>
                <p className="fw-bold text-muted">What We Offer</p>
                <ul>
                    <li><i className="fa-solid fa-square-check me-3"></i> Feature Updates</li>
                    <li><i className="fa-solid fa-square-check me-3"></i> Security Patches</li>
                    <li><i className="fa-solid fa-square-check me-3"></i> Compatibility Improvements</li>
                </ul>
            </main>
            <button className="btn btn-primary my-3">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};
