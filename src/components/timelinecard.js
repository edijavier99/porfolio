import React from "react";

export const TimelineCard = (props) =>{
    return(
        <>
        <div className="row col-md-10 steps-timeline mx-auto">
                <div className="col-md-3 steps-name text-center">
                    <p>{props.title}</p>
                </div>
                <div className="middle-separator col-md-1">
                    <div className="middle-circle">
                        <div className="inner-middle-circle">
                        </div>
                    </div>
                    <div className="stick" style={{backgroundColor: props.stickColor}}></div>
                </div>
                <div className="col-md-8 steps-description">
                    <p className="subtitle">{props.subtitle}</p>
                    <p className="mb-5">{props.description}</p>
                </div>
            </div>
        </>
    )
}