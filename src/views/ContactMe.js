import React from "react";
import "../styles/contact.css"

export const ContactMe = () =>{
    return(
        <section id="contact">
            <header id="contact-header">
                <h2>Get In Touch</h2>
                <p>n a world where technology is evolving constantly,
                    we are here to help you keep up and grow your business. 
                    Our commitment is to 
                    merge digital innovation with your business vision
                    to build a</p>
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
                    <textarea id="contact-message" rows={5} placeholder="Write here your message"></textarea>
                    <input type="submit"  id="contact-submit" value="Send Message" />
                </form>
            </main>
        </section>
    )
}