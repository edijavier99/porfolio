import React from "react";

export const WhyChooseCard = (props) =>{
    return(
        <div className="col-ms-10 p-4 col-md-3 col-lg-3 d-flex flex-column align-items-center why-us-card">
            <i className={`fa-solid ${props.icon}`}></i>
            <p className="mt-2 why-us-card-title">{props.title}</p>
            <p className="text-center">{props.description}</p>
        </div>       
    )
}