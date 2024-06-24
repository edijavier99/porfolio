import React from "react";

export const ContactBtn = (props) =>{
    const {name} = props
    return(
        <button type="button" className="btn btn-primary navbarBtnModal" data-bs-toggle="modal" data-bs-target="#contactModal">
            Contact Us
        </button>
    )
}
