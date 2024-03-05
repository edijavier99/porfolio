import React from "react";
import {Button} from "../components/button.js";
import "../styles/slides.css"

export const  Slide = (props) =>{
    const  {foto1,foto2} = props
    return( 
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
    <div className="carousel-inner">
    <div className="carousel-item active" >
        <div className="container">
            <h2>WEB DESING</h2>
            <p className="mb-4">Somos lo que ven de nosotros</p>
            <Button
                className="btn"
                color="primary"
                url="https://www.w3schools.com"
                name="Contac Us"
            /> 
        </div>
    </div>
    <div className="carousel-item ">
        <div className="container">
            <h2>Edi Javier</h2>
            <p className="mb-4">Web developer</p>
            <Button
                className="btn"
                color="primary"
                url="https://www.w3schools.com"
                name="Contac Us"
            /> 
        </div>
    </div>
  </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
     
    )
}
