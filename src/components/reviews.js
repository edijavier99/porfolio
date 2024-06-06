import React, { useState } from "react";
import '../styles/reviews.css';
import Acs from "../img/acs.PNG"
import Vc from "../img/vcclinic.png"

 const reviews = [
    {
        id: 1,
        description: "Working with We Coded has been an exceptional experience. Their team of developers is highly professional and perfectly captured our vision for the project. Not only did they deliver a high-quality product, but they also provided continuous support, ensuring...",
        imgSrc: Acs,
        name: "AC Services"
    },
    {
        id: 2,
        description: "We specialize in creating custom software solutions that perfectly fit the specific needs of each client. Whether you need an intuitive mobile app, a robust enterprise management system, or a dynamic web platform, our team has the experience...",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jesus Coach"
    },
    {
        id: 3,
        description: "At our company, we are committed to being the trusted partner of our clients on their journey to digital transformation. We offer a full range of software development services, from consulting and strategic planning to design, development, and implementation.",
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
                <div className="review-description col-9">
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
