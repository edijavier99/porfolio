import React from "react";
import "../styles/whyus.css"
import dots from "../img/dots.png"

export const WhyUs = () =>{
    return(
        <section id="why-us-container" className="pt-5">
            <div className="row col-10 mx-auto">
                <h2>WHY US ?</h2>
                <p>It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its layout. The point of using Lorem</p>
            </div>
            <div className="row col-11 col-md-9 col-lg-9 mx-auto d-flex justify-content-between row-why-us ">
                <article className="why-us-card first-card">
                    <p className="card-number">01</p>
                    <p className="card-title">Expertise in Software Development</p>
                    <p className="card-description text-muted">With over a decade of experience in the software development industry, we have honed our skills to provide cutting-edge solutions to our clients. From mobile applications to enterprise-level systems, our team of experts is dedicated to delivering high-quality, scalable software tailored to your specific needs.</p>
                </article>
            </div>
            <div className="row col-11 col-md-9 col-lg-9  mx-auto d-flex justify-content-end">
                <article className="why-us-card second-card">
                    <p className="card-number">02</p>
                    <p className="card-title">Innovative Solutions</p>
                    <p className="card-description text-muted">At our core, we are driven by a passion for helping our clients succeed. We take the time to truly understand their unique challenges and goals, and we work closely with them every step of the way to ensure that we deliver solutions that exceed their expectations. Our client-centric approach means that we prioritize communication, transparency, and collaboration, so you can trust that we'll always have your best interests at heart.</p>
                </article>
            </div>
            <div className="row col-11 col-md-9 col-lg-9  mx-auto">
                <article className="why-us-card third-card">
                    <p className="card-number">03</p>
                    <p className="card-title">Client-Centric Approach</p>
                    <p className="card-description text-muted">Our commitment to our clients doesn't end when the project is complete. We understand that technology is constantly evolving, and your needs may change over time. That's why we offer continuous support and maintenance services to ensure that your software remains up-to-date, secure, and performing at its best. Whether you need troubleshooting assistance, feature enhancements, or system updates, you can count on us to be there for you every step of the way.</p>
                </article>
            </div>
            <img src={dots} alt="" className="services-stylish-img-container-down"/>

            <div className="row col-11 col-md-9 col-lg-9  mx-auto d-flex justify-content-end mb-5">
                <article className="why-us-card fourth-card">
                    <p className="card-number">04</p>
                    <p className="card-title">Continuous Support</p>
                    <p className="card-description text-muted">We pride ourselves on our ability to stay ahead of the curve when it comes to technology. Our team is constantly researching and experimenting with the latest tools and methodologies to ensure that we deliver innovative solutions that meet the evolving needs of our clients. Whether it's harnessing the power of artificial intelligence or exploring the potential of blockchain, we're always exploring new possibilities.</p>
                </article>
            </div>
        </section>
    )
}