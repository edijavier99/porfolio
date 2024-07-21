import React from "react";
import "../styles/footer.css"

export const Footer = ()=>{
    return(
        <footer className="page-footer font-small blue p-5 pb-1">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <h5 className="text-uppercase">WeCoded.co.uk</h5>
                        <p>Discover the world of possibilities with WeCoded.co.uk. From innovative web solutions to cutting-edge software development, we're here to turn your digital dreams into reality. Our expert team is dedicated to providing you with tailored solutions that meet your unique needs. Let's collaborate and create something extraordinary together!</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase text-center">Web Pagination</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sustainibility">Sustainibility</a></li>
                            <li><p href="#!">London,UK</p></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">NEWSLETTER</h5>
                        <p>Suscribe to our blog to find interesting information bout 
                            the last technology features.
                        </p>
                        <form className="signUpForm  d-flex flex-column ">
                            <label htmlFor="newsletterInput" className="d-block fw-bold">Suscribe</label>
                            <input placeholder="Coming Soon" id="newsletterInput" className="my-3" type="gmail"/>
                            <button className="btn btn-primary">Sign Up</button>
                        </form>
                       
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center pt-4">© 2024 Copyright:
                <span className="mb-0"> www.wecoded.co.uk</span>
            </div>
        </footer>
    )
}
