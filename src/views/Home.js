import "../styles/App.css"
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Reviews } from "../components/reviews";
import logoo from "../img/logo.png"
import { AnimatedText } from "../components/textanimation";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";
import { IntroductionBoard } from "../components/introductionBoard";

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
      <IntroductionBoard/>
		  <Presentation/>
      <Projects/>
      <AnimatedText frase1={"Guiarte"} frase2={"Avanzar"} frase={"Apoyarte"}/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Home;
