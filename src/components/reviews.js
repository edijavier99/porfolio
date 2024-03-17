import React from "react";
import logo from "../img/logo192.png"
import { Cards } from "./cards.js";

export const Reviews = () =>{
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
            <div className="row d-flex justify-content-center">
                <div className="col-8 text-center">
                    <h1 className="mb-4">TESTIMONIOS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. </p>
                </div>
            </div>
            <div className="row text-center col-11 mt-4">
                <div className="col-12 col-md-4 mb-5">
                    <Cards
                        photo="https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236_1280.jpg"
                        borderClass="border-0" 
                        startClass="fas fa-quote-left pe-2" 
                        nClase="rounded-circle shadow-1-strong" 
                        altura="150px" anchura="150px" 
                        title={"Alex Morgan"} 
                        job={"web-developer"} 
                        className={"fas fa-quote-left pe-2"}
                        text= {"Ut enim ad minima veniam, quis nostru exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."}
                    />
                    <ul className="list-unstyled d-flex justify-content-center mb-0">
                        <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                        </li>
                        <li>
                        <i className="fas fa-star fa-sm text-warning"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-warning"></i>
                        </li>
                        <li>
                            <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 mb-5">
                <Cards
                     photo="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
                      borderClass="border-0" 
                      startClass="fas fa-quote-left pe-2" 
                      nClase="rounded-circle shadow-1-strong" 
                      altura="150px" anchura="150px" 
                      title={"Alex Morgan"} 
                      job={"Manager"} 
                      className={"fas fa-quote-left pe-2"}
                      text= {"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."}/>
                              <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                </div>   
                <div className="col-12 col-md-4 mb-5">
                <Cards
                      photo="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
                      borderClass="border-0" 
                      startClass="fas fa-quote-left pe-2" 
                      nClase="rounded-circle shadow-1-strong" 
                      altura="150px" anchura="150px" 
                      title={"Alex Morgan"} 
                      job={"Engineer"} 
                      className={"fas fa-quote-left pe-2"}
                      text= {"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."}/>
                            <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                </div>   
            </div>
        </div>
    )
}

