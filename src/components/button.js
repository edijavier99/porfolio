import React from "react";

export const Button = (props) =>{
    const {name,color,url} = props
    return(
        <a className={`btn btn-${color}`} href={url} role="button">{name}</a>
    )
}
