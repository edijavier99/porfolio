import React from "react";

export const Cards = (props) =>{
    const {photo,title,text,job,altura,anchura,nClase,startClass,borderClass} = props
    return(
    <div className={`card ${borderClass}`}>
        <div className="row d-flex justify-content-center"> 
            <div className="col-12 text-center">
                <img className={nClase} width={anchura} height={altura} src={photo}  alt="review-img"/>
            </div>
        </div>
        <div className="card-body">
            <div className=" container-fluid d-flex align-items-center justify-content-center text-center flex-column">
               <h4 className="card-title">{title}</h4>
               <h6 className="text-primary">{job}</h6>
               <p className="card-text"> <i className={startClass}></i>{text}</p>
            </div>
        </div>
    </div>
    )
}
