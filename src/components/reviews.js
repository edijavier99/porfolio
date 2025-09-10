import React, { useState } from "react";
import '../styles/reviews.css';
import Acs from "../img/acs.PNG"
import Vc from "../img/vcclinic.png"
import superfanbase from "../img/superfanbase.png"
import togethr from "../img/togethr.png"

const reviews = [
  {
    id: 1,
    description:
      "We are a facilities company based in London, and recently many of our potential clients were requesting our website to view our services and more, something we hadn't considered until now. After recognizing the demand, we contacted We Coded to create a presentation of our company, services, clients, and more. It has been a straightforward process, easy to manage alongside our existing workload, and they have been very patient when gathering the required information from us. We are very pleased with the work done and would definitely recommend them.😊",
    imgSrc: Acs,
    name: "AC Services",
    link: "https://acservices-1.onrender.com/"
  },
  {
    id: 2,
    description:
      "I am a personal trainer and fitness coach, and due to the volume of work and the fact that I need to travel to different locations frequently, I decided to make everything more remote and online. I didn't have much idea about the process or how to do it, but We Coded guided me through it, making everything simple. Whenever I had a question or concern, they were there to help me out. The final product exceeded my expectations and is now helping me manage, administer, and track my clients and appointments remotely.",
    imgSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jesus Antonio",
    link: "#"
  },
 
  {
    id: 4,
    description:
      "Working with We Coded was a fantastic experience. We came in with just an initial idea for our platform, and they helped us refine it, design the user experience, and launch it successfully. Their guidance turned our vision into a functional live product that our users love.",
    name: "Superfanbase",
    imgSrc:superfanbase ,
    link: "https://superfanbase.com"
  },
  {
    id: 5,
    description:
      "We had an idea for a social platform but didn’t know where to start. The We Coded team helped us structure our concept, design the interface, and bring it to life. The result was a polished MVP that allowed us to validate our idea and present it confidently to potential partners.",
    imgSrc: togethr,
    name: "Togethr Social",
    link: "https://togethrsocial.com"
  },
  {
    id: 6,
    description:
      "We started with a simple MVP to test our concept, and with We Coded’s help we transformed it into a ready-to-go platform. Their technical and strategic input gave us the confidence to stress-test our business model in the real world, and the results have been amazing.",
    imgSrc: "https://media.licdn.com/dms/image/v2/D4E0BAQGwarH4Htnnjg/company-logo_200_200/company-logo_200_200/0/1724149874738/tokunize_logo?e=2147483647&v=beta&t=LJ3K44Ud2VPuNqRL7r1d6YI5mJSMLYCGSdNmUpDE6TA",
    name: "Tokunize",
    link: "https://www.linkedin.com/company/tokunize/posts/?feedView=all"
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
      <a 
        href={review.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-decoration-none text-dark"
      >
        <img 
          src={review.imgSrc} 
          className="img-fluid object-fit-contain" 
          alt={review.name} 
        />
        <p><strong>{review.name}</strong></p>
      </a>
    </div>
  ))}
</div>

            </div>
        </section>
    );
};
