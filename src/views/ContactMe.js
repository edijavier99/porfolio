import React from "react";
import "../styles/contact.css"


export const ContactMe = () =>{
    return(
        <section id="contact">
            <header id="contact-header">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">Do you have any inquiries or need assistance? 
                Feel free to reach out to our customer support team. We're here to provide
                 you with personalized assistance and address any questions you may have.
                 </p>
            </header>
            <main id="contact-body">
                <div className="left-side">
                    <h2>Contact Information</h2>
                    <p>Merge digital innovation with your business vision</p>
                    <ul className="contact-channels">
                        <li> +34 631912885</li>
                        <li> edijavier10@gmail.com</li>
                        <li> London, UK </li>
                    </ul>
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