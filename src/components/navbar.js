import React from "react";
import "../styles/nabvar.css"
import Logo from "../img/logowecoded.jpg"
import { ContactModal } from "./contactModal";

export const  Navbar = (props) =>{
    const items = props.items.map((item, index )=> (
        <li className="nav-item" key={index}>
          <a className="nav-link " href={item.url}>
            {item.label}
          </a>
        </li>
      ));
    return(            
    <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="/"><img alt="logo" src={Logo}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pe-4" id="navbarNav">
                <ul className="navbar-nav mr-auto">{items}</ul>
                <ContactModal />
            </div>
    </nav>
    )
}

