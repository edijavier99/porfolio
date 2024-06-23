import React, { useState } from "react";
import "../styles/faq.css";
import dots from "../img/dots.png";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of software development services, including mobile applications, enterprise management systems, and custom web platforms."
    },
    {
        question: "What is the project delivery time?",
        answer: "The project delivery time varies depending on the scope and complexity of the project. Generally, our projects take between 3 and 6 months to complete."
    },
    {
        question: "How do you guarantee the quality of your products?",
        answer: "We use agile methodologies and continuous testing throughout the development process to ensure the highest quality in our products."
    },
    {
        question: "Do you offer support after delivery?",
        answer: "Yes, we offer continuous support and maintenance after delivery to ensure that our clients are completely satisfied with our services."
    }
];

const showQuestions = () => {
    return faqData.map((item, index) => {
        const isFirst = index === 0;
        return (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading-${index}`}>
                    <button
                        className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded={isFirst ? 'true' : 'false'}
                        aria-controls={`collapse-${index}`}>
                        {item.question}
                    </button>
                </h2>
                <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                    aria-labelledby={`heading-${index}`}
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    });
};

export const FAQ = () => {
    const initialFormData = { name: '', email: '', message: '' };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
        console.log('Form data submitted:', formData);

        // Resetear los campos del formulario
        setFormData(initialFormData);
    };

    return (
        <section id="faq-board">
            <header className="row mx-0 px-0">
                <div className="col-md-12 section-name d-flex flex-column align-items-center">
                    <h4 className="category">SUPPORT</h4>
                    <h1 className="text-center">Everything You Need To Know</h1>
                    <p className="text-muted text-center">Need something cleared up? Here are our most frequently asked questions.</p>
                </div>
            </header>
            <main className="row mx-0 px-0 faq-body">
                <div className="accordion col-11 col-md-7 col-lg-7 mx-auto my-2" id="accordionExample">
                    {showQuestions()}
                </div>
            </main>
            {/* <div className="col-md-6 faq-body-left ">
                    <h4>Contact Us</h4>
                    <p>Contact us for more information or to request a quote for your next project. We pride ourselves on our quick response time, ensuring that all inquiries are addressed on the same day.</p>
                    <form onSubmit={handleSubmit} className="p-4 rounded contact-form" id="contact">
                        <div className="form-group form-control">
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className="form-group form-control">
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
                            <label htmlFor="email">Email address:</label>
                        </div>
                        <div className="form-group form-control">
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required placeholder=" "></textarea>
                            <label htmlFor="message">Message:</label>
                        </div>
                        <button type="submit" className="btn btn-primary col-5 mx-auto mt-1">Submit</button>
                    </form>
                </div> */}
        </section>
    );
};
