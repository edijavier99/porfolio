import "../styles/App.css"
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Reviews } from "../components/reviews";
import { Slide } from "../components/slide";
import logo from "../img/logo192.png"
import logoo from "../img/logo.png"
import { AnimatedText } from "../components/textanimation";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";

function  Home() {
  const menu = [
		{ label: "Home", },
		{ label: "Contact Us"},
		{ label: "About Us"},
		{ label : "Portafolio"}
	];
  return (
    <div className="App">
      <Navbar items={menu} logo={logoo} />
		  <Slide foto1={logo} foto2={logo} />
		  <Presentation/>
      <Projects/>
      <AnimatedText frase1={"Guiarte"} frase2={"Avanzar"} frase={"Apoyarte"}/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Home;
