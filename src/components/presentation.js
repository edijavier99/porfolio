import React from "react";
import "../styles/presentation.css"

export const Presentation = () =>{
    return(
        <section id="presentation-board">
            <section className="right-side">
                <div className="inner-right-side ">
                    <img className="presentation-img" src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" alt="" />
                    <div className="background-img"></div>
                </div>
            </section>
            <section className="left-side">
                <header className="">
                    <p>who am I</p>
                    <h3>Edison Javier</h3>
                </header>
                <main className="">
                    <p>"Fast learner" en español se traduce como "aprendiz
                        rápido" o "aprendiz veloz". Esta frase se
                        utiliza para describir a alguien que tiene 
                        la capacidad de asimilar nuevas habilidades, 
                        conceptos o información de manera rápida y 
                        eficiente. Es una cualidad valorada en muchos 
                        entornos educativos y laborales. Por ejemplo</p>
                    <p>"Fast learner" es una característica elogiada en
                        muchas situaciones, ya que indica la capacidad 
                        de adaptación y el potencial para crecer y 
                        desarrollarse en diferentes áreas.
                    </p>
                </main>
            </section>
        </section>
    )
}

