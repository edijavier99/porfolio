import React from "react";
import "../styles/about.css"

export const WhyChooseCard = (props) =>{
    return(
        <div className="col-ms-10 p-4 col-md-4 col-lg-4 d-flex flex-column align-items-center">
            <i className={`fas ${props.icon}`}></i>
            <h3 className="mt-2">{props.title}</h3>
            <p className="text-center">{props.description}</p>
        </div>       
    )
}