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
                <div className="col-md-4 faq-body-left">
                    <div className="w-75">
                        <h3>Any Questions?</h3>
                        <h3>We Got You.</h3>
                        <p className="text-muted">If you can't find what you're looking for, feel free to contact us for further assistance.</p>
                        <a href="/contact-me" className="contact-link">Contact Now</a>
                    </div>
                </div>
                <div className="col-md-8">
                    <h2 className="text-center">Frequently Asked Questions</h2>
                    <p className="text-center text-muted">Everything you need to know about our services</p>
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
