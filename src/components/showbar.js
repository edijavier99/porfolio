import React from "react";
import "../styles/showbar.css"

export const ShowBar= () =>{
    return(
        <section id="showbar-container">
            <ul className="mb-0">
                <li className="show-bar-item">Development</li>
                <li className="show-bar-item">Websites</li>
                <li className="show-bar-item">Softwares</li>
                <li className="show-bar-item">Apps</li>
                <li className="show-bar-item">Branding</li>
            </ul>
        </section>
    )
}