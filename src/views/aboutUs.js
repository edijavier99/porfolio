import React from "react";
import "../styles/about.css"
import { WhyChooseCard } from "../components/whychoosecard";

export const AboutUs = () =>{
    return(
        <section className="container-fluid">
            <header className="row">
                <div className="col-12 about-back-img d-flex flex-column align-items-center justify-content-center ">
                    <h3 className="about-out-title">COMPANY PROFILE</h3>
                    <h1 className="about-out-title">ABOUT US</h1>
                </div>
            </header>
            <div className="row col-md-10">
            <div className="col-md-5 abt-intro-img-board d-flex flex-column justify-content-center align-items-end">
                    <img className="abt-up-img mb-4 col-8" src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg" alt="" />
                    <img className="abt-bottom-img col-8" src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg" alt=""/>
                </div>
                <div className="col-md-7 p-5">
                    <h2>Let tomorrow begin today:</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                     </p>
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
                    <h3>Our Vision</h3>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
                    <h3>Our Strategy</h3>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 bg-secondary">
                    <marquee className="programming-lang">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-python"></i>
                        <i className="fab fa-js"></i>
                        <i className="fab fa-react"></i>
                    </marquee>
                </div>
            </div>
            <section className="row col-md-10 d-flex flex-column align-items-center why-choose-board">
                <header className="col-md-3 text-center mb-3 p-0">
                    <div class="square-box">
                        <h3 className="mb-0 fw-bold">Why to choose us</h3>
                        <p className="text-muted">As always partners grow with you!</p>
                    </div>
                </header>
                <main className="col-md-9">
                    <div className="row">
                        <WhyChooseCard title="Professional" 
                                       icon="fa-user-tie"
                                       description="Our commitment to professionalism ensures
                                        that every website we craft for your company embodies
                                         the highest standards of web development excellence."
                        />
                        <WhyChooseCard title="Experience" 
                                       icon="fa-suitcase"
                                       description="Drawing from our extensive experience,
                                        we guarantee that each website we create for your company
                                         is backed by a wealth of industry knowledge and expertise."
                        />
                        <WhyChooseCard title="Quality" 
                                       icon="fa-rocket"
                                       description="Focusing on web solutions, our team combines 
                                       technical expertise and attention to detail to produce
                                        sites that not only meet but exceed your expectations."
                        />
                    </div>
                </main>
            </section>
        </section>
    )
}