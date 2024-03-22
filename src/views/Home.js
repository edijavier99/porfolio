import "../styles/App.css"
import { Reviews } from "../components/reviews";
import { Presentation } from "../components/presentation";
import { Projects } from "../components/projects";
import { IntroductionBoard } from "../components/introductionBoard";

function  Home() {
  return (
    <div className="App">
      <IntroductionBoard/>
		  <Presentation/>
      <Projects/>
      <Reviews/>
    </div>
  );
}

export default Home;
