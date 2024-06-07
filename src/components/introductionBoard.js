import React from "react";
import "../styles/introductionBoard.css"


export const  IntroductionBoard= (props) =>{
    return( 
    <section id="introduction-board" className="row container-fluid mx-0 px-0">
       <div className="ib-left-side col-md-7 d-flex flex-column ">
            <h1><span className="service-type-intro">Apps. <br/> Websites. <br/>  Softwares.<br/></span> <p className="header-second-title"> We solve your company's problems and elevate your brand.</p></h1>
            <p>We craft unique web applications and websites that boost your business's visibility and performance. Our solutions are tailored to meet your company's specific challenges, ensuring enhanced results and a standout presence in the digital world.</p>
            <div className="ib-btn-container">
            <a  href="#contact" className="btn btn-primary btnQuote m-4">GET A QUOTE</a>
            </div>
       </div>
       <div className="ib-right-side col-md-5 px-0">
       </div>
    </section>
    )
}

