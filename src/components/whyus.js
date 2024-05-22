import React from "react";
import { WhyChooseCard } from "./whychoosecard";
import "../styles/whyus.css"

export const WhyUs = () =>{
    return(
        <section id="why-us-container" className=" mt-5">
            <h2>WHY US ?</h2>
            <p>It is a long established fact that a reader will be distracted by the readable <br/> content of a page when looking at its layout. The point of using Lorem</p>
            <div className="row col-11 mx-auto d-flex justify-content-around">
                <WhyChooseCard icon="fa-user-tie" title="Profesionals" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem" />
                <WhyChooseCard icon="fa-lightbulb" title="Experience" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem" />
                <WhyChooseCard icon="fa-handshake" title="Commitment" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem" />
            </div>
        </section>
    )
}