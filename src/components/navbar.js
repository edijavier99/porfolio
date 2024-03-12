import React from "react";
import "../styles/nabvar.css"

export const  Navbar = (props) =>{
    const items = props.items.map((item, index )=> (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={item.url}>
            {item.label}
          </a>
        </li>
      ));
    return(            
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={props.logo} style={{ width: '80px', height: '60px' }} alt="navbar-logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav mr-auto">{items}</ul>
            </div>
        </div>
    </nav>
    )
}
