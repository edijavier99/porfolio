import React from "react";
import "../styles/about.css"

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
            <div className="row col-md-10">

            </div>
        </section>
    )
}