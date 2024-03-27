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
            <div className="col-md-9 aboutUsHistory">
                <div className="card">
                    <img alt="company-img" src="https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg"/>
                    <div>
                        <h2>Ilarazi </h2>
                        <p>
                        Ilarazi was founded in 2010 to address the increasing demand for digital solutions 
                        in the business world. With technology rapidly advancing, many companies struggled
                        to capitalize on online opportunities. Recognizing this, a group of entrepreneurs
                        established Ilarazi with a clear mission: to provide innovative web solutions 
                        to help businesses adapt to the evolving digital landscape. Since then, we've 
                        remained dedicated to empowering our clients with the tools and expertise needed 
                        to succeed in the dynamic digital realm
                        </p>
                        <button>Contact</button>
                    </div>
                </div>
            </div>
            <hr className="middle-line"/>
            <div className="row col-md-9 m-auto">
                <div className="col-md-12 col-lg-6 position-relative  abt-intro-img-board d-flex flex-column justify-content-center align-items-">
                    <img className="abt-up-img mb-4 col-8  " src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg" alt="" />
                    <div class="today-div">
                        <h3>Today.</h3>
                        <h3>Tomorrow.</h3>
                        <h3>Together.</h3>
                    </div>
                    <img className="abt-bottom-img col-8" src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg" alt=""/>
                </div>
                <div className="col-md-12 col-lg-6 firstpartAbout p-5">
                    <h2>Let <strong>tomorrow</strong> begin <strong>today:</strong></h2>
                    <p>
                        At Ilarazi, we understand that the future of your business starts today.
                        We create web solutions that help you stand out in the digital world, leading your company to success.
                    </p>
                    <h4 className="fw-bold">Our Mission</h4>
                    <p>
                        Our mission is to provide every business with the digital tools necessary to reach its full potential online.
                        We translate the unique needs of each client into effective and personalized web solutions.
                    </p>
                    <h4 className="fw-bold">Our Vision</h4>
                    <p>
                        In our vision, we see a world where every business has a strong and effective digital presence.
                        We provide cutting-edge web services that drive growth and innovation for our clients.
                    </p>
                    <h4 className="fw-bold">Our Strategy</h4>
                    <p>
                        Our strategy is based on close collaboration with our clients to understand their business goals and unique challenges.
                        We create web experiences that deliver tangible results and lead to long-term success.
                    </p>
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