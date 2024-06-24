import React from "react";
import { ContactForm } from "./contactForm";

export const ContactModal = () =>{
    return(
        <>
            <button type="button" className="btn btn-primary navbarBtnModal mt-3" data-bs-toggle="modal" data-bs-target="#contactModal">
            Contact Us
            </button>

            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModalLabel">Contact Us</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <p className="mb-3">
                            Whether you want to request a quote or have a question, you can do so
                            through this form.
                        </p>
                        <p className="text-muted mb-3">We answer on the same day.</p>
                            <ContactForm/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}