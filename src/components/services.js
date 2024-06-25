import React from "react";
import "../styles/services.css";
import { ContactBtn } from "./button";
import TypingEffect from './type';


export const ServicesCard = (props) => {
  return (
    <article className={`container-fluid services-card-article row col-11 mx-auto p-4 ${props.sameTwoCards ? "sameTwoCards": ""}`}>
      <div className={`col-12 ${props.image ? 'col-lg-6' : ''} sc-text-side`}>
        <header className="d-flex align-items-center">
          <i className={`fa-solid ${props.icon}`} style={{ backgroundColor: props.iconColor }}></i>
          <h6 className="mb-0 ms-3 fw-bold"><TypingEffect strings={[props.title]}/></h6>
        </header>
        <main>
          <h3 className="fw-bold my-5">
            <del>{props.deleted}</del> <strong>{props.description}</strong>
          </h3>
          <hr />
          <p className="fw-bold text-muted">What We Offer</p>
          <ul>
            <li><i className="fa-solid fa-square-check me-3"></i> {props.offerOne}</li>
            <li><i className="fa-solid fa-square-check me-3"></i> {props.offerTwo}</li>
            <li><i className="fa-solid fa-square-check me-3"></i> {props.OfferTree}</li>
          </ul>
        </main>
        <ContactBtn name="Get In Touch" />
      </div>
      {props.image && (
        <div className="col-12 col-md-12 col-lg-6 sc-image-side">
          <img src={props.image} alt={props.imageAlt} />
        </div>
      )}
    </article>
  );
};

export const Services = () => {
  return (
    <section id="services">
      <p className="category text-muted">SERVICES</p>
      <h2>What Problems We Solve</h2>
      <p className="services-description">
        At our company, we specialize in delivering<strong> top-notch web development,
        software solutions, regular updates, and comprehensive maintenance services.</strong>
        Our expert team ensures that your digital presence is always <strong> cutting-edge,
        efficient, and secure. </strong> With our regular updates and proactive maintenance,
        your operations will run smoothly and without interruption. Trust us to
        enhance your business with innovative and reliable technology solutions.
      </p>

      <ServicesCard
        title="Websites Development"
        icon="fa-code"
        deleted="We don't just build websites."
        description="We do create a professional presentation of your business in the digital world. Our responsive, user-friendly designs captivate your audience and enhance your online presence."
        offerOne="Custom Website Design"
        offerTwo=" Business Branding"
        OfferTree=" E-commerce Solutions"
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=2864&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="websites development"
        iconColor = "tomato"
      />

      <ServicesCard
        title="Software Development"
        icon="fa-code"
        description="Streamline your business operations with our custom software solutions. We develop efficient, scalable software tailored to meet your unique business needs."
        offerOne="Custom Software Design"
        offerTwo="Integration Services"
        OfferTree="Mobile App Development"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Software Development"
        iconColor = "greenyellow"
      />

      <div className="row col-11 mx-auto d-flex justify-content-around mt-4 same-cards-row">
        <ServicesCard
          title="Maintenance"
          icon="fa-tools"
          description="Keep your systems running smoothly with our comprehensive maintenance services. We ensure your digital infrastructure is always up-to-date and functioning optimally."
          offerOne="Regular System Updates"
          offerTwo="Performance Monitoring"
          OfferTree="Security Enhancements"
          sameTwoCards = {true}
          iconColor =  "violet"
        />
        <ServicesCard
          title="Updates"
          icon="fa-sync-alt"
          description="Stay ahead of the curve with our timely update services. We provide regular updates to ensure your systems are equipped with the latest features and security patches."
          offerOne="Feature Updates"
          offerTwo="Security Patches"
          OfferTree="Compatibility Improvements"
          sameTwoCards = {true}
          iconColor = "orange"
        />
      </div>
    </section>
  );
};
