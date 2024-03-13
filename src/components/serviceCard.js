import React from "react";
import "../styles/servicecard.css"

export const ServiceCard = (props) =>{
    return(
        <section className="service-card">
            <div className="service-card-header">
                <img src={props.item.img} alt={props.item.title}/>
            </div>
            <div className="service-card-body p-3">
                <h4>{props.item.name}</h4>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}