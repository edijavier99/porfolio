import "../styles/App.css"
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Reviews } from "../components/reviews";
import { AnimatedText } from "../components/textanimation";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";
import { IntroductionBoard } from "../components/introductionBoard";

function  Home() {
  const menu = [
    { label: "Home", url: "/" },
    { label: "Contact Us", url: "/contact-me" },
    { label: "About Us", url: "/about-us" },
    { label: "Portfolio", url: "/portfolio" }
];
  return (
    <div className="App">
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
