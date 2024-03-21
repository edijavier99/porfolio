import "../styles/App.css"
import { Reviews } from "../components/reviews";
import { AnimatedText } from "../components/textanimation";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";
import { IntroductionBoard } from "../components/introductionBoard";

function  Home() {
  return (
    <div className="App">
      <IntroductionBoard/>
		  <Presentation/>
      <Projects/>
      <AnimatedText frase1={"Guiarte"} frase2={"Avanzar"} frase={"Apoyarte"}/>
      <Reviews/>
    </div>
  );
}

export default Home;
