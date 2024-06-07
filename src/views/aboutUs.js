import React from "react";
import "../styles/about.css"

export const AboutUs = () =>{
    return(
        <section id="aboutUs">
            <section className="aboutUs-hero container-fluid">
                <div className="row col-md-10 mx-auto hero-aboutUs">
                    <div className="col-md-4 d-flex align-items-center justify-content-center hero-left-side">
                        <p style={{fontSize: "20px", fontWeight: "bold"}}> <strong>About Us. <br/> Our Team. <br/>Press.</strong></p>
                    </div>
                    <div className="col-md-8 mt-5">
                        <h4 className="aboutUs-title">ABOUT US.</h4>
                        <p className="aboutUs-description">Welcome to We Coded, a premier software development 
                            company dedicated to bringing innovative digital solutions to life. Our expertise spans 
                            across custom software development and website design. We pride 
                            ourselves on delivering high-quality, scalable, and user-centric products that empower
                            businesses to achieve their goals. At We Coded, we combine cutting-edge technology
                            with creative vision to turn your ideas into reality. Partner with us and experience
                            the future of software development today.
                        </p>
                    </div>
                </div>
                <div className="row col-md-10 mx-auto my-5 ">
                    <div className="col-md-5 offset-md-1 quote-container">
                        <img alt="quote-img" src="https://images.unsplash.com/photo-1564410267845-ae5acf1ce8d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="col-md-4 offset-md-1  d-flex align-items-center justify-content-center">
                        <blockquote>
                            "Quality in a service or product is not what you put into it. It is what the customer gets out of it." <br/>
                            <cite className="text-muted">- Peter Drucker</cite>
                        </blockquote>
                    </div>    
                </div>
                <div className="row col-md-10 mx-auto my-3" id="history">
                    <h4 className="subtitle-aboutUs mb-5" >Our History</h4>
                    <p>Our journey began with a simple realization: businesses needed to adapt to the rapidly evolving technological landscape. We saw an opportunity to help our clients navigate this dynamic world, and from that vision, We Coded was born. Fueled by our passion for innovation and excellence, we dedicated ourselves to creating cutting-edge software solutions, and websites. Our mission is to empower businesses to thrive in the digital age, transforming their ideas into reality with creativity and technical expertise. Join us on this exciting journey and let's shape the future together.</p>

                </div>
                <div className="row col-md-10 mx-auto py-5" id="values">
                    <h4 className="subtitle-aboutUs">Our Values</h4>
                    <div className="row values-cards-container mx-auto">
                        <div className="value-card">
                            <header>
                                <img alt="value-card-image" src="https://media-public.canva.com/bPpFw/MAFuCvbPpFw/1/tl.png" />
                            </header>   
                            <main>
                                <h6 className="fw-bold">Team Work</h6>
                                <p>We believe in the power of collaboration, where every team member contributes to achieving common goals.</p>
                            </main>
                        </div>
                        <div className="value-card">
                            <header>
                                <img alt="value-card-image" src="https://media-public.canva.com/p4Hng/MAFOFxp4Hng/1/tl.png" />
                            </header>   
                            <main>
                                <h6 className="fw-bold">Take Ownership</h6>
                                <p>We take responsibility for our actions and outcomes, ensuring the highest quality in everything we do.</p>
                            </main>
                        </div>
                        <div className="value-card">
                            <header>
                                <img alt="value-card-image" src="https://media-public.canva.com/2MNwI/MAFa312MNwI/1/tl.png" />
                            </header>   
                            <main>
                                <h6 className="fw-bold">Work Smart</h6>
                                <p>We prioritize efficiency and innovation, finding the best solutions through intelligent and strategic efforts.</p>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}