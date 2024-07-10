import React, { useState } from "react";
import '../styles/reviews.css';
import Acs from "../img/acs.PNG"
import Vc from "../img/vcclinic.png"

 const reviews = [
    {
        id: 1,
        description: "We are a facilities company based in London, and recently many of our potential clients were requesting our website to view our services and more, something we hadn't considered until now. After recognizing the demand, we contacted We Coded to create a presentation of our company, services, clients, and more. It has been a straightforward process, easy to manage alongside our existing workload, and they have been very patient when gathering the required information from us. We are very pleased with the work done and would definitely recommend them.😊",
        imgSrc: Acs,
        name: "AC Services"
    },
    {
        id: 2,
        description: "I am a personal trainer and fitness coach, and due to the volume of work and the fact that I need to travel to different locations frequently, I decided to make everything more remote and online. I didn't have much idea about the process or how to do it, but We Coded guided me through it, making everything simple. Whenever I had a question or concern, they were there to help me out. The final product exceeded my expectations and is now helping me manage, administer, and track my clients and appointments remotely.",
        imgSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jesus Antonio"
    },
    {
        id: 3,
        description: "We are a family-owned dental clinic with 10 years in the market. Due to the increasing demand from clients to find us online, we decided to trust We Coded and work with them to create our website. We were a bit apprehensive at first, but it turned out to be a pleasant process. We are very happy with the final result. Thank you so much, guys!",
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
            <p className="title-description">At We Coded, <strong>we deeply value the opinions of our clients</strong> as they are integral to our commitment to excellence. Our dedication to providing the best service possible is unwavering. We take every piece of feedback into careful consideration, utilizing it as a guiding light to continuously refine and enhance our services, ensuring that we consistently exceed expectations.</p>
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
