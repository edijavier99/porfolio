import React from "react";
import "../styles/stack.css";

export const Stack = () => {
  return (
    <>
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#stackCollapse" role="button" aria-expanded="false" aria-controls="stackCollapse">
          Technology We Use
        </a>
      </p>
      <div className="collapse" id="stackCollapse">
        <div className="card card-body">
          <p>
            We use the latest technology to develop our solutions. It is important to understand
            how it works, so we divided it into different pieces that we need to create and succeed
            in the creation of software.
          </p>
          
          <div  id="accordionStack">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingBackend">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBackend" aria-expanded="true" aria-controls="collapseBackend">
                  Backend
                </button>
              </h2>
              <div id="collapseBackend" className="accordion-collapse collapse show" aria-labelledby="headingBackend" data-bs-parent="#accordionStack">
                <div className="accordion-body">
                  <p className="text-muted">
                    The backend is where the core logic of our applications resides. It's responsible for
                    processing requests, performing calculations, accessing databases, and business logic.
                    Our backend technologies ensure robust performance, scalability, and security.
                  </p>
                  <div className="mb-3">
                    <span className="badge rounded-pill bg-primary me-2">Python</span>
                    <span className="badge rounded-pill bg-primary me-2">Flask</span>
                    <span className="badge rounded-pill bg-primary me-2">Django</span>
                    <span className="badge rounded-pill bg-primary me-2">Node.js</span>
                    <span className="badge rounded-pill bg-primary me-2">Express</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFrontend">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFrontend" aria-expanded="false" aria-controls="collapseFrontend">
                  Frontend
                </button>
              </h2>
              <div id="collapseFrontend" className="accordion-collapse collapse" aria-labelledby="headingFrontend" data-bs-parent="#accordionStack">
                <div className="accordion-body">
                  <p className="text-muted">
                    The frontend is the user interface of our applications, where users interact with our
                    products. We ensure that our frontends are responsive, user-friendly, and visually
                    appealing. Using modern frameworks and libraries, we create seamless and dynamic user
                    experiences.
                  </p>
                  <div className="mb-3">
                    <span className="badge rounded-pill bg-primary me-2">React.js</span>
                    <span className="badge rounded-pill bg-primary me-2">Bootstrap 5</span>
                    <span className="badge rounded-pill bg-primary me-2">Tailwind CSS</span>
                    <span className="badge rounded-pill bg-primary me-2">CSS 3</span>
                    <span className="badge rounded-pill bg-primary me-2">HTML 5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingDatabase">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatabase" aria-expanded="false" aria-controls="collapseDatabase">
                  Database
                </button>
              </h2>
              <div id="collapseDatabase" className="accordion-collapse collapse" aria-labelledby="headingDatabase" data-bs-parent="#accordionStack">
                <div className="accordion-body">
                  <p className="text-muted">
                    Databases are the backbone of our applications, where we store and manage data
                    efficiently and securely. We use relational databases for structured data storage, ensuring
                    data integrity, quick access, and scalability to meet the growing demands of businesses.
                  </p>
                  <div className="mb-3">
                    <span className="badge rounded-pill bg-primary me-2">MySQL</span>
                    <span className="badge rounded-pill bg-primary me-2">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingDeployment">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDeployment" aria-expanded="false" aria-controls="collapseDeployment">
                  Deployment
                </button>
              </h2>
              <div id="collapseDeployment" className="accordion-collapse collapse" aria-labelledby="headingDeployment" data-bs-parent="#accordionStack">
                <div className="accordion-body">
                  <p className="text-muted">
                    Deployment involves making our applications available for use. We leverage cloud
                    services and containerization technologies to ensure that our applications are highly
                    available, scalable, and easy to manage. Our deployment strategies ensure that your
                    applications run smoothly and efficiently in production environments.
                  </p>
                  <div className="mb-3">
                    <span className="badge rounded-pill bg-primary me-2">Cloud</span>
                    <span className="badge rounded-pill bg-primary me-2">Docker</span>
                    <span className="badge rounded-pill bg-primary me-2">AWS ECR</span>
                    <span className="badge rounded-pill bg-primary me-2">AWS EC2</span>
                    <span className="badge rounded-pill bg-primary me-2">AWS ECS</span>
                    <span className="badge rounded-pill bg-primary me-2">Amazon RDS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
