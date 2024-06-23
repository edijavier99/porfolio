import React, { useState } from "react";
import '../styles/reviews.css';
import Acs from "../img/acs.PNG"
import Vc from "../img/vcclinic.png"

 const reviews = [
    {
        id: 1,
        description: "Working with We Coded has been an incredible experience. Their team of developers is highly professional and perfectly captured our vision for the project. Not only did they deliver a high-quality product, but they also provided continuous support, ensuring everything ran smoothly. Whenever an issue arose, they resolved it quickly and efficiently.😊",
        imgSrc: Acs,
        name: "AC Services"
    },
    {
        id: 2,
        description: "Our collaboration with We Coded has been exceptional. From the start, they demonstrated attention to detail and efficient communication, making us feel confident throughout. The quality of the final product exceeded our expectations, and their ability to quickly resolve any issues was impressive.",
        imgSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jesus Coach"
    },
    {
        id: 3,
        description: "We Coded has become our trusted partner in digital transformation. Their commitment to quality and their ability to understand our specific needs has been crucial to the success of our projects. Every problem was addressed swiftly and professionally, allowing us to move forward without any hitches.",
        imgSrc: Vc,
        name: "VC Dental Clinic"
    }
];

export const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(reviews[0]);

    return (
        <section id="reviews" className="text-center">
            <p className="text-muted category">TESTIMONIALS</p>
            <h4>Our Happy Clients</h4>
            <p className="title-detail text-muted">What They Say About Us</p>
            <p className="title-description">At We Coded, we deeply value the opinions of our clients as they are integral to our commitment to excellence. Our dedication to providing the best service possible is unwavering. We take every piece of feedback into careful consideration, utilizing it as a guiding light to continuously refine and enhance our services, ensuring that we consistently exceed expectations.</p>
            <div className="carousel-container">
                <div className="review-description col-11 col-md-9 col-lg-9">
                    <div className="d-flex align-items-center review-description-inner">
                        <i className="fa-solid fa-quote-left me-3"></i>
                        <p className="mb-0">{selectedReview.description}</p>
                    </div>
                </div>
                <div className="thumbnails mb-5">
                    {reviews.map(review => (
                        <div 
                            key={review.id} 
                            className={`thumbnail ${review.id === selectedReview.id ? 'selected' : 'not_selected'}`} 
                            onClick={() => setSelectedReview(review)}
                        >
                            <img src={review.imgSrc} alt={review.name} />
                            <p><strong>{review.name}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
