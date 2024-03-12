import React from "react";
import "../styles/servicecard.css"

export const ServiceCard = (props) =>{
    return(
        <section className="service-card p-0 m-0">
            <div className="service-card-header p-0 m-0">
                <img className="p-0 m-0" src={props.item.img} alt={props.item.title}/>
            </div>
            <div className="service-card-body p-0 m-0">
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}