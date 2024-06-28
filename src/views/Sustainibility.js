import React from "react";
import { SwiperCard } from "../components/swiper";
import "../styles/sustainibility.css"
import Sus1  from "../img/sus1.png"
import Sus3  from "../img/sus3.png"

export const Sustainibility = () =>{
    return(
        <section id="sustainability" className="container-fluid">
        <div className="row col-11 mx-auto intro-sustainability pt-5">
            <div className="col-12 col-md-6 wc-left-side">
                <img alt="sustainibility-forest" src={Sus1} />
            </div>
            <div className="col-12 col-md-6 is-left-side">
                <h3>Real Impact On Environment</h3>
                <p>
                    Sustainability of the planet is essential to ensure a prosperous and balanced future for generations to come. In a world where natural resources are finite, it is crucial to adopt responsible practices that minimize our impact on the environment and promote biodiversity conservation. From reducing carbon emissions to protecting fragile ecosystems, every action counts in our collective effort to preserve the health and beauty of our shared home, Earth.
                </p>
            </div>
        </div>
        <div className="row col-11 mx-auto intro-sustainability">
            <div className="col-12 col-md-6 is-left-side">
                <h3>How We Collaborate</h3>
                <p>
                    At WeCoded, we believe in making a positive impact on the environment through our actions. For every client we have, we plant a tree, contributing to reforestation efforts and helping to create a greener, healthier planet. This initiative not only offsets our carbon footprint but also demonstrates our commitment to sustainability and environmental stewardship.
                </p>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-first">
                <SwiperCard />
            </div>
        </div>
        <div className="row col-11 mx-auto intro-sustainability">
            <div className="col-12 col-md-6 wc-left-side">
                <img alt="sustainibility-plant-tree" src={Sus3} />
            </div>
            <div className="col-12 col-md-6 is-left-side">
                <h3 className="sustainability-subheader-small py-4">Additional Initiatives</h3>
                <ul className="sustainability-list">
                    <li><strong>Energy Efficiency:</strong> <br /> We utilize energy-efficient technologies in our offices and encourage remote work to reduce commuting-related emissions.</li>
                    <li><strong>Waste Reduction:</strong> <br /> By implementing rigorous recycling programs and minimizing paper use, we aim to significantly reduce our waste footprint.</li>
                    <li><strong>Sustainable Sourcing:</strong> <br /> We prioritize working with suppliers who adhere to sustainable practices and offer eco-friendly products and services.</li>
                    <li><strong>Community Engagement:</strong> <br /> We actively participate in environmental awareness campaigns and partner with local organizations to support conservation projects and educational initiatives.</li>
                </ul>
            </div>
        </div>
        <div className="row col-md-11 mx-auto py-5">
            <div className="col-md-8 mx-auto text-center">
                <h4 className="sustainability-subheader">Commitment to Continuous Improvement</h4>
                <p>We Coded is committed to continuously improving our sustainability efforts. We regularly review and update our practices to ensure they align with the latest environmental standards and innovations. By fostering a culture of sustainability within our organization, we empower our employees and clients to contribute to a more sustainable future.</p>
            </div>
        </div>
        <hr/>
    </section>
    )
}