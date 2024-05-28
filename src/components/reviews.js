import React, { useState } from "react";
import '../styles/reviews.css';

 const reviews = [
    {
        id: 1,
        description: "Trabajar con We Coded ha sido una experiencia excepcional. Su equipo de desarrolladores es altamente profesional y logró captar perfectamente nuestra visión para el proyecto. No solo entregaron un producto de alta calidad, sino que también proporcionaron un soporte continuo, asegurándose.",
        imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Cliente 1"
    },
    {
        id: 2,
        description: "Nos dedicamos a crear soluciones de software a medida que se adaptan perfectamente a las necesidades específicas de cada cliente. Ya sea que necesites una aplicación móvil intuitiva, un sistema de gestión empresarial robusto o una plataforma web dinámica, nuestro equipo tiene la experiencia.",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Cliente 2"
    },
    {
        id: 3,
        description: "En nuestra empresa, nos comprometemos a ser el socio confiable de nuestros clientes en su viaje hacia la transformación digital. Ofrecemos una gama completa de servicios de desarrollo de software, desde consultoría y planificación estratégica hasta diseño, desarrollo e implementación.",
        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Cliente 3"
    }
];

export const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(reviews[0]);

    return (
        <section id="reviews" className="text-center">
            <h4>Our Happy Clients</h4>
            <p className="title-detail text-muted">What They Say About Us</p>
            <div className="carousel-container">
                <div className="description col-10">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-quote-left me-3"></i>
                        <p className="mb-0">{selectedReview.description}</p>
                    </div>
                </div>
                <div className="thumbnails">
                    {reviews.map(review => (
                        <div 
                            key={review.id} 
                            className={`thumbnail ${review.id === selectedReview.id ? 'selected' : 'not_selected'}`} 
                            onClick={() => setSelectedReview(review)}
                        >
                            <img src={review.imgSrc} alt={review.name} />
                            <p>{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

