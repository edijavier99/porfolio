import React from "react";

export const ContactBtn = (props) =>{
    const {name} = props
    return(
        <button className={`btn btn-primary my-3`} data-bs-toggle="modal" data-bs-target="#contactModal" type="button" role="button">{name}</button>
    )
}
