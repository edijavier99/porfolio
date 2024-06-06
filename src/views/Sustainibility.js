import React from "react";
import { SwiperCard } from "../components/swiper";
import "../styles/sustainibility.css"

export const Sustainibility = () =>{
    return(
        <section id="sustainibility" className="container-fluid">
            <div className="row col-10 mx-auto intro-sustainibility">
                <div className="col-12 col-md-6 is-left-side">
                    <h3>Real Impact On Enviroment</h3>
                    <p>
                        Sustainability of the planet is essential to ensure a prosperous and balanced future for generations to come. In a world where natural resources are finite, it is crucial to adopt responsible practices that minimize our impact on the environment and promote biodiversity conservation. From reducing carbon emissions to protecting fragile ecosystems, every action counts in our collective effort to preserve the health and beauty of our shared home, Earth.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <SwiperCard/>
                </div>
            </div>
            <div className="row col-10 mx-auto intro-sustainibility">
                <div className=" col-12 col-md-6 wc-left-side">
                    <img alt="" src="https://images.unsplash.com/photo-1590930180621-fc7027a21559?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="col-12 col-md-6 is-left-side">
                    <h3>How We Colaborate</h3>
                    <p>
                        At WeCoded, we believe in making a positive impact on the environment through our actions. For every client we have, we plant a tree, contributing to reforestation efforts and helping to create a greener, healthier planet. This initiative not only offsets our carbon footprint but also demonstrates our commitment to sustainability and environmental stewardship.
                    </p>
                </div>
            </div>
        </section>
    )
}