import React from "react";
import {Button} from "../components/button.js";
import "../styles/slides.css"
import img from "../img/ecommerce.jpg"

export const  Slide = (props) =>{
    const  {foto1,foto2} = props
    return( 
    <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#reviewsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" >
                <i className="fas fa-quote-left"></i>
                <div className="container p-5"> 
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi</p>
                </div>
                <img className="review-img" src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg" />
            </div>
            <div className="carousel-item ">
            <i className="fas fa-quote-left"></i>
                <div className="container p-5"> 
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi</p>
                </div>
                <img className="review-img" src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg" />
            </div>
        </div>
    </div>
    )
}
