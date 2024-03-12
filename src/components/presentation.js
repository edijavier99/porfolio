import React from "react";
import "../styles/presentation.css"

export const Presentation = () =>{
    return(
        <section id="presentation-board">
            <section className="right-side">
                <div className="inner-right-side ">
                    <img className="presentation-img" src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="" />
                    <div className="background-img"></div>
                </div>
            </section>
            <section className="left-side">
                <header className="">
                    <p className="p-0 my-0 mx-5"><strong>who we are</strong></p>
                    <h1 >ERAGIN</h1>
                </header>
                <main className="">
                    <p>
                    In a world where technology is evolving constantly, 
                    we are here to help you keep up and grow your business. 
                    We are an agency specialized in creating customized 
                    websites for small businesses and entrepreneurs. 
                    Our commitment is to merge digital innovation with 
                    your business vision to build a striking online presence. 
                    </p>
                    <p>
                    Ready to take the leap into the digital future? <br/>
                    Join us, and together, we will make your business stand out in the digital era.
                    </p>
                </main>
            </section>
        </section>
    )
}

