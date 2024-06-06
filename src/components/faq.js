import React, { useState } from "react";
import "../styles/faq.css";

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
        return (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading-${index}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`collapse-${index}`}>
                        {item.question}
                    </button>
                </h2>
                <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {item.answer}
                    </div>
                </div>
            </div>
        );
    });
};

export const FAQ = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log(formData);
    };

    return (
        <section id="faq-board">
            <header className="row mx-0 px-0">
                <div className="col-md-12 section-name d-flex flex-column align-items-center">
                    <h4>SUPPORT</h4>
                    <h1 className="text-center">Everything You Need To Know</h1>
                    <p className="text-muted text-center">Need something cleared up? Here are our most frequently asked questions.</p>
                </div>
            </header>
            <main className="row mx-0 px-0 faq-body">
                <div className="col-md-4 faq-body-left ">
                <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                </div>
                <div className="col-md-8">
                    <div className="col-md-8 mx-auto my-2">
                        <div className="accordion" id="accordionExample">
                            {showQuestions()}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
