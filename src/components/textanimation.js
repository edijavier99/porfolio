import React from "react";
import  { useState, useEffect } from 'react';

export const  AnimatedText = (props)=>{
    let {frase1,frase2,frase} = props
    const names = [`${frase1}`, `${frase2}`, `${frase}`];

    const [nameIndex, setNameIndex] = useState(0);
    const [showName, setShowName] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setShowName(false);
        setTimeout(() => {
          setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
          setShowName(true);
        }, 500);
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [names.length]);
  
  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center animatedText flex-row" style={{ height: '300px'}}>
        <div className="d-flex align-items-center justify-content-center mx-3 ">
        <h6>Estamos aqui para ayudarte</h6>     
         </div>
        <h1 className={`text-dark ${showName ? 'fade-in' : 'fade-out'}`}>{names[nameIndex]}</h1>     
    </div>
  );
   
}

