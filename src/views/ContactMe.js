import React, { useState } from "react";
import "../styles/contact.css"

export const ContactMe = () =>{
    const handleEmailClick = () => {
        window.location.href = "mailto:edijavier10@gmail.com";
    };
    
      const handleWhatsAppClick = () => {
        window.open("https://wa.me/34631912885", '_blank');
      };
    
      const handlePhoneCallClick = () => {
        window.location.href = "tel: +34 631912885";
      };

      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [validated, setValidated] = useState(false);
    
      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
    
    return(
        <section id="contact">
            <div id="contact-img-back">
                <h1 className="contact-out-title">CONTACT US</h1>
            </div>
            <header id="contact-header">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">Do you have any inquiries or need assistance? 
                Feel free to reach out to our customer support team. We're here to provide
                 you with personalized assistance and address any questions you may have.
                 </p>
            </header>
            <div className="contact-channels">
                <div className="channel left">
                    <i class="fas fa-mobile-alt"></i>
                    <h2>+34 631912885</h2>
                    <p className="text-center">Feel free to reach us directly through our 
                    mobile number for a quick response.</p>
                    <button className="btn cnt-btn" onClick={handlePhoneCallClick}> Call</button>
                </div>
                <div className="channel medium">
                    <i class="fas fa-at"></i>
                    <h2>edijavier10@gmail.com</h2>
                    <p className="text-center">If you have any questions or concerns, 
                    don't hesitate to email us, and we'll get back to you as soon as possible.</p>
                    <button className="btn cnt-btn" onClick={handleEmailClick}> Email</button>
                </div>
                <div className="channel right">
                    <i class="fab fa-whatsapp"></i>
                    <h2>+34 631912885</h2>
                    <p className="text-center">We're available on WhatsApp to provide
                     personalized assistance or answer any questions you may have.</p>
                     <button className="btn cnt-btn" onClick={handleWhatsAppClick}> WhatsApp</button>
                </div>
            </div>
            <div id="contact-body" className="d-flex flex-row col-md-10 p-3">
                <div className="col-ms-12 col-md-5 col-lg-5 d-flex flex-column align-items-center justify-content-center ">
                    <h3 className="contact-heading"> Feel free to reach out <br/> 
                    further information by <br/> 
                    completing the <span className="text-primary">contact</span> form.</h3>
                    <p className="text-muted"><i className="fas fa-user-clock me-2"></i>No more than 2 working days since receiving your request.</p>
                </div>
                <div className="col-ms-12 col-md-7 col-lg-7">
                    <form id="contact-form" className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label"><strong>First Name</strong></label>
                                <input type="text" className="form-control" id="firstName" placeholder="Type your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                <div className="invalid-feedback">
                                Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label"><strong>Last Name</strong></label>
                                <input type="text" className="form-control" id="lastName" placeholder="Type your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                <div className="invalid-feedback">
                                Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <label htmlFor="contact-message" className="form-label"><strong>Message</strong></label>
                            <textarea id="contact-message"  className="form-control" rows={3} placeholder="Write here your message" required></textarea>
                            <div className="invalid-feedback">
                                Valid message is required.
                                </div>
                            <hr className="mt-5" />
                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}




