import "../styles/App.css"
import { Presentation } from "../components/presentation";
import { IntroductionBoard } from "../components/introductionBoard";
import { ShowBar } from "../components/showbar";
import { WhyUs } from "../components/whyus";

function  Home() {
  return (
    <div className="App">
      <IntroductionBoard/>
      <ShowBar/>
      <WhyUs/>
    </div>
  );
}

export default Home;
