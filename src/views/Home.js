import "../styles/App.css"
import { Presentation } from "../components/presentation";
import { IntroductionBoard } from "../components/introductionBoard";
import { ShowBar } from "../components/showbar";
import { WhyUs } from "../components/whyus";
import {Reviews} from "../components/reviews"
import { FAQ } from "../components/faq";
import { Services } from "../components/services";

function  Home() {
  return (
    <div className="App">
      <IntroductionBoard/>
      <Services />
      <WhyUs/>
      <Reviews />
      <FAQ/>
    </div>
  );
}

export default Home;
