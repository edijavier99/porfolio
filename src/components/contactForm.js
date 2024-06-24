import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [showAlert, setShowAlert] = useState(false)
    const form = useRef(); 
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE , form.current, process.env.REACT_APP_EMAIL_PUBLIC_ID)
        .then(
            () => {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2500);
            setFormData({
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            console.log('FAILED...', error); // Muestra el objeto de error completo
            }
        );

    };

  return (
    <div className="contact-form-container">
      <form className="contactForm" ref={form} onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <label htmlFor="nameInput">Name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="surnameInput"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Surname"
                required
              />
              <label htmlFor="surnameInput">Surname</label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
              <label htmlFor="emailInput">Email</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="companyInput"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
              <label htmlFor="companyInput">Company Name</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="messageInput"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <label htmlFor="messageInput">Message</label>
        </div>
        <button className="btn btn-primary w-100 my-4 py-2" type="submit">
          Submit
        </button>
        <p className="mt-3 mb-3 text-body-secondary">
          © 2017–2024 wecoded.co.uk
        </p>
        </form>
        {showAlert && <div className="alert alert-success" role="alert">
            The form was submitted successfully! Thank you.
        </div>
        }
    </div>
  );
};
