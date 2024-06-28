import React from "react";
import "../styles/faq.css";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of software development services, including enterprise management systems, custom web platforms, and websites. Our enterprise management systems are tailored to enhance operational efficiency and productivity. Custom web platforms are designed to meet specific business needs, ensuring scalability and robust performance. We also develop websites that provide a strong online presence and exceptional user experience."
    },
    {
        question: "What is the project delivery time?",
        answer: "The project delivery time varies depending on the scope and complexity of the project. Generally, our projects take between 1 and 3 months to complete. We follow a structured project management approach to ensure timely delivery while maintaining high-quality standards."
    },
    {
        question: "How do you guarantee the quality of your products?",
        answer: "We use agile methodologies and continuous testing throughout the development process to ensure the highest quality in our products. Additionally, we hold meetings and provide reports every Friday with our clients to keep them updated and ensure they are satisfied and in agreement with the results. This regular communication helps us maximize results according to the client's expectations."
    },
    {
        question: "Do you offer support after delivery?",
        answer: "Yes, we offer continuous support and maintenance after delivery to ensure that our clients are completely satisfied with our services. Our support services include troubleshooting, updates, and enhancements to keep your software running smoothly."
    },
    {
        question: "Do you implement AI solutions?",
        answer: "Yes, we implement AI solutions if required by the client or if it can be beneficial for the client's business. As the AI industry continues to grow, we stay updated with the latest advancements and integrate AI technologies to enhance business operations, provide data-driven insights, and improve overall efficiency."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We specialize in a variety of technologies including Python, Django, Flask, Node, Express for backend development. For frontend development, we use frameworks such as React, Angular. Our mobile development expertise includes React Native. We also work with various databases like MySQL, PostgreSQL, and MongoDB."
    },
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
        </section>
    );
};
