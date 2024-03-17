import React from "react";
import {Button} from "./button.js";
import "../styles/introductionBoard.css"

export const  IntroductionBoard= (props) =>{
    return( 
    <section id="introduction-board">
        <div className="introduction-board-left-side">
            <div className="inner-introduction-board-left-side">
                <h3>WE PROVIDE SOLUTIONS.</h3>
                <h3>WE PROVIDE IDEAS.</h3>
                <h3 className="company-name"><strong>&lt; WE ARE ERAGIN /&gt;</strong></h3>
                <h6>Your parnsership to grow your bussiness.</h6>
            </div>
        </div>
        <div className="introduction-board-right-side"></div>
    </section>
    )
}
