import React from "react";
import "../styles/presentation.css"

export const Presentation = () =>{
    return(
        <section id="presentation-board" className="container-fluid d-flex">
            <div className="row">
                <div className="col-ms-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="inner-right-side ">
                        <img className="presentation-img" src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="" />
                        <div className="background-img"></div>
                    </div>
                </div> 
                <div className="col-ms-12 col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
                    <header className="presentation-title">
                        <p className="p-0 my-0 mx-5"><strong>who we are</strong></p>
                        <h1 >Ilarazi</h1>
                        <div className="yellow-line"></div>
                    </header>
                    <main>
                        <p>
                        In a world where technology is evolving constantly, 
                        we are here to help you keep up and grow your business. 
                        Our commitment is to merge digital innovation with 
                        your business vision to build a striking online presence. 
                        </p>
                        <p> Our team is dedicated to providing continuous assistance to 
                            ensure your website remains up-to-date, secure, and optimized 
                            for performance. Let us handle the technical aspects so you can focus on growing 
                            your business with confidence. Our services include:
                        </p>
                        <ul>
                            <li>Customized website designs tailored to your brand</li>
                            <li>Personalized digital marketing strategies for your unique business goals</li>
                            <li>Dedicated technical support to keep your online presence running smoothly</li>
                        </ul>
                        <p>
                        Join us, and together, we will make your business stand out in the digital era.
                        </p>
                    </main>
                    <button className="btn contact-btn">Get Started</button>
                </div>
            </div>
        </section>
    )
}
