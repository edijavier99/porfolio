import React from "react";
import "../styles/contact.css"
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";


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
            <div></div>
            <main id="contact-body">
            
                <div className="left-side">
                    {/* <h2>Contact Information</h2>
                    <p>Merge digital innovation with your business vision</p>
                    <ul className="contact-channels">
                        <li> +34 631912885</li>
                        <li> edijavier10@gmail.com</li>
                        <li> London, UK </li>
                    </ul> */}
                </div>
                <form id="contact-form">
                    <div>
                        <label id="name-label" for="name">Your Name</label>
                        <input id="name" type="text" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <label for="email" id="email-label">Your Email</label>
                        <input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label for="subject" id="subject-label">Your Subject</label>
                        <input id="subject" placeholder="Subject" type="text" />
                    </div>
                    <textarea id="contact-message" rows={3} placeholder="Write here your message"></textarea>
                    <input type="submit"  id="contact-submit" value="Send Message" />
                </form>
            </main>
        </section>
    )
}